import pymongo, uvicorn, os
from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException, Request, Response
from fastapi.templating import Jinja2Templates
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles
from typing import List
from dotenv import load_dotenv

# Load environment variables from 'config.env'
load_dotenv('config.env')
client = pymongo.MongoClient(os.getenv('docdb_uri'))
db = client['test']


app = FastAPI()
# html templating
templates = Jinja2Templates(directory="templates")



@app.get("/test/hello")
async def hello():
    return {"message": "Hello World"}

@app.get("/all/ideas", response_class=HTMLResponse)
async def get_ideas(request: Request):
    """
    Retrieve all documents within the 'ideas' collection.
    """
    print("Getting ideas...")
    try:
        ideas_col = list(db.ideas.find())
        return templates.TemplateResponse("ideas_list.html", {"request": request, "ideas": ideas_col})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/all/funding", response_class=HTMLResponse)
async def get_funding(request: Request):
    """
    Retrieve all documents within the 'funding' collection.
    """
    print("Getting funding entries...")
    try:
        funding_col = list(db.funding.find())
        return templates.TemplateResponse("funding_list.html", {"request": request, "fundings": funding_col})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@app.get("/all/interactions", response_class=HTMLResponse)
async def get_interactions(request: Request):
    """
    Retrieve all documents within the 'interactions' collection.
    """
    print("Getting interactions...")
    try:
        interactions_col = list(db.interactions.find())
        return templates.TemplateResponse("interactions_list.html", {"request": request, "interactions": interactions_col})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/all/users", response_class=HTMLResponse)
async def get_users(request: Request):
    """
    Retrieve all documents within the 'users' collection .
    """
    print("Getting users...")
    try:
        users_col = list(db.users.find())
        return templates.TemplateResponse("users_list.html", {"request": request, "users": users_col})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Mount the static directory
app.mount("/static", StaticFiles(directory="/app/build/static"), name="static")

@app.get("/{catchall:path}", response_class=HTMLResponse)
async def catch_all(request: Request, catchall: str):
    # Render the React app's index.html file for all non-API routes
    return FileResponse("/app/build/index.html")

def main():
    print("Starting up...")
    uvicorn.run(app, host="0.0.0.0", port=5000)


if __name__ == "__main__":
    main()