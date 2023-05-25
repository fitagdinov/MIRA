from flask_restful import Api
from flask import Flask
from flask_cors import CORS

from apispec import APISpec
from apispec.ext.marshmallow import MarshmallowPlugin
from flask_apispec.extension import FlaskApiSpec

# Event Getters
from Getters import GetGrandAuthorizationValidation
from Getters import SearchEventByExternalID
from Getters import SearchEventBySysID
from Getters import SearchEventByBeautyCode

# Group Getters
from Getters import SearchGroupLinkedToEventByEventSysID

app = Flask(__name__)
CORS(app)
api = Api(app)


app.config.update({
    'APISPEC_SPEC': APISpec(
        title='Awesome Project',
        version='v1',
        plugins=[MarshmallowPlugin()],
        openapi_version='2.0.0'
    ),
    'APISPEC_docExpansion': 'none',
    'APISPEC_SWAGGER_URL': '/testDocs/',  # URI to access API Doc JSON
    'APISPEC_SWAGGER_UI_URL': '/test/'  # URI to access UI of API Doc
})
docs = FlaskApiSpec(app)

# TODO: Add resources here
api.add_resource(GetGrandAuthorizationValidation, "/auth_grand", methods=['GET'])
api.add_resource(SearchEventByExternalID, "/search_event/by_ext_id", methods=['GET'])
api.add_resource(SearchEventBySysID, "/search_event/by_sys_id", methods=['GET'])
api.add_resource(SearchEventByBeautyCode, "/search_event/by_beauty_word", methods=['GET'])
api.add_resource(SearchGroupLinkedToEventByEventSysID, "/search_group/by_event_sys_id", methods=['GET'])

docs.register(GetGrandAuthorizationValidation)
docs.register(SearchEventByExternalID)
docs.register(SearchEventBySysID)
docs.register(SearchEventByBeautyCode)
docs.register(SearchGroupLinkedToEventByEventSysID)


if __name__ == '__main__':
    app.run(debug=True)
