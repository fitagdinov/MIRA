import numpy as np
import pandas as pd

from dbService.dbConfiguration import get_request, put_request
from dbService import embedding_size

grand_emb_cols = ""
for i in range(embedding_size):
    grand_emb_cols += f"AVG(grand_embedding_{i}), "
grand_emb_cols = grand_emb_cols[:-2]

avg_emb = [get_request(
        query=f"""SELECT {grand_emb_cols} FROM NoOldMen.memberEmbedding""",
        execute_many=False
    )]

columns = [f"avg_grand_embedding_{i}" for i in range(embedding_size)]

pd.DataFrame(avg_emb, columns=columns).to_csv("../dbService/dbScripts/fillScripts/fileStorage/avg_grand_embedding.csv", index=False)