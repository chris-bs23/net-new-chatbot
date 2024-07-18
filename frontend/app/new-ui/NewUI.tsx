"use client";

import React from 'react';
import ChatSection from "@/app/components/chat-section";
import QuickChat from "@/app/components/quick-chat";
import NettaliansenLogoCommentButton from "@/app/components/icons/NettaliansenLogoCommentButton";
import {ChatbotOptionsProps} from "@/app/lib/types";
import {ChatbotOptionsProvider} from "@/app/lib/chatbotOptionsContext";

export default function NewUI(options: ChatbotOptionsProps) {
    const popup = options.popup;

    const [isOpen, setIsOpen] = React.useState(true);
    const [selectedQuestion, setSelectedQuestion] = React.useState('');

    return (
        <ChatbotOptionsProvider options={options}>
            <main
                className={`chat-main ${popup && 'chat-popup'} ${popup && popup == "left" ? "popup-left" : "popup-right"} ${popup && (isOpen ? "drop-shadow-lg scale-100" : "scale-0")} duration-300 transition-all ease-in-out`}>
                {
                    options.quickChat && <QuickChat setSelectedQuestion={setSelectedQuestion}/>
                }
                <ChatSection
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    selectedQuestion={selectedQuestion}
                    setSelectedQuestion={setSelectedQuestion}
                />
            </main>
            {popup && (
                <div
                    className={`absolute ${popup && popup == "left" ? "left-3" : "right-4"} bottom-2 cursor-pointer ${popup && (isOpen && "scale-0 opacity-0")} duration-300 transition-all z-30 w-24`}
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}>
                    {
                        options.popupLogo ? <img src={options.popupLogo} alt="" className="h-full w-full"/> :   <NettaliansenLogoCommentButton width="100%"/>

                    }
                </div>
            )}
        </ChatbotOptionsProvider>
    );
}
