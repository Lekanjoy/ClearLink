import { useState } from "react";
import collapseIcon from "../assets/faq-.svg";
import expandIcon from "../assets/faq+.svg";

const FAQItem = ({ faq }) => {
  const { question, answer } = faq;
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      className={`flex flex-col  border-b h-[80px] lg:p-8 
    ${
      showAnswer &&
      "bg-[#F9FAFB] p-4 rounded-2xl ease-in-out duration-500 h-auto"
    }
    
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
        className={`text-[#475467] text-xs leading-5 self-stretch pointer-events-none opacity-0 mt-3 lg:leading-7 lg:text-sm
        ${showAnswer && "opacity-100 ease-in-out duration-[1000ms]"}
        `}
      >
        {answer}
      </p>
    </div>
  );
};

export default FAQItem;
