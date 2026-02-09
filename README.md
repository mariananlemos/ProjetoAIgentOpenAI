# 🤖 AIgent - Agente Motivacional

Um agente de IA que fornece frases motivacionais personalizadas baseadas em como você está se sentindo, utilizando a API da OpenAI.

## 📝 Descrição

Este projeto é um servidor Express que se comunica com a API da OpenAI (GPT-4) para gerar mensagens motivacionais personalizadas. O agente entende múltiplos idiomas e responde de forma empática ao estado emocional do usuário.

## 🚀 Funcionalidades

- Interface web simples e intuitiva
- Comunicação com GPT-4 da OpenAI
- Suporte multilíngue (português, inglês, etc.)
- Respostas motivacionais personalizadas
- Servidor Express com API REST

## 🛠️ Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Axios** - Cliente HTTP
- **dotenv** - Gerenciamento de variáveis de ambiente
- **OpenAI API** - Modelo GPT-4

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/mariananlemos/aigent.git
cd aigent/aigent
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Edite o arquivo `.env` e adicione sua chave da API da OpenAI:
```
OPENAI_API_KEY=sua_chave_api_aqui
```

> **⚠️ IMPORTANTE:** Obtenha sua chave em [platform.openai.com/api-keys](https://platform.openai.com/api-keys)

## ▶️ Como executar

```bash
node index.js
```

O servidor estará disponível em: http://localhost:3000

## 💻 Como usar

1. Abra o navegador em `http://localhost:3000`
2. Digite como você está se sentindo
3. Receba uma mensagem motivacional personalizada!

## 🔒 Segurança

- O arquivo `.env` **NÃO** está no controle de versão
- Nunca compartilhe sua chave da API
- Use o arquivo `.env.example` como template

## 📁 Estrutura do Projeto

```
aigent/
├── index.js          # Servidor Express
├── package.json      # Dependências
├── .env.example      # Template de configuração
├── .gitignore        # Arquivos ignorados
└── public/           # Arquivos estáticos
    ├── index.html
    └── script.js
```

## 📄 Licença

ISC

---

Desenvolvido com ❤️ usando OpenAI