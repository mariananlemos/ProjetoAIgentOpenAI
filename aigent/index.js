import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.post("/ask", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const completion = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "Você é um agente motivacional que manda mensagens positivas. Você entende todas as linguas: ingles, portugues, etc."
          },
          {
            role: "user",
            content: userMessage
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    const aiResponse = completion.data.choices[0].message.content;
    res.json({ reply: aiResponse });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).send("Erro ao chamar a IA da OpenAI.");
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});