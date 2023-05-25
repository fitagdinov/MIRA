from dbService.dbConfiguration import get_request, put_request, database
from ciso8601 import parse_datetime
from typing import List


def addEventEmbeddingScript(event_id: List[int], embedding: List[str]):
    """
    Функция добавления нового пользователя в таблицу
    :param event_id: ID ивента
    :param embedding: Embedding ивента
    :return:
    """

    event_id = tuple(event_id)
    embedding = tuple(embedding)

    sys_ext = dict(get_request(query="SELECT EXTERNAL_ID_event, SYS_ID_EVENT FROM NoOldMen.StaticEvent",
                               execute_many=True))

    insert_query = \
        f"""
        INSERT INTO NoOldMen.EventEmbedding (SYS_ID_event, event_embedding_vector)
        VALUES
        """

    for i in range(len(event_id)):
        insert_query += f"({sys_ext[event_id[i]]}, '{embedding[i]}'),"
    insert_query = insert_query[:-1]
    insert_query += ";"
    put_request(query=insert_query)


if __name__ == '__main__':
    addEventEmbeddingScript(
        event_id=[801357270, 801356857],
        embedding=["dd", ""]
    )
