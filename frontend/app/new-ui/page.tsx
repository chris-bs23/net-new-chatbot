import React, {Suspense} from "react";
import NewUIComponent from "./NewUI";
import {ChatbotOptionsProps} from "@/app/lib/types";

const quickChats: {
    id: number;
    title: string;
    image?: string;
    imagePosition?: 'left' | 'right' | 'cover';
    textXPosition?: 'textLeft' | 'textRight';
    textYPosition?: 'textTop' | 'textBottom';

}[] = [
    {
        id: 1,
        title: 'Hva betyr tallene?',
        image: 'https://s3-alpha-sig.figma.com/img/77ee/6abf/bcf883c06dd9b11c98b66c709b296595?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=McmFVXZqh23gW93u5CoEgrWYdkDa9DXn8Xl7V-cLLzkHTaDU38mPLdcKrN6BQDkA~TsTtLYUEGh8JpPZzK6-ucWJW5NMCtZsQu1gD6fGLBPhKA1TY4Oe1LHFoRO0pBwEo36lIUwmw6CKys7wtjqzv~w7DKf9GNqXpEbXIUsYYmwOa4SxfF42A3edIk1mCTbPPLCoHvA0VkzoGChjTsMnuK0aVluyNmskFtPlpjUlcC70v2JgptuiogibeteJZDGGpHd0hX3a9I4~MnblTf-vK1zh~bCsQudqH9QFS7JvJW7ds2VRUM2LVQuYPiUWgeg8SLL9tYr376GSgM-aXyEB4A__'
    },
    {
        id: 2,
        title: 'Hvordan kobler jeg meg opp mot strømnettet hjemme eller på hytta?',
        image: 'https://s3-alpha-sig.figma.com/img/a6b1/f3f7/b24d12c3ba569c8e9cac508f45a65542?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wg1F3ckHUnMi8Uf0BDhN~54sp-C~2Ks3MOm07yqv11zDa2W4N49Vg6-M3vZcFBZeuBZK5IIbvLwRskfcyySlIfGnb8kwLHPlrFDoVW7yDSxFRKY27BSJBwKiath9vYbkKIt5QckzTXXWZfdGqz3q6bat70eJv2SzmFuKbHI7vHP8xFokBytFqE~vVZ~s36BOnv36pBQJO3WdUTU-pX8m2vtb2BrwEZEnhaIlb7FI4eai6EbmFoULJj03wG7EqiH8eo1z8oZuSXLIP7ZOXyHhJnoA66tcch~6gYgsLhVJDBtAPvmWW6HtEp4ao-hwCKscDdPuxVV16u-RwhyMQ521jA__',
        imagePosition: "cover",
        textXPosition: "textLeft",
        textYPosition: "textBottom"
    },
    {id: 3, title: 'Hvor finner jeg målepunktID?'},
    {
        id: 4,
        title: 'Hvorfor får jeg to fakturaer?',
        image: "https://s3-alpha-sig.figma.com/img/ea5f/675b/1fc32c040387eff7c5329ec42bd4bb70?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H1QDo2XSwFZvkXIQis0mmUmR7zkibpDonP3GkNYwf6BCo9CVx3M6UhhVO5b7OsCT-qTvFPM9btc7sMVONXLdqs7Myejw1AzyAfNDIcTh-3pYVOBqljMJ6HGg8bRLcgTO3xxdc4sk~8Dtyu0s0zQOeRq87dUvOxAJWhkrIzhNyzBg42AC3pHxn7ttAflySaDyHn4oV9PYunxQToSnG8Jc1UqrVmczcILwKXyUn-Khfcwx9cUU71FjIJyH~6tOke-rUGoLnAZTyUcxb8CNrBhqtefOgUxXmSHiT7-McKTI6DUWk8OZC6~gxNePmrZH0LYiLzqpQaNnun6an3GJGtp2-Q__",
        imagePosition: "left"
    }
];

export default function NewUI() {
    const options: ChatbotOptionsProps = {
        botName: "Voltbot",
        warningMessage: "Husk at denne chatboten er drevet av kunstig intelligens. Den kan gi generell informasjon og assistanse, men kan ikke erstatte råd fra en kvalifisert fagperson. Vi oppfordrer deg til å utvise forsiktighet og unngå å dele sensitiv informasjon i denne chatten.",
        quickChat: {
            title: "Oppdag VoltBot",
            subtitle: "Voltbot er din strømekspert og kundeservicepartner. Voltbot er utviklet for å gi deg nøyaktig informasjon og hjelp med alt som handler om strøm - enten det gjelder å forstå regninger, optimalisere strømforbruk eller velge riktig leverandør.",
            items: quickChats,
        },

        userName: "User",
        chatSuggestionsList: ["Hello", "What day is it today?", "What can do you?", "Tell me something about the company."],
        popupTitle: "Voltbot:",
        popupSubtitle: "Nettalliansens AI-assistent",
        botNameColor: "#15803D",
        userNameColor: "#1E3A8A",
        greetingMessage: "Hello! How can I help you today?",
        // popupLogo:"https://cdn3d.iconscout.com/3d/premium/thumb/message-4737170-3934375.png?f=webp"
    }
    return (
        <div className="page-container">
            <Suspense>
                <NewUIComponent {...options}/>
                <NewUIComponent popup="left" {...options}/>
            </Suspense>
        </div>
    );
}
