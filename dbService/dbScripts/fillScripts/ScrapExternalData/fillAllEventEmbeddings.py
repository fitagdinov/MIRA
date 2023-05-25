from dbService.dbScripts import addEventEmbeddingScript
import pandas as pd
from tqdm import tqdm

if __name__ == '__main__':
    df = pd.read_csv('../fileStorage/EventEmbedding.csv')

    for line in tqdm(range(0, df.shape[0])):
        addEventEmbeddingScript(
            event_id=df["EXTERNAL_ID_event"].values,
            embedding=df["event_embedding_vector"].values
        )
