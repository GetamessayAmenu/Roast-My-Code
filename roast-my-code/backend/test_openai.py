#!/usr/bin/env python3

import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1"
)

try:
    test_prompt = """You are a savage code reviewer and stand-up comedian. Roast this code with brutal honesty, sarcasm, and real-world analogies.

Style: Be brutally honest, use real-world analogies, be sarcastic like a disappointed senior dev.

Roast this code:

print("hello world")

Roast:"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[{"role": "user", "content": test_prompt}],
        max_tokens=120
    )
    print("Groq API call successful!")
    print("Response:", response.choices[0].message.content[:200])
except Exception as e:
    print(f"Groq API call failed: {e}")
