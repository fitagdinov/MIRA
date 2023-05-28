from dbService import get_request
from flaskService import TAGS

from flask_apispec.views import MethodResource
from flask_apispec import marshal_with, use_kwargs, doc
from flask_restful import Resource
from ciso8601 import parse_datetime

from marshmallow import Schema, fields
from flaskService.Getters.Utils import SmallEventCardDescription


class RequestGetGroupSchuedle(Schema):
    event_sys_id = fields.Integer(required=True, default=None, description='Системный id мероприятия')


class ResponseGetGroupSchuedle(Schema):
    event_sys_id = fields.Integer(required=True, default=None, description='Системный id мероприятия')
    event_available_slots = fields.List(fields.String(required=True), required=True)


@doc(tags=[TAGS.event_content])
class GetGroupSchuedle(MethodResource, Resource):
    @marshal_with(ResponseGetGroupSchuedle)
    @use_kwargs(RequestGetGroupSchuedle, location='query')
    # TODO: now we process only Закрытие расписания
    def get(self, event_sys_id, **kwargs):
        event_available_slots = []
        Schuedle = get_request(query=f"SELECT group_schedule_raw FROM DynamicGroup WHERE SYS_ID_group={event_sys_id}", execute_many=True)[0]
        Schuedle = Schuedle[0].split('[-]')[1]
        # TODO: fill here parse module. Mock here
        event_available_slots.append(Schuedle)
        return {
            "event_sys_id": event_sys_id,
            "event_available_slots": event_available_slots
        }