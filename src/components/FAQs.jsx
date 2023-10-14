
import FAQItem from "./FAQItem";

const FAQData = [
  {
    id: 0,
    question: "How many participants can join a ClearLink video conference?",
    answer:
      "  ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },

  {
    id: 1,
    question: "Can I use ClearLink on multiple devices?",
    answer:
      "  ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },

  {
    id: 2,
    question:
      "Is ClearLink compatible with other video conferencing platforms?",
    answer:
      "  ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },

  {
    id: 3,
    question: "How does ClearLink ensure the security of my video conferences?",
    answer:
      "  ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },

  {
    id: 4,
    question: "Do I need to download any software to use ClearLink?",
    answer:
      "  ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },

  {
    id: 5,
    question: "What kind of customer support does ClearLink provide?",
    answer:
      "  ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
];

const FAQs = () => {
  return (
    <section className="flex flex-col justify-between px-5 py-10 gap-x-8 lg:flex-row lg:py-[96px] lg:px-[128px]">
      <div className="flex flex-col lg:w-[550px]">
        <p className="text-sm text-[#175CD3] mb-[3px] font-semibold">Support</p>
        <h4 className="text-headerColor text-3xl mb-5 font-semibold lg:text-5xl">FAQ</h4>
        <p className="text-primColor text-sm lg:text-base lg:leading-8">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for?{" "}
          <a href="" className="underline decoration-primColor">
            Please chat to our friendly team.
          </a>
        </p>
      </div>

      <div className="flex flex-col w-full lg:gap-y-4 ">
        {FAQData.map(faq => {
            return <FAQItem key={faq.id} faq={faq}/>
        })}
      </div>
    </section>
  );
};

export default FAQs;
