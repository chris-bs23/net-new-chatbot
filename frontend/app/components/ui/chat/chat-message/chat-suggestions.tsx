"use client"
import React from "react";
import {CreateMessage, Message} from "ai/react";
import {useChatbotOptions} from "@/app/lib/chatbotOptionsContext";

type ChatSuggestionsProps = {
    append: (message: Message | CreateMessage, chatRequestOptions?: any) => Promise<string | null | undefined>;
}

export const ChatSuggestions = (props: ChatSuggestionsProps) => {
const {chatSuggestionsList} = useChatbotOptions();

    return (<div className="flex flex-wrap gap-2 bg-white px-14 chat-suggestions
    ">
        {chatSuggestionsList?.map((suggestion, i) => (
            <h1 key={i} onClick={async () => await props.append({content: suggestion, id: new Date().toISOString(), role: "user"})}
                className="bg-gray-300 hover:bg-gray-200 cursor-pointer border border-border rounded-xl p-2 text-sm font-semibold">
                {suggestion}
            </h1>
        ))}
    </div>);
};
