from dbService.dbConfiguration import get_request, put_request, database
from ciso8601 import parse_datetime
from typing import List
import json
from dbService import embedding_size


def addEventEmbeddingScript(event_id: List[int], embedding: List[str]):
    """
    Функция добавления нового пользователя в таблицу
    :param event_id: ID ивента
    :param embedding: Embedding ивента
    :return:
    """

    event_id = tuple(event_id)
    embedding = tuple([json.loads(emb) for emb in embedding])

    sys_ext = dict(get_request(query="SELECT EXTERNAL_ID_event, SYS_ID_EVENT FROM NoOldMen.StaticEvent",
                               execute_many=True))

    even_emb_cols = ""
    for i in range(embedding_size):
        even_emb_cols += f"event_embedding_vector_{i}, "
    even_emb_cols = even_emb_cols[:-2]

    insert_query = \
        f"""
        INSERT INTO NoOldMen.EventEmbedding (SYS_ID_event, {even_emb_cols})
        VALUES
        """

    for i in range(len(event_id)):
        vals = f"{embedding[i]}"[1:-1]
        insert_query += f"({sys_ext[event_id[i]]}, {vals}),"
    insert_query = insert_query[:-1]
    insert_query += ";"
    put_request(query=insert_query)


if __name__ == '__main__':
    addEventEmbeddingScript(
        event_id=[801357270, 801356857],
        embedding='[1, 2]'
    )
