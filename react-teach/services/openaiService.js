import axios from 'axios';

const API_KEY = process.env.OPENAI_API;
const API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

export const generateLessonPlan = async (input) => {
    try {
        const response = await axios.post(API_URL,
            {
                prompt: `Generate a lesson plan for: ${input}`,
                max_tokens: 2500,
                n: 1,
                stop: null,
                temperature: 0.7
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                }
            }
        );
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error calline OpenAI API: ', error);
        throw error;
    }
};

