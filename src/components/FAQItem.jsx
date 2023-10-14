import { useState } from "react";
import collapseIcon from "../assets/faq-.svg";
import expandIcon from "../assets/faq+.svg";

const FAQItem = ({ faq }) => {
  const { question, answer } = faq;
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      className={`flex flex-col p-8  border-b h-[80px] 
    ${showAnswer && "bg-[#F9FAFB]  rounded-2xl ease-in-out duration-500 h-auto"}
    
    `}
    >
      <div className="flex justify-between gap-x-4 items-center ">
        <p className="text-[#101828] font-semibold">{question}</p>
        {showAnswer ? (
          <img
            onClick={() => setShowAnswer(!showAnswer)}
            src={collapseIcon}
            alt="Collapse faq icon"
            className="cursor-pointer"
          />
        ) : (
          <img
            onClick={() => setShowAnswer(!showAnswer)}
            src={expandIcon}
            alt="expand faq icon"
            className="cursor-pointer"
          />
        )}
      </div>

      <p
        className={`text-[#475467] text-sm leading-7 self-stretch opacity-0
        ${showAnswer && "opacity-100 ease-in-out duration-[1000ms]"}
        `}
      >
        {answer}
      </p>
    </div>
  );
};

export default FAQItem;
