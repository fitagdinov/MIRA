import warnings

import numpy as np
import pandas as pd
import os
import tqdm
from dbService.dbConfiguration import get_request, put_request
import json
from dbService import embedding_size

if __name__ == '__main__':
    all_users = get_request(
        query="""SELECT SYS_ID_grand FROM NoOldMen.StaticMember""",
        execute_many=True
    )

    number_of_questions = 5

    even_emb_cols = ""
    for i in range(embedding_size):
        even_emb_cols += f"grand_init_embedding_{i}, "
    even_emb_cols = even_emb_cols[:-2]

    if os.name == 'nt':
        path = '..\\fileStorage\\'
    else:
        path = '../fileStorage/'

    avg_emb = pd.read_csv(path + 'avg_grand_embedding.csv').values[0]

    q = [pd.read_csv(path + f"q{i+1}.csv").values for i in range(number_of_questions)]

    for user_id in tqdm.tqdm(all_users):
        _id = user_id[0]

        init_emb = avg_emb

        pool_was_passed = get_request(
            query=f"""SELECT PollWasPassed FROM NoOldMen.DynamicPollMember WHERE SYS_ID_grand={_id}""",
            execute_many=False
        )[0]

        if pool_was_passed:
            events_json = get_request(
                query=f"""SELECT selected_Events FROM NoOldMen.StaticPoolResult WHERE SYS_ID_grand={_id}""",
                execute_many=False
            )[0]

            events = json.loads(events_json)
            try:
                mask_questions = [events[f"question{i+1}"] for i in range(number_of_questions)]
            except KeyError:
                warnings.warn("Old format pool keys. Unable to convert to mask")
            for i in range(number_of_questions):
                try:
                    init_emb += (np.array(q[i]).T * np.array(mask_questions[i])).T.sum(axis=0)
                except:
                    continue
        init_emb = str(init_emb.astype(float).tolist())[1:-1]

        put_request(
            query=f"""
                    INSERT INTO NoOldMen.memberInitialEmbedding 
                    VALUES ({_id},{init_emb});
                    """
        )

