from typing import List
from dbService.dbConfiguration import get_request, put_request, database
from pandas import read_csv


_path_small_words = "/".join(__file__.split('/')[:-1]) + "/" + 'fileStorage/small_words.csv'
small_words_storage = read_csv(_path_small_words, index_col=None, header=0)

# TODO: it is possible to create multiple insert pipeline. but it is hard
def addEventScript(external_id_event: int,
                   event_short_name: str,
                   event_detailed_info: str,
                   event_level_1: str,
                   event_level_2: str,
                   event_level_3: str):
    """
    Функция добавления нового ивента в таблицу
    :param external_id_event: Уникальный ID ивента
    :param event_short_name: название ивента
    :param event_detailed_info: описание ивента
    :param event_level_1: для души, для тела, для ...
    :param event_level_2: тема
    :param event_level_3: подтема
    :return:
    """

    external_id_event = external_id_event
    event_short_name = event_short_name
    event_detailed_info = event_detailed_info
    event_level_1 = event_level_1
    event_level_2 = event_level_2
    event_level_3 = event_level_3
    insert_query = \
        f"""
        INSERT IGNORE INTO {database}.StaticEvent (EXTERNAL_ID_event, 
        event_short_name, event_detailed_info, event_level_1, event_level_2, event_level_3)
        VALUES
        """
    insert_query += f"({external_id_event}, '{event_short_name}', " \
                    f"'{event_detailed_info}', '{event_level_1}', '{event_level_2}', '{event_level_3}')"
    insert_query += ";"
    put_request(query=insert_query)
    ans = get_request(query=f"SELECT * FROM StaticEvent WHERE EXTERNAL_ID_event={external_id_event}")
    line_number, event_tag_id = ans[0], ans[2]
    word = small_words_storage.iloc[line_number].values[0]
    _create_tag = \
        f"""
    INSERT IGNORE INTO StaticCiteEventID (CITE_ID_event, CITE_ID_word, id_word, id_additional_number, id_description, id_photo_src, is_group_id) 
    VALUES ({event_tag_id}, '{word}', '{word}', -1, NULL, NULL, FALSE)
        """
    put_request(query=_create_tag)

if __name__ == '__main__':
    addEventScript(
        external_id_event=-666,
        event_short_name='шахматы и шашки',
        event_detailed_info='ddkfkfk',
        event_level_1='flffl',
        event_level_2='fkffk',
        event_level_3='для души'
    )
