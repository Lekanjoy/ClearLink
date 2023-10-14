import trialImg from '../assets/cta-sub.png'
import checkmark from '../assets/check-circle.svg'

const Trial = () => {
  return (
    <section className="flex flex-col justify-between items-center px-5 py-10 lg:flex-row lg:pt-[96px] lg:pl-[128px]">
      <div className="flex flex-col">
        <h4 className=" font-semibold text-headerColor mb-5 text-3xl lg:text-5xl lg:leading-[60px]">
          Ready to clear the path to perfect communication?
        </h4>

        <div className="flex flex-col gap-y-3 lg:gap-y-5">
          <div className="flex gap-x-3 items-center">
            <img src={checkmark} alt="Checkmark icon" />
            <p className="text-[#475467] text-sm lg:text-base">30 days free trial</p>
          </div>
          <div className="flex gap-x-3 items-center">
            <img src={checkmark} alt="Checkmark icon" />
            <p className="text-[#475467] text-sm lg:text-base">Cancel at any time</p>
          </div>
          <div className="flex gap-x-3 items-center">
            <img src={checkmark} alt="Checkmark icon" />
            <p className="text-[#475467] text-sm lg:text-base">Access to all features</p>
          </div>
          <div className="flex gap-x-3 items-center">
            <img src={checkmark} alt="Checkmark icon" />
            <p className="text-[#475467] text-sm lg:text-base">Personalised onboarding</p>
          </div>
        </div>

        <div className="flex gap-x-2 mt-5 lg:mt-10">
          <button className="rounded-full text-sm bg-white border border-[#98A2B3] font-semibold text-[#101828] px-6 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] lg:py-[14px]">
            Talk to sales
          </button>
          <button className="rounded-full text-sm bg-[#175CD3] border border-[#98A2B3] font-semibold text-white  px-6 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05) lg:py-[14px]]">
            Start your free trial
          </button>
        </div>
      </div>

      <div className="mt-10 lg:mt-0">
        <img
          src={trialImg}
          alt="Video call interface with multiple participants"
          className=""
        />
      </div>
    </section>
  );
}

export default Trial