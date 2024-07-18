"use client";

import { useChat } from "ai/react";
import React from "react";
import { ChatInput, ChatMessages } from "./ui/chat";
import ChatHeader from "./ui/chat/chat-header";
import { ChatSuggestions } from "./ui/chat/chat-message/chat-suggestions";
import ChatWarning from "./ui/chat/chat-warning";
import { useClientConfig } from "./ui/chat/hooks/use-config";

type ChatSectionProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedQuestion?: string;
  setSelectedQuestion: (selectedQuestion: string) => void;
};

export default function ChatSection({
  isOpen,
  setIsOpen,
  selectedQuestion,
  setSelectedQuestion,
}: ChatSectionProps) {
  const { backend } = useClientConfig();
  const {
    messages,
    input,
    isLoading,
    handleSubmit,
    handleInputChange,
    reload,
    stop,
    append,
    setInput,
  } = useChat({
    api: process.env.NEXT_PUBLIC_CHAT_API,
    headers: {
      "Content-Type": "application/json", // using JSON because of vercel/ai 2.2.26
    },
    onError: (error) => {
      const message = JSON.parse(error.message);
      alert(message.detail);
    },
  });

  React.useEffect(() => {
    if (selectedQuestion) {
      append({
        content: selectedQuestion,
        id: new Date().toISOString(),
        role: "user",
      }).then((m) => setSelectedQuestion(""));
    }
  }, [selectedQuestion]);

  return (
    <div className="chat-section ">
      <ChatHeader isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="bg-white h-full flex flex-col overflow-hidden">
        <ChatMessages
          messages={messages}
          isLoading={isLoading}
          reload={reload}
          stop={stop}
          append={append}
        />
        {messages.length === 0 && <ChatSuggestions append={append} />}
        <ChatInput
          input={input}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          isLoading={isLoading}
          messages={messages}
          append={append}
          setInput={setInput}
        />
        <ChatWarning />
      </div>
    </div>
  );
}
