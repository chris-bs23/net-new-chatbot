import React from 'react';
import QuickchatItem from "@/app/components/quickchat-item";
import {useChatbotOptions} from "@/app/lib/chatbotOptionsContext";

interface QuickChatProps {
  setSelectedQuestion: (question: string) => void;
}

const QuickChat: React.FC<QuickChatProps> = ({ setSelectedQuestion }) => {

  const {quickChat} = useChatbotOptions();

  return (
      <div className="quick-chat p-12">
        <div className="quick-chat-top mb-4">
          <h3 className="text-3xl font-bold mb-4 text-green-700">{quickChat?.title || "Quick Chat"}</h3>
          <p className="text-gray-700">
              {quickChat?.subtitle || "Quickly find answers to common questions."}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {
              quickChat?.items?.map((quickChat) => (
                <QuickchatItem
                    key={quickChat.id}
                    question={quickChat.title}
                    image={quickChat.image}
                    imagePosition={quickChat.imagePosition}
                    textXPosition={quickChat.textXPosition}
                    textYPosition={quickChat.textYPosition}
                    setSelectedQuestion={setSelectedQuestion}
                />
            ))
          }
        </div>
      </div>
  );
};

export default QuickChat;
