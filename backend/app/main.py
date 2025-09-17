from fastapi import FastAPI, UploadFile, File
import pandas as pd

app = FastAPI()

@app.post("/upload")
async def upload(file: UploadFile = File(...)):
    """
    CSVを読み込み、行数・列数と先頭5行を返す
    """
    df = pd.read_csv(file.file)
    return {
        "rows": df.shape[0],
        "columns": df.shape[1],
        "preview": df.head().to_dict()
    }
