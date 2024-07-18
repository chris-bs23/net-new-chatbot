"use client";

import NettallinsenWhite from "@/app/components/icons/NettallinsenWhite";
import { useChatbotOptions } from "@/app/lib/chatbotOptionsContext";
import { User2 } from "lucide-react";

export default function ChatAvatar({ role }: { role: string }) {
  const { botAvatar, userAvatar, botNameColor, userNameColor } =
    useChatbotOptions();
  if (role === "user") {
    return (
      <div
        style={{ backgroundColor: userNameColor || "blue" }}
        className="flex aspect-square shrink-0 select-none items-center justify-center rounded-full text-white user-avatar h-12 w-12"
      >
        {userAvatar ? (
          <img src={userAvatar} alt="" />
        ) : (
          <User2 width={24} height={24} className="h-full" />
        )}
      </div>
    );
  }

  return (
    <div
      style={{ backgroundColor: botNameColor || "blue" }}
      className="flex aspect-square shrink-0 select-none items-center justify-center rounded-full  text-white assistant-avatar h-12 w-12"
    >
      {botAvatar ? (
        <img src={botAvatar} alt="" />
      ) : (
        <NettallinsenWhite className="h-full" width={30} height={30} />
      )}
    </div>
  );
}
