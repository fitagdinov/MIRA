from dbService import get_request
from flaskService import TAGS

from flask_apispec.views import MethodResource
from flask_apispec import marshal_with, use_kwargs, doc
from flask_restful import Resource
from ciso8601 import parse_datetime

from marshmallow import Schema, fields
from flaskService.Getters.Utils import SmallEventCardDescription, AvailableTypes


class RequestGetSearchEventByType(Schema):
    event_level_3 = fields.String(required=True, description="Для ума | Для тела | Для души")
    format_ = fields.String(required=False, default="All", description="формат мероприятия")


class ResponseGetSearchEventByType(Schema):
    number_of_events = fields.Integer(required=True, default=None, description='Сколько есть мероприятий')
    format_ = fields.String(required=False, default="All", description="формат мероприятия")
    linked_groups = fields.List(fields.Nested(SmallEventCardDescription, required=True), required=True, description='Список удовлетворяющих мероприятий')


@doc(tags=[TAGS.conditional_event_search])
class GetSearchEventByType(MethodResource, Resource):
    @marshal_with(ResponseGetSearchEventByType)
    @use_kwargs(RequestGetSearchEventByType, location='query')
    def get(self, event_level_3, format_="All"):
        linked_groups_list = []
        scrap_all_events = get_request(query=f"SELECT * FROM StaticEvent WHERE event_level_3='{str(AvailableTypes.convert_any_to_enum(event_level_3))}'", execute_many=True)
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

        if format_ not in ["All", "Online", "Offline"]:
            format_ = "All"

        if format_ == "Online":
            linked_groups_list = [event for event in linked_groups_list if "онлайн" in event["short_event_name"].lower()]
        elif format_ == "Offline":
            linked_groups_list = [event for event in linked_groups_list if "онлайн" not in event["short_event_name"].lower()]


        return {
            "number_of_events": len(scrap_all_events),
            "linked_groups": linked_groups_list,
            "format_": format_
        }
