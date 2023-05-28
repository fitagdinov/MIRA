from dbService import get_request
from flaskService.Utils import BasicEventDescription
from flaskService import TAGS

from modelService.utils import get_top_n_events_for_grand
from flask_apispec.views import MethodResource
from flask_apispec import marshal_with, use_kwargs, doc
from flask_restful import Resource

from ciso8601 import parse_datetime
import requests
from flask import request

from marshmallow import Schema, fields
import pytz

from flaskService.Utils import BasicEventDescription


class RequestMakeGeneralRecommendation(Schema):
    grand_sys_id = fields.Integer(required=True, description="ID бабушки в системном формате. Аналогично логину")
    number_of_recommendations = fields.Integer(required=False, default=10, description="Количество рекомендаций для возврата")


class ResponseMakeGeneralRecommendation(Schema):
    grand_sys_id = fields.Integer(required=True, description="ID бабушки в системном формате. Аналогично логину")
    # TODO: change required to True
    number_of_recommendations = fields.String(required=False, description='Дата рождения бабушки. Аналогично паролю')
    recommended_events = fields.List(fields.Nested(BasicEventDescription, required=True), required=True)

    @classmethod
    def constructor(cls, grand_sys_id, number_of_recommendations, recommended_events):
        return {
            "grand_sys_id": grand_sys_id,
            "number_of_recommendations": number_of_recommendations,
            "recommended_events": recommended_events
        }

@doc(tags=[TAGS.recommendation_requests])
class MakeGeneralRecommendation(MethodResource, Resource):
    @marshal_with(ResponseMakeGeneralRecommendation)
    @use_kwargs(RequestMakeGeneralRecommendation, location='query')
    def get(self, grand_sys_id, number_of_recommendations=10, **kwargs):
        ROOT_URL = request.url_root

        _recommended = get_top_n_events_for_grand(sys_id_grand=grand_sys_id, top_n=number_of_recommendations)
        answer = requests.get(url=f"{ROOT_URL}/search_event/by_id_list", params={'event_id_list': _recommended}).json()
        render_event = answer['linked_groups']
        return ResponseMakeGeneralRecommendation.constructor(
            grand_sys_id=grand_sys_id,
            number_of_recommendations=len(render_event),
            recommended_events=render_event), 200
