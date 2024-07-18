import React from 'react';

type QuickchatItemProps = {
    question: string;
    image?: string;
    textXPosition?: 'textLeft' | 'textRight';
    textYPosition?: 'textTop' | 'textBottom';
    imagePosition?: 'left' | 'right' | 'cover';
    setSelectedQuestion: (question: string) => void;
}

const QuickchatItem = ({
                           question,
                           image,
                           imagePosition = "right",
                           textXPosition = "textLeft",
                           textYPosition = "textBottom",
                           setSelectedQuestion
                       }: QuickchatItemProps) => {
    return (
        <div className="group cursor-pointer" onClick={() => setSelectedQuestion(question)}>
            <div
                className={` border group-hover:scale-[98%] duration-300 transition-transform border-border relative flex ${image ? imagePosition : "quickchat-item"}`}
            >
                <div className={`question-area ${textXPosition} ${textYPosition}`}>
                    <h1 className="text-xl font-bold ellipsis-2">
                        {question}
                    </h1>
                </div>

                {image &&
                    (<div className="image-area relative overflow-hidden">
                        <img src={image} alt="" className={`object-cover h-full w-full group-hover:scale-110 transition-all duration-300`}/>
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30">
                        </div>
                    </div>)
                }

            </div>
        </div>);
};

export default QuickchatItem;
