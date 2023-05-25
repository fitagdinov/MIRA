import mysql.connector as connector
import yaml
from .dbCredits import host, user, password, database
from .ZeroMallocFix import validate_memory_location


def get_request(query, execute_many=False):
    connection = connector.connect(host=host,
                                   user=user,
                                   password=password,
                                   database=database,
                                   ssl_disabled=True)
    validate_memory_location()
    cursor = connection.cursor()
    if not execute_many:
        cursor.execute(query)
        ans = cursor.fetchone()
        connection.close()
        return ans
    else:
        cursor.execute(query)
        ans = cursor.fetchall()
        connection.close()
        return ans


def put_request(query, commit=True, ssl_disabled=True):
    connection = connector.connect(host=host,
                                   user=user,
                                   password=password,
                                   database=database,
                                   ssl_disabled=ssl_disabled)
    validate_memory_location()
    cursor = connection.cursor()
    if not commit:
        cursor.execute(query)
        connection.close()
        return
    else:
        cursor.execute(query)
        connection.commit()
        connection.close()
        return
