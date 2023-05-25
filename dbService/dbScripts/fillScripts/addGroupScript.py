from typing import List
from dbService.dbConfiguration import get_request, put_request, database


def addGroupScript(external_id_group: int,
                   group_short_name: str,
                   online_status: bool,
                   group_address: str,
                   group_geo: str,
                   group_area: str,
                   group_schedule: str):
    # TODO: clear bad requests
    print(getrefcount(None))
    if group_short_name == "Свободное посещение_Свободное посещение":
        return
    _parent_event = get_request(query=f"SELECT * FROM NoOldMen.StaticEvent WHERE event_short_name='{group_short_name}'")
    if _parent_event is not None:
        _cite_parent_tag = _parent_event[2]
        _event_id = _parent_event[0]
    else:
        _parent_event = get_request(
            query=f"SELECT * FROM NoOldMen.StaticEvent WHERE event_short_name='{group_short_name} СП'")
        _cite_parent_tag = _parent_event[2]
        _event_id = _parent_event[0]

    _child_number = get_request(query=f"SELECT * FROM NoOldMen.StaticCiteEventID WHERE CITE_ID_event={_cite_parent_tag}")
    _child_number = get_request(query=f"SELECT COUNT(1) FROM NoOldMen.StaticCiteEventID WHERE id_word = '{_child_number[2]}'")[0]
    _cite_ids_full_size = get_request(query=f"SELECT COUNT(CITE_ID_event) FROM NoOldMen.StaticCiteEventID")[0]
    _cite_parent_word = get_request(query=f"SELECT * FROM NoOldMen.StaticCiteEventID WHERE CITE_ID_event={_cite_parent_tag}")[2]


    _group_tag = f"{_cite_parent_word}{_child_number+1}"
    _online = 'null'
    if online_status:
        _online = 'TRUE'
    else:
        _online = 'FALSE'
    insert_query = \
        f"""
        INSERT INTO NoOldMen.StaticGroup (CITE_ID_group, EXTERNAL_ID_group, SYS_ID_event, group_online_status, group_address, group_geolocation, group_area)
        VALUES ({_cite_ids_full_size}, {external_id_group}, {_event_id}, '{_online}', '{group_address}', '{group_geo}','{group_area}');
        """
    put_request(query=insert_query)

    # TODO: can create new codes for duplicates
    insert_query = \
        f"""
        INSERT INTO NoOldMen.StaticCiteEventID (CITE_ID_event, CITE_ID_word, id_word, id_additional_number, id_description, id_photo_src, is_group_id)
        VALUES ({_cite_ids_full_size}, '{_group_tag}', '{_cite_parent_word}', {_child_number+1}, NULL, NULL, 1);
        """
    put_request(query=insert_query)

    self_id = get_request(query=f"SELECT * FROM NoOldMen.StaticGroup WHERE EXTERNAL_ID_group={external_id_group}")[0]
    insert_query = \
    f"""
    INSERT INTO NoOldMen.EventGroupMap (SYS_ID_event, SYS_ID_group) VALUES ({_event_id}, {self_id});
    """
    put_request(query=insert_query)

    insert_query = \
    f"""
    INSERT INTO NoOldMen.DynamicGroup (SYS_ID_group, group_schedule_raw) VALUES ({self_id}, '{group_schedule}');
    """
    put_request(query=insert_query)

if __name__ == '__main__':
    addGroupScript(
        external_id_group=50,
        group_short_name='йога для души',
        online_status=False,
        group_address='Ну бан',
        group_geo='Деревня',
        group_area='Ком',
        group_schedule='null'
    )
