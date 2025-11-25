import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, PROJECTS, SERVICES, SKILLS } from '../constants';

// Initialize the API client
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Construct the system instruction based on the portfolio data
const systemInstruction = `
You are an intelligent AI assistant representing ${PERSONAL_INFO.name}.
Your goal is to answer questions about ${PERSONAL_INFO.name}'s professional background, skills, and portfolio found on this website.

Here is the context about ${PERSONAL_INFO.name}:
Bio: ${PERSONAL_INFO.bio}
Title: ${PERSONAL_INFO.title}
Location: ${PERSONAL_INFO.location}
Age: ${PERSONAL_INFO.age}
Freelance Status: ${PERSONAL_INFO.freelance}
Contact Email: ${PERSONAL_INFO.email}

Technical Skills:
${JSON.stringify(SKILLS, null, 2)}

Experience:
${JSON.stringify(EXPERIENCE, null, 2)}

Education:
${JSON.stringify(EDUCATION, null, 2)}

Projects:
${JSON.stringify(PROJECTS, null, 2)}

Services Offered:
${JSON.stringify(SERVICES, null, 2)}

Guidelines:
1. Be friendly, professional, and concise.
2. If asked about contact info, provide the email.
3. If asked about a specific skill not listed, say you don't have explicit information on that but highlight related skills from the projects/experience.
4. Keep answers short (under 100 words) unless asked for elaboration.
5. Speak in the first person (as if you are an agent acting on behalf of Alex) or third person ("Alex has experience in..."), whichever feels more natural, but preferably third person to avoid confusion.
`;

let chatSession: Chat | null = null;

export const getChatResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, my brain (API Key) is missing. Please configure the API Key to chat with me.";
  }

  try {
    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: systemInstruction,
        },
      });
    }

    const result: GenerateContentResponse = await chatSession.sendMessage({ message: userMessage });
    return result.text || "I'm not sure how to answer that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};