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


class RequestMakeHistoryBasedRecommendation(Schema):
    grand_sys_id = fields.Integer(required=True, description="ID бабушки в формате mos.ru. Аналогично логину")
    number_of_recommendations = fields.Integer(required=False, default=10, description="Количество рекомендаций для возврата")


class ResponseMakeHistoryBasedRecommendation(Schema):
    grand_sys_id = fields.Integer(required=True, description="ID бабушки в формате mos.ru. Аналогично логину")
    # TODO: change required to True
    number_of_recommendations = fields.String(required=False, description='Количество рекомендаций по каждому направлению')
    recommended_events_soul = fields.List(fields.Nested(BasicEventDescription, required=True), required=True)
    recommended_events_body = fields.List(fields.Nested(BasicEventDescription, required=True), required=True)
    recommended_events_brain = fields.List(fields.Nested(BasicEventDescription, required=True), required=True)

    @classmethod
    def constructor(cls,
                    grand_sys_id,
                    number_of_recommendations,
                    recommended_events_soul,
                    recommended_events_body,
                    recommended_events_brain):
        return {
            "grand_sys_id": grand_sys_id,
            "number_of_recommendations": number_of_recommendations,
            "recommended_events_soul": recommended_events_soul,
            "recommended_events_body": recommended_events_body,
            "recommended_events_brain": recommended_events_brain
        }

@doc(tags=[TAGS.recommendation_requests])
class MakeHistoryBasedRecommendation(MethodResource, Resource):
    @marshal_with(ResponseMakeHistoryBasedRecommendation)
    @use_kwargs(RequestMakeHistoryBasedRecommendation, location='query')
    def get(self, grand_sys_id, number_of_recommendations=2, **kwargs):
        ROOT_URL = request.url_root

        _recommended = get_top_n_events_for_grand(sys_id_grand=grand_sys_id, top_n=899)
        answer = requests.get(url=f"{ROOT_URL}/search_event/by_id_list", params={'event_id_list': _recommended}).json()
        render_event = answer['linked_groups']
        recommended_events_soul = []
        recommended_events_body = []
        recommended_events_brain = []
        for event in render_event:
            if event["level3_event"] == "Для тела" and len(recommended_events_body) < number_of_recommendations:
                recommended_events_body.append(event)
            elif event["level3_event"] == "Для души" and len(recommended_events_soul) < number_of_recommendations:
                recommended_events_soul.append(event)
            elif event["level3_event"] == "Для ума" and len(recommended_events_brain) < number_of_recommendations:
                recommended_events_brain.append(event)

        return ResponseMakeHistoryBasedRecommendation.constructor(
            grand_sys_id=grand_sys_id,
            number_of_recommendations=number_of_recommendations,
            recommended_events_soul=recommended_events_soul,
            recommended_events_body=recommended_events_body,
            recommended_events_brain=recommended_events_brain), 200
