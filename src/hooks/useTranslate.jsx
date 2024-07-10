import { useEffect, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Access your API key as an environment variable
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const useTranslate = (sourceText, selectedLanguage) => {
  const [targetText, setTargetText] = useState('');

  useEffect(() => {
    const handleTranslate = async (sourceText) => {
      try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const chat = model.startChat({
          history: [
            {
              role: 'user',
              parts: [{ text: 'Hello, I need help with translation.' }]
            },
            {
              role: 'model',
              parts: [
                {
                  text: 'Sure, I can help you with that. Please provide the text you want me to translate.'
                }
              ]
            }
          ],
          generationConfig: {
            maxOutputTokens: 300
          }
        });

        const message =`Please correct any spelling mistakes in the following text "${sourceText}", detect its language, and then translate it into ${selectedLanguage}. Do not return anything other than the translated sentence.`;
        const result = await chat.sendMessage(message);
        const data = result.response?.text();
        setTargetText(data);
      } catch (error) {
        console.error('Error translating text:', error);
      }
    };

    if (sourceText.trim()) {
      const timeoutId = setTimeout(() => {
        handleTranslate(sourceText);
      }, 500); // Adjust the delay as needed

      return () => clearTimeout(timeoutId);
    }
  }, [sourceText, selectedLanguage]);

  return targetText;
};

export default useTranslate;
