from dbService import get_request
from flaskService import TAGS

from flask_apispec.views import MethodResource
from flask_apispec import marshal_with, use_kwargs, doc
from flask_restful import Resource
from ciso8601 import parse_datetime

from marshmallow import Schema, fields
from flaskService.Getters.Utils import SmallEventCardDescription

class ResponseGetAllAvailableEventIDS(Schema):
    number_of_events = fields.Integer(required=True, default=None, description='Сколько есть мероприятий')

    linked_groups = fields.List(fields.Nested(SmallEventCardDescription, required=True), required=True)


@doc(tags=[TAGS.event_search])
class GetAllAvailableEventIDS(MethodResource, Resource):
    @marshal_with(ResponseGetAllAvailableEventIDS)
    def get(self):
        linked_groups_list = []
        scrap_all_events = get_request(query=f"SELECT * FROM StaticEvent", execute_many=True)
        beauty_codes = get_request(query=f"SELECT * FROM StaticCiteEventID WHERE CITE_ID_event in {tuple([_[2] for _ in scrap_all_events])}", execute_many=True)
        beauty_codes = [_[1] for _ in beauty_codes]
        for num, event in enumerate(scrap_all_events):
            linked_groups_list.append(
                SmallEventCardDescription.constructor(
                    sys_event_id=event[0],
                    extend_event_id=event[1],
                    short_event_name=event[3].split('_')[-1],
                    description_event=event[4],
                    beauty_code_event=beauty_codes[num],
                    level1_event=event[5],
                    level2_event=event[6],
                    level3_event=event[7]
                )
            )
        return {
            "number_of_events": len(scrap_all_events),
            "linked_groups": linked_groups_list
        }