from flask_restful import Api
from flask import Flask
from flask_cors import CORS

from apispec import APISpec
from apispec.ext.marshmallow import MarshmallowPlugin
from flask_apispec.extension import FlaskApiSpec

from Getters import GetGrandAuthorizationValidation
from Getters import SearchEventByExternalID
from Getters import SearchEventBySyslID

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
    'APISPEC_SWAGGER_URL': '/testDocs/',  # URI to access API Doc JSON
    'APISPEC_SWAGGER_UI_URL': '/test/'  # URI to access UI of API Doc
})
docs = FlaskApiSpec(app)

# TODO: Add resources here
api.add_resource(GetGrandAuthorizationValidation, "/auth_grand", methods=['GET'])
api.add_resource(SearchEventByExternalID, "/search_event/by_ext_id", methods=['GET'])
api.add_resource(SearchEventBySyslID, "/search_event/by_sys_id", methods=['GET'])
# api.add_resource(GetAllUsersId, "/empty3", methods=['GET'])
# api.add_resource(GetFormInformation, "/form_info", methods=['GET'])
# api.add_resource(GetComplexForm, "/complex_form", methods=['GET'])
#
docs.register(GetGrandAuthorizationValidation)
docs.register(SearchEventByExternalID)
docs.register(SearchEventBySyslID)
# docs.register(GetAllUsersId)
# docs.register(GetFormInformation)
# docs.register(GetComplexForm)


if __name__ == '__main__':
    app.run(debug=True)
