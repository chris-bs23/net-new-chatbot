export type ChatbotOptionsProps = {
    popup?: "left" | "right";
    warningMessage?: string;
    greetingMessage?:string;
    botAvatar?: string;
    botName?: string;
    botNameColor?: string;
    userAvatar?: string;
    userName?: string;
    userNameColor?: string;
    popupLogo?: string;
    popupTitle?: string;
    popupSubtitle?: string;
    quickChat?: {
        title?: string;
        subtitle?: string;
        items?: Array<{
            id: number;
            title: string;
            image?: string;
            imagePosition?: 'left' | 'right' | 'cover';
            textXPosition?: 'textLeft' | 'textRight';
            textYPosition?: 'textTop' | 'textBottom';
        }>;
    }
    chatSuggestionsList?: string[];
};