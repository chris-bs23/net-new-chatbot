"use client";

import React from "react";

import {Textarea} from "@/app/components/ui/textarea";

type CustomTextareaProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    clickSubmit: () => void;
}

export const CustomTextarea = (props: CustomTextareaProps) => {
    const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
    React.useEffect(() => {
        if (textAreaRef && textAreaRef.current) {
            textAreaRef.current.style.height = "0px";
            const scrollHeight = textAreaRef.current.scrollHeight;

            textAreaRef.current.style.height = (scrollHeight > 100 ? 100 : scrollHeight) + "px";

        }
    }, [props.value]);
    const rows = 1;

    return (
      <Textarea
        ref={textAreaRef}
        rows={rows}
        autoFocus
        name="message"
        placeholder="Skriv et spørsmål her..."
        className="py-0 my-auto  border-0 focus-visible:ring-transparent focus-visible:outline-0 focus-visible:shadow-none resize-none shadow-none chat-input-area"
        style={{
            scrollbarGutter: "stable"
        }}
        value={props.value}
        onChange={props.onChange}
        onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                props.clickSubmit();
            }
        }}
      />
    );
};
