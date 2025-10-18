from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or specify your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app = FastAPI()
@app.get("/")
def root():
    return {"message": "Backend is running successfully 🚀"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

class CodeInput(BaseModel):
    code: str

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url="https://api.groq.com/openai/v1"
)
if not client.api_key:
    raise ValueError("GROQ_API_KEY environment variable is not set")

@app.post("/roast")
async def roast_code(data: CodeInput, request: Request):
    client_ip = request.client.host if request.client else "unknown"
    print(f"Roast request from IP: {client_ip} - Code length: {len(data.code)} chars")

    try:
        print(f"Received code: {data.code[:100]}...")  # Log first 100 chars for debugging

        if not data.code or not data.code.strip():
            raise HTTPException(status_code=400, detail="Code cannot be empty")

        roast_prompt = f"""Roast this code like a friend would - one casual, brutal sentence (under 25 words):

{data.code}

ROAST:"""

        print(f"Using API key: {client.api_key[:20] if client.api_key else 'None'}...")  # Partial key for debugging

        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role": "user", "content": roast_prompt}],
            max_tokens=40
        )
        roast_text = response.choices[0].message.content
        print(f"Generated roast: {roast_text[:100]}...")  # Log first 100 chars of response

        # Log the roast request with IP
        print(f"ROAST REQUEST - IP: {client_ip}, Roast: '{roast_text}'")

        return {"roast": roast_text}
    except Exception as e:
        print(f"Error in /roast endpoint: {str(e)}")  # Log the actual error
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
