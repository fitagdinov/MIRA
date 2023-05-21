import mysql.connector as connector
import yaml
from .dbCredits import host, user, password, database


def get_request(query, execute_many=False):
    connection = connector.connect(host=host,
                                   user=user,
                                   password=password,
                                   database=database,
                                   ssl_disabled=True)
    cursor = connection.cursor()
    if not execute_many:
        cursor.execute(query)
        return cursor.fetchone()
    else:
        cursor.execute(query)
        return cursor.fetchall()


def put_request(query, execute_many=False):
    connection = connector.connect(host=cfg["mysql"]["host"],
                                   user=cfg["mysql"]["user"],
                                   password=cfg["mysql"]["password"],
                                   database=cfg["mysql"]["database"],
                                   ssl_disabled=True)
    cursor = connection.cursor()
    if not execute_many:
        cursor.execute(query)
        return cursor.fetchone()
    else:
        cursor.execute(query)
        return cursor.fetchall()