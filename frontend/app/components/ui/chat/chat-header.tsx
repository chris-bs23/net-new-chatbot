"use client";
import React from 'react';
import {X} from "lucide-react";
import {Button} from "@/app/components/ui/button";
import {useChatbotOptions} from "@/app/lib/chatbotOptionsContext";



type ChatHeaderProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const ChatHeader = ({isOpen,setIsOpen}:ChatHeaderProps) => {
    const {popupTitle,popupSubtitle} = useChatbotOptions();
    return (
        <div className="chat-header hidden p-5 text-white items-center">

            <h2 className="flex-1 text font-medium">{popupTitle || "Bot"} <span className="font-light text-white/80">{popupSubtitle || "An AI Assistant"}</span>
            </h2>


            <Button onClick={()=>{setIsOpen(!isOpen)}} variant={"secondary"} className="bg-white rounded-full h-fit p-0">
                <X className="stroke-blue-950 w-6 h-6 p-1"/>
            </Button>

        </div>
    );
};

export default ChatHeader;