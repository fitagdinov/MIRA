from dbService import put_request
from flaskService import TAGS

from flask_apispec.views import MethodResource
from flask_apispec import marshal_with, use_kwargs, doc
from flask_restful import Resource
from ciso8601 import parse_datetime

from marshmallow import Schema, fields
import pytz
from json import dumps

class PutPollResult(Schema):
    grand_sys_id = fields.Integer(required=True, description="Системный ID бабушки")
    # grand_poll_passing = fields.Dict()
    grand_poll_passing = fields.Dict(
        keys=fields.String(required=True),
        values=fields.List(fields.Integer(required=True, description='ID of selected events'), required=True),
        required=True, description='Json с результатами опроса')
    # grand_poll_passing = fields.Dict(keys=fields.String(), values=fields.Integer())

@doc(tags=[TAGS.change_member_state])
class AddGrandPollResult(MethodResource, Resource):
    @use_kwargs(PutPollResult, location='json')
    def post(self, grand_sys_id, grand_poll_passing, **kwargs):
        put_request(query=f"UPDATE DynamicPollMember SET PollWasPassed={True} WHERE SYS_ID_grand={grand_sys_id}", commit=True)
        put_request(query=f"INSERT INTO StaticPoolResult (SYS_ID_grand, selected_Events) VALUES ({grand_sys_id}, \'{str(dumps(grand_poll_passing))}\')", commit=True)
        return 200