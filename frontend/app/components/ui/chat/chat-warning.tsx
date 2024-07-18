import React from "react";
import WarningCircle from "@/app/components/icons/WarningCircle";

export default function ChatWarning() {
  return (
    <div className="chat-warning px-14 pb-5 flex items-center">
      <span className="chat-warning-icon">
        <WarningCircle className="h-full"/>
      </span>
      <p className="chat-warning-description">Husk at denne chatboten er drevet av kunstig intelligens. Den kan gi
        generell informasjon og assistanse, men
        kan ikke erstatte råd fra en kvalifisert fagperson. Vi oppfordrer deg til å utvise forsiktighet og unngå å dele
        sensitiv informasjon i denne chatten.</p>
    </div>
  );
}