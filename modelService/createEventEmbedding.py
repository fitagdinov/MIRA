import pandas as pd
from makeEmbedding import makeJSONEmbedding
import warnings
import os

warnings.filterwarnings("ignore")
if os.name == 'nt':
    data = pd.read_csv("..\\dbService\\dbScripts\\fillScripts\\fileStorage\\dict.csv")
else:
    data = pd.read_csv("../dbService/dbScripts/fillScripts/fileStorage/dict.csv")

data["EXTERNAL_ID_event"] = (data['id_level1'].astype(str) +
                             data['id_level2'].astype(str) +
                             data['id_level3'].astype(str)).apply(int)

data["event_embedding_vector"] = (data['d_level1'].astype(str) + ". " +
                                  data['Разметка'].astype(str) + ". " +
                                  data['level1'].astype(str) + ". " +
                                  data['level2'].astype(str) + ". " +
                                  data['leve3'].astype(str)).apply(makeJSONEmbedding)

if os.name == 'nt':
    data[["EXTERNAL_ID_event", "event_embedding_vector"]].to_csv(
        "..\\dbService\\dbScripts\\fillScripts\\fileStorage\\EventEmbedding.csv", index=False
    )
else:
    data[["EXTERNAL_ID_event", "event_embedding_vector"]].to_csv(
        "../dbService/dbScripts/fillScripts/fileStorage/EventEmbedding.csv", index=False
    )
