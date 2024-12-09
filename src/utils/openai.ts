import OpenAI from 'openai';
import { stateInfoData } from '../data/stateInfo';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function generateStateInfo(state: string): Promise<{
  keyPoints: string[];
  error?: string;
}> {
  try {
    // First check if we have cached data for this state
    if (stateInfoData[state]) {
      return {
        keyPoints: Object.values(stateInfoData[state]).flat()
      };
    }

    // If no API key is provided, use fallback data
    if (!import.meta.env.VITE_OPENAI_API_KEY || import.meta.env.VITE_OPENAI_API_KEY.includes('your-api-key')) {
      return {
        keyPoints: [
          'Cost of living varies by region',
          'Housing market is competitive in major cities',
          'Strong job market in technology and services',
          'Climate varies by region',
          'Public transportation available in major cities',
          'Quality healthcare facilities available',
          'Rich cultural scene and diverse lifestyle options'
        ]
      };
    }

    const prompt = `Provide 7 important points about ${state} that would be relevant for someone relocating there. Include information about:
    1. Cost of living
    2. Housing market
    3. Job market
    4. Climate
    5. Transportation
    6. Healthcare
    7. Culture and lifestyle
    Format each point as a concise, clear statement.`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 500
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No content received from OpenAI');
    }

    // Split the content into points and clean them up
    const keyPoints = content
      .split('\n')
      .filter(point => point.trim())
      .map(point => point.replace(/^\d+\.\s*/, '').trim());

    return { keyPoints };
  } catch (error) {
    console.error('Error generating state information:', error);
    // Return fallback data in case of error
    return {
      keyPoints: [
        'Cost of living varies by region',
        'Housing market is competitive in major cities',
        'Strong job market in technology and services',
        'Climate varies by region',
        'Public transportation available in major cities',
        'Quality healthcare facilities available',
        'Rich cultural scene and diverse lifestyle options'
      ]
    };
  }
}