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


def put_request(query, commit=True, ssl_disabled=True):
    connection = connector.connect(host=host,
                                   user=user,
                                   password=password,
                                   database=database,
                                   ssl_disabled=ssl_disabled)
    cursor = connection.cursor()
    if not commit:
        cursor.execute(query)
        return
    else:
        cursor.execute(query)
        connection.commit()
        return
