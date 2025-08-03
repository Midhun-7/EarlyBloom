
import { AzureChatOpenAI } from "@langchain/openai";
import { HumanMessage , SystemMessage} from '@langchain/core/messages';
import {SystemPrompt} from "../prompts/FamilyTree.jsx";

const chatModel = new AzureChatOpenAI({
  azureOpenAIApiKey: "b358dd855c464b30abfc1b0c8e9f0157",
  azureOpenAIApiInstanceName: "eastus.api.cognitive.microsoft.com/",
  azureOpenAIApiDeploymentName: "gpt-4o",
  azureOpenAIApiVersion: "2024-02-15-preview",
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