import React, { useRef } from "react";

import { useChatbotOptions } from "@/app/lib/chatbotOptionsContext";
import ChatActions from "./chat-actions";
import ChatMessage from "./chat-message";
import ChatAvatar from "./chat-message/chat-avatar";
import { ChatHandler } from "./chat.interface";

export default function ChatMessages(
  props: Pick<
    ChatHandler,
    "messages" | "isLoading" | "reload" | "stop" | "append"
  >,
) {
  const scrollableChatContainerRef = useRef<HTMLDivElement>(null);
  const messageLength = props.messages.length;
  const lastMessage = props.messages[messageLength - 1];

  const scrollToBottom = () => {
    if (scrollableChatContainerRef.current) {
      scrollableChatContainerRef.current.scrollTop =
        scrollableChatContainerRef.current.scrollHeight;
    }
  };

  const isLastMessageFromAssistant =
    messageLength > 0 && lastMessage?.role !== "user";
  const showReload =
    props.reload && !props.isLoading && isLastMessageFromAssistant;
  const showStop = props.stop && props.isLoading;

  // `isPending` indicate
  // that stream response is not yet received from the server,
  // so we show a loading indicator to give a better UX.
  const isPending = props.isLoading && !isLastMessageFromAssistant;

  React.useEffect(() => {
    scrollToBottom();
  }, [messageLength, lastMessage]);

  const { botName, botNameColor } = useChatbotOptions();

  return (
    <div className="w-full flex-1 flex flex-col overflow-y-auto bg-white relative ">
      <div
        className="flex flex-col gap-4 messages overflow-y-auto pt-24 px-14 pb-14 flex-1"
        ref={scrollableChatContainerRef}
      >
        {props.messages.map((m, i) => {
          const isLoadingMessage = i === messageLength - 1 && props.isLoading;
          return (
            <ChatMessage
              key={m.id}
              chatMessage={m}
              isLoading={isLoadingMessage}
            />
          );
        })}
        {isPending && (
          <div className={`flex items-start gap-2 `}>
            <ChatAvatar role="assistant" />
            <div className="flex flex-col justify-start">
              <h1
                style={{
                  color: botNameColor || "green",
                }}
                className={`font-bold text-[1.1rem]`}
              >
                {botName || "Bot"}
              </h1>
              <div className="px-6 py-2">
                <div className="dot-flashing"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      {messageLength > 1 && lastMessage?.role === "assistant" && (
        <ChatActions
          reload={props.reload}
          stop={props.stop}
          showReload={showReload}
          showStop={showStop}
        />
      )}
      {/* {(showReload || showStop) && (
        <div className="flex justify-end py-4">
          <ChatActions
            reload={props.reload}
            stop={props.stop}
            showReload={showReload}
            showStop={showStop}
          />
        </div>
      )} */}
      {/* {!messageLength && starterQuestions?.length && props.append && (
        <div className="absolute bottom-6 left-0 w-full">
          <div className="grid grid-cols-2 gap-2 mx-20">
            {starterQuestions.map((question, i) => (
              <Button
                variant="outline"
                key={i}
                onClick={() =>
                  props.append!({ role: "user", content: question })
                }
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
}
