
import { AzureChatOpenAI } from "@langchain/openai";
import { HumanMessage , SystemMessage} from '@langchain/core/messages';
import {SystemPrompt} from "../prompts/FamilyTree.jsx";

const chatModel = new AzureChatOpenAI({
  azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
  azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_ENDPOINT,
  azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_DEPLOYMENT_NAME,
  azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_VERSION,
  temperature: 0.7,
});

export async function getResponse(prompt: string) {
  const response = await chatModel.invoke([new SystemMessage("You are a helpful assistant."), new HumanMessage(prompt)]);
  return response;
}

export async function getFamilyTreeResponse(prompt: string) {
  const response = await chatModel.invoke([new SystemMessage(SystemPrompt), new HumanMessage(prompt)]);
  return response;
}