import numpy as np
import tqdm
from dbService.dbConfiguration import get_request, put_request
import json
from dbService import embedding_size

if __name__ == '__main__':
    all_users = get_request(
        query="""SELECT SYS_ID_grand FROM NoOldMen.StaticMember""",
        execute_many=True
    )

    even_emb_cols = ""
    for i in range(embedding_size):
        even_emb_cols += f"SUM(d.event_embedding_vector_{i}), "
    even_emb_cols = even_emb_cols[:-2]

    for user_id in tqdm.tqdm(all_users):

        _id = user_id[0]

        embs = get_request(
            query=f"""
            SELECT {even_emb_cols}
             FROM NoOldMen.AttendanceGroup b
             JOIN NoOldMen.EventGroupMap c
               ON b.SYS_ID_group = c.SYS_ID_group
             JOIN NoOldMen.EventEmbedding d
               ON c.SYS_ID_event = d.SYS_ID_event
            WHERE b.SYS_ID_grand = {_id};
            """,
            execute_many=False
        )
        user_emb = embs
        vals = f"{user_emb}"[1:-1]
        put_request(
            query=f"""
            INSERT INTO NoOldMen.memberEmbedding 
            VALUES ({user_id[0]},{vals});
            """
        )



