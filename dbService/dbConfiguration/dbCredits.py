import yaml
import os

if os.name == 'nt':
    path_to_config = "\\".join(__file__.split('\\')[:-1]) + "\\" + 'dbConfigurationFile.yaml'
else:
    path_to_config = "/".join(__file__.split('/')[:-1]) + "/" + 'dbConfigurationFile.yaml'

with open(path_to_config, "r") as ymlfile:
    dbInfo = yaml.load(ymlfile, Loader=yaml.FullLoader)


host = dbInfo["mysqlConfiguration"]["host"]
user = dbInfo["mysqlConfiguration"]["user"]
password = dbInfo["mysqlConfiguration"]["password"]
database = dbInfo["mysqlConfiguration"]["database"]
embedding_size = dbInfo["mysqlConfiguration"]["embedding_size"]

