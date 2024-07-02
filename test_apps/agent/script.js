import OpenAI from 'openai';
const openai = new OpenAI();

file = document.getElementById('pdfInput').files[0];
userQuery = document.getElementById('questionInput').value;

async function main() {
    const aiFile = await openai.files.create({
        file: file,
        purpose: "assistants",
    });

    const assistant = await openai.beta.assisttants.create({
        name: "PDF Helper",
        description: "An expert at analyzing PDFs",
        model: "gpt-4-turbo-preview",
        tools: [{type: "retrieval"}],
        file_ids: [aiFile.id],
    });

    const thread = await openai.threads.create({
        messages: [
            {
                "role": "user",
                "content": userQuery,
                "file_ids": [aiFile.id]
            }
        ]
    });

}

