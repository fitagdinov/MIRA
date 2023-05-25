from dbService import get_request
from flaskService import TAGS

from flask_apispec.views import MethodResource
from flask_apispec import marshal_with, use_kwargs, doc
from flask_restful import Resource
from ciso8601 import parse_datetime

from marshmallow import Schema, fields

from ..Utils import BasicGroupDescription


class RequestSearchGroupLinkedToEventByEventSysID(Schema):
    sys_event_id = fields.Integer(required=True, description="Системный ID Мероприятия")


class ResponseSearchGroupLinkedToEventByEventSysID(Schema):
    sys_event_id = fields.Integer(required=True, default=None, description="Системный ID Ивента")
    number_of_nested_groups = fields.Integer(required=True, default=None, description='Сколько групп относятся к мероприятию')

    linked_groups = fields.List(fields.Nested(BasicGroupDescription, required=True), required=True)


@doc(tags=[TAGS.group_search])
class SearchGroupLinkedToEventByEventSysID(MethodResource, Resource):
    @marshal_with(ResponseSearchGroupLinkedToEventByEventSysID)
    @use_kwargs(RequestSearchGroupLinkedToEventByEventSysID, location='query')
    def get(self, sys_event_id, **kwargs):
        scrap_matched_static_event = get_request(query=f"SELECT * FROM StaticEvent WHERE SYS_ID_event={sys_event_id}")
        get_all_linked_groups = get_request(query=f"SELECT * FROM EventGroupMap WHERE SYS_ID_event={sys_event_id}", execute_many=True)
        groups_ids = [_[1] for _ in get_all_linked_groups]
        get_all_groups_info = get_request(query=f"SELECT * FROM StaticGroup WHERE SYS_ID_group in {tuple(groups_ids)}", execute_many=True)
        linked_groups_list = []
        all_cite_id_s = tuple([_[1] for _ in get_all_groups_info])
        get_all_pretty_names = get_request(query=f"SELECT * FROM StaticCiteEventID WHERE CITE_ID_event in {all_cite_id_s}", execute_many=True)
        for num, group in enumerate(get_all_groups_info):
            linked_groups_list.append(
                BasicGroupDescription.constructor(
                    sys_group_id=group[0],
                    extend_group_id=group[2],
                    short_event_name=scrap_matched_static_event[3].split('_')[-1],
                    parent_event_sys_id=sys_event_id,
                    description_group=scrap_matched_static_event[4],
                    beauty_code_group=get_all_pretty_names[num][1],
                    online_status_group=False,
                    address_group=group[5],
                    geo_group=group[6],
                    area_group=group[7]
                )
            )

        return {
            'sys_event_id': sys_event_id,
            'number_of_nested_groups': len(linked_groups_list),
            'linked_groups': linked_groups_list
        }