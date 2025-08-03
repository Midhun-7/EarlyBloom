'use client';

import React, { useState } from 'react';
import {
  Node,
  Edge,
} from 'reactflow';

import { graphToPrompt } from '@/utils/GraphToPrompt';
import { getFamilyTreeResponse } from '@/utils/AzureOpenAIClient';

type Message = {
  from: 'user' | 'bot';
  text: string;
};

const Chatbot: React.FC<{ nodes: Node[]; edges: Edge[] }> = ({ nodes, edges }) => {
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: 'Hi! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    const summary = graphToPrompt(nodes, edges);

    console.log('Graph Summary:', summary);
    getFamilyTreeResponse(summary)
      .then((response) => {
        const botMessage: Message = { from: 'bot', text: response.text };
        setMessages((prev) => [...prev, botMessage]);
      })
      .catch((error) => {
        console.error('Error fetching response:', error);
        setMessages((prev) => [
          ...prev,
          { from: 'bot', text: 'Sorry, I could not process your request.' },
        ]);
      });

    setInput('');
  };

  return (
    <div className="h-screen bg-white shadow-lg rounded-xl flex flex-col border">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-xl font-semibold">
        Chat Assistant
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[75%] px-4 py-2 rounded-lg ${
              msg.from === 'user'
                ? 'ml-auto bg-blue-500 text-white'
                : 'mr-auto bg-gray-200 text-black'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="p-3 border-t flex gap-2"> 
        <input
          className="flex-1 border text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
