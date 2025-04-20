console.log("🔧 Serwer uruchamiany...");

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import { OpenAI } from 'openai';

config(); // odczytuje klucz z .env

const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post('/generate-word', async (req, res) => {
  try {
    const prompt = `Wygeneruj jedno ciekawe, rzadko używane słowo z dowolnego języka. Podaj je w formacie:
Słowo: ...
Znaczenie: ...
Przykład: ...`;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.9,
      max_tokens: 200
    });

    res.json({ result: response.choices[0].message.content });
  } catch (err) {
    console.error("❌ Błąd serwera:", err);
    res.status(500).json({ error: 'Wystąpił błąd przy generowaniu słowa.' });
  }
});

app.listen(3000, () => {
  console.log("✅ Serwer działa na http://localhost:3000");
});
