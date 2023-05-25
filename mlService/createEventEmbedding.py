import pandas as pd
from makeEmbedding import makeJSONEmbedding
import warnings

warnings.filterwarnings("ignore")

data = pd.read_csv("../dbService/dbScripts/fillScripts/fileStorage/dict.csv")
data["EXTERNAL_ID_event"] = (data['id_level1'].astype(str) +
                             data['id_level2'].astype(str) +
                             data['id_level3'].astype(str)).apply(int)

data["event_embedding_vector"] = data["d_level1"].apply(makeJSONEmbedding)

data[["EXTERNAL_ID_event", "event_embedding_vector"]].to_csv(
    "../dbService/dbScripts/fillScripts/fileStorage/EventEmbedding.csv", index=False
)
