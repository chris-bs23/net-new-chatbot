import React from 'react';
import {ChatbotOptionsProps} from "@/app/lib/types";

const ChatbotOptionsContext = React.createContext<ChatbotOptionsProps | null>(null);

const ChatbotOptionsProvider = ({children, options}: {
    children: React.ReactNode;
    options: ChatbotOptionsProps;
}) => {

    return (
        <ChatbotOptionsContext.Provider value={options}>
                                        {children}
        </ChatbotOptionsContext.Provider>
    );
};

const useChatbotOptions = () => {
    const context = React.useContext(ChatbotOptionsContext);
    if (!context) {
        throw new Error('useChatbotOptions must be used within a provider');
    }
    return context;
}

export {ChatbotOptionsProvider, ChatbotOptionsContext,useChatbotOptions};
