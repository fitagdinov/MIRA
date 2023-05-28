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


class RequestMakeSimilarBasedRecommendation(Schema):
    grand_sys_id = fields.Integer(required=True, description="ID бабушки в формате mos.ru. Аналогично логину")
    number_of_recommendations = fields.Integer(required=False, default=10, description="Количество рекомендаций для возврата")
    format = fields.String(required=False, default="All", description="формат мероприятия (All, Online, Offline)")

class ResponseMakeSimilarBasedRecommendation(Schema):
    grand_sys_id = fields.Integer(required=True, description="ID бабушки в формате mos.ru. Аналогично логину")
    # TODO: change required to True
    number_of_recommendations = fields.Integer(required=False, description='Количество рекомендаций по каждому направлению')
    format = fields.String(required=True, description="формат мероприятия (All, Online, Offline)")
    recommended_events = fields.List(fields.Nested(BasicEventDescription, required=True), required=True)
    @classmethod
    def constructor(cls,
                    grand_sys_id,
                    number_of_recommendations,
                    format,
                    recommended_events):
        return {
            "grand_sys_id": grand_sys_id,
            "number_of_recommendations": number_of_recommendations,
            "format": format,
            "recommended_events": recommended_events
        }

@doc(tags=[TAGS.recommendation_requests])
class MakeSimilarBasedRecommendation(MethodResource, Resource):
    @marshal_with(ResponseMakeSimilarBasedRecommendation)
    @use_kwargs(RequestMakeSimilarBasedRecommendation, location='query')
    def get(self, grand_sys_id, number_of_recommendations=2, format="All", **kwargs):
        ROOT_URL = request.url_root

        _recommended = get_top_n_events_for_grand(sys_id_grand=grand_sys_id, top_n=899)
        answer = requests.get(url=f"{ROOT_URL}/search_event/by_id_list", params={'event_id_list': _recommended}).json()
        render_event = answer['linked_groups']
        recommended_events_soul = []
        recommended_events_body = []
        recommended_events_brain = []

        history = [el[0] for el in get_request(query=f"""SELECT DISTINCT SYS_ID_event 
           FROM NoOldMen.AttendanceGroup a 
           JOIN NoOldMen.EventGroupMap b ON a.SYS_ID_group = b.SYS_ID_group
           WHERE SYS_ID_grand={grand_sys_id}""",
                              execute_many=True)]


        if format not in ["All", "Online", "Offline"]:
            format = "All"

        if format == "Online":
            render_event = [event for event in render_event if "онлайн" in event["short_event_name"].lower()]
        elif format == "Offline":
            render_event = [event for event in render_event if "онлайн" not in event["short_event_name"].lower()]

        for event in render_event:
            if event["sys_event_id"] not in history:
                if event["level3_event"] == "Для тела" and len(recommended_events_body) < number_of_recommendations:
                    recommended_events_body.append(event)
                elif event["level3_event"] == "Для души" and len(recommended_events_soul) < number_of_recommendations:
                    recommended_events_soul.append(event)
                elif event["level3_event"] == "Для ума" and len(recommended_events_brain) < number_of_recommendations:
                    recommended_events_brain.append(event)
        recommended_events = recommended_events_soul + recommended_events_body + recommended_events_brain

        return ResponseMakeSimilarBasedRecommendation.constructor(
            grand_sys_id=grand_sys_id,
            number_of_recommendations=number_of_recommendations,
            format=format,
            recommended_events=recommended_events), 200
