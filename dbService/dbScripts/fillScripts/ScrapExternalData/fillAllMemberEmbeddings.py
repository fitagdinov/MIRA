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
        even_emb_cols += f"AVG(d.event_embedding_vector_{i}), "
    even_emb_cols = even_emb_cols[:-2]

    em = get_request(
        query=f"""SELECT * FROM NoOldMen.EventEmbedding""",
        execute_many=True
    )

    emb_dict = dict([(el[0], np.array(el[1:])) for el in em])

    for user_id in tqdm.tqdm(all_users):

        _id = user_id[0]

        events = get_request(
            query=f"""
            SELECT c.SYS_ID_event, COUNT(c.SYS_ID_event) as count
             FROM NoOldMen.AttendanceGroup b
             JOIN NoOldMen.EventGroupMap c
               ON b.SYS_ID_group = c.SYS_ID_group
            WHERE b.SYS_ID_grand = {_id}
         GROUP BY c.SYS_ID_event;
            """,
            execute_many=True
        )
        user_emb = np.zeros(embedding_size)

        for event_id, count in events:
            user_emb += emb_dict[event_id] * count

        vals = f"{user_emb.astype(float).tolist()}"[1:-1]
        put_request(
            query=f"""
            INSERT INTO NoOldMen.memberEmbedding
            VALUES ({_id},{vals});
            """
        )
