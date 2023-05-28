import numpy as np
import pandas as pd
import os
import tqdm
from dbService.dbConfiguration import get_request, put_request
import json
from dbService import embedding_size


def getInitialEmbedding(sys_user_id):
    number_of_questions = 5

    grand_emb_cols = ""
    for i in range(embedding_size):
        grand_emb_cols += f"AVG(grand_embedding_{i}), "
    grand_emb_cols = grand_emb_cols[:-2]

    init_emb = np.array(get_request(
        query=f"""SELECT {grand_emb_cols} FROM NoOldMen.memberEmbedding""",
        execute_many=False
    ))
    if os.name == 'nt':
        default_path = '\\'.join(__file__.split(']]')[:-1])
    else:
        default_path = '/'.join(__file__.split('/')[:-1])
    if os.name == 'nt':
        q = [pd.read_csv(f"{default_path}\\q{i+1}.csv").values for i in range(number_of_questions)]
    else:
        q = [pd.read_csv(f"{default_path}/q{i + 1}.csv").values for i in range(number_of_questions)]
    pool_was_passed = get_request(
        query=f"""SELECT PollWasPassed FROM NoOldMen.DynamicPollMember WHERE SYS_ID_grand={sys_user_id}""",
        execute_many=False
    )[0]

    if pool_was_passed:
        events_json = get_request(
            query=f"""SELECT selected_Events FROM NoOldMen.StaticPoolResult WHERE SYS_ID_grand={sys_user_id}""",
            execute_many=False
        )[0]

        events = json.loads(events_json)
        mask_questions = [events[f"question{i+1}"] for i in range(number_of_questions)]

        for i in range(number_of_questions):
            try:
                init_emb += (np.array(q[i]).T * np.array(mask_questions[i])).T.sum(axis=0)
            except ValueError:
                continue
    return init_emb


if __name__ == '__main__':
    print(getInitialEmbedding(100543))
