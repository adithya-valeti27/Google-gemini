/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import{ 
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

<<<<<<< HEAD
const apiKey = "AIzaSyC9mFXIZJfshs9aZA10YBK5lhsH9JIewiU";
=======
const apiKey =  "";
>>>>>>> 05bec65aed98a0f65c446dbb3f012f8231f1cccd
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
 
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response;
  console.log(result.response.text());
  return response.text();
  
}

export default run;
