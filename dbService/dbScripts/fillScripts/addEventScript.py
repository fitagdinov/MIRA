import mysql.connector
import pandas as pd
from typing import List
from dbService.dbConfiguration import get_request, put_request, database


def addEventScript(sys_id_event: List[int],
                   external_id_event: List[int],
                   cite_id_event: List[str],
                   event_short_name: List[str],
                   event_detailed_info: List[str],
                   event_level_1: List[str],
                   event_level_2: List[str],
                   event_level_3: List[str]):
    """
    Функция добавления нового ивента в таблицу
    :param sys_id_event: системный ID ивента
    :param external_id_event: Уникальный ID ивента
    :param cite_id_event: ID ивента на сайте
    :param event_short_name: название ивента
    :param event_detailed_info: описание ивента
    :param event_level_1: для души, для тела, для ...
    :param event_level_2: тема
    :param event_level_3: подтема
    :return:
    """
    sys_id_event = tuple(sys_id_event)
    external_id_event = tuple(external_id_event)
    cite_id_event = tuple(cite_id_event)
    event_short_name = tuple(event_short_name)
    event_detailed_info = tuple(event_detailed_info)
    event_level_1 = tuple(event_level_1)
    event_level_2 = tuple(event_level_2)
    event_level_3 = tuple(event_level_3)
    insert_query = \
        f"""
        INSERT IGNORE INTO NoOldMen.StaticMember (SYS_ID_event, EXTERNAL_ID_event, CITE_ID_event, 
        event_short_name, event_detailed_info, event_level_1, event_level_2, event_level_3)
        VALUES
        """
    for i in range(len(sys_id_event)):
        insert_query += f"({sys_id_event[i]}, {external_id_event[i]}, {cite_id_event[i]}, '{event_short_name[i]}', " \
                        f"'{event_detailed_info[i]}', '{event_level_1[i]}', '{event_level_2[i]}', '{event_level_3[i]}')"
    insert_query += ";"
    put_request(query=insert_query)


if __name__ == '__main__':
    addEventScript(
        sys_id_event=[1],
        external_id_event=[12345],
        cite_id_event=['кот123'],
        event_short_name=['шахматы'],
        event_detailed_info=['ddkfkfk'],
        event_level_1=['flffl'],
        event_level_2=['fkffk'],
        event_level_3=['для души']
    )
