import React, { useState } from 'react';

const ChatInput: React.FC<{ onSend: (message: string) => void }> = ({ onSend }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSend = (event: React.FormEvent) => {
        event.preventDefault();
        if (inputValue.trim()) {
            onSend(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSend}  className='bg-white p-4 flex items-center shadow-md rounded-lg'>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className='flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button type="submit" style={{ marginLeft: '10px', padding: '10px', borderRadius: '5px' }}>
                Send
            </button>
        </form>
    );
};

export default ChatInput;