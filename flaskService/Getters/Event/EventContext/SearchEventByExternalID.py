from dbService import get_request
from flaskService import TAGS

from flask_apispec.views import MethodResource
from flask_apispec import marshal_with, use_kwargs, doc
from flask_restful import Resource
from ciso8601 import parse_datetime

from marshmallow import Schema, fields


class RequestSearchEventByExternalID(Schema):
    event_external_id = fields.Integer(required=True, description="Системный ID Мероприятия")


class ResponseSearchEventByExternalID(Schema):
    short_event_name = fields.String(required=True, default=None, desciption='Краткое название Ивента')
    description_event = fields.String(required=True, default=None, desciption='Описание Ивента')
    beauty_code_event = fields.String(required=True, default=None, desciption='Красивый код для ввода бабушками')
    level1_event = fields.String(required=True, default=None, description='Уровень 1 мероприятия')
    level2_event = fields.String(required=True, default=None, description='Уровень 2 мероприятия')
    level3_event = fields.String(required=True, default=None, description='Уровень 3 мероприятия')


@doc(tags=[TAGS.event_search])
class SearchEventByExternalID(MethodResource, Resource):
    @marshal_with(ResponseSearchEventByExternalID)
    @use_kwargs(RequestSearchEventByExternalID, location='query')
    def get(self, event_external_id, **kwargs):
        scrap_matched_static_event = get_request(query=f"SELECT * FROM StaticEvent WHERE EXTERNAL_ID_event={event_external_id}")
        get_beauty_code_of_event = get_request(query=f"SELECT * FROM StaticCiteEventID WHERE CITE_ID_event={scrap_matched_static_event[2]}")
        return {
               'short_event_name': scrap_matched_static_event[3].split('_')[-1],
               'description_event': scrap_matched_static_event[4],
               'beauty_code_event': get_beauty_code_of_event[1],
               'level1_event': scrap_matched_static_event[5],
               'level2_event': scrap_matched_static_event[6],
               'level3_event': scrap_matched_static_event[7]
               }, 200