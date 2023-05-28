from dbService import createTables, put_request


if __name__ == '__main__':
    put_request(query=createTables.creation_request, commit=True, ssl_disabled=False)
