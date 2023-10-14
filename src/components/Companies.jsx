import shopify from "../assets/Shopify.com svg.svg";
import coinbase from "../assets/Coinbase svg.svg";
import dropbox from "../assets/Dropbox svg.svg";
import intercom from "../assets/Intercom svg.svg";
import marvel from "../assets/Marvel svg.svg";
import automatic from "../assets/Automattic svg.svg";

const Companies = () => {
  return (
    <section className="relative flex flex-col gap-y-4 w-full justify-center items-center bg-white px-5 py-10 lg:gap-y-12 lg:py-[96px] lg:px-[128px]">
      <p className="text-[#475467] font-medium text-center text-sm lg:text-base">
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <div className="grid grid-cols-3 gap-y-10 gap-x-6 max-w-full items-center lg:justify-between lg:flex lg:gap-x-8">
        <img
          src={shopify}
          alt="shopify Logo"
          className="lg:w-[183px] lg:h-[36px]"
        />
        <img
          src={coinbase}
          alt="coinbase Logo"
          className="lg:w-[183px] lg:h-[36px]"
        />
        <img
          src={dropbox}
          alt="dropbox Logo"
          className=" lg:w-[183px] lg:h-[36px]"
        />
        <img
          src={intercom}
          alt="intercom Logo"
          className="lg:w-[183px] lg:h-[36px]"
        />
        <img
          src={marvel}
          alt="marvel Logo"
          className="lg:w-[183px] lg:h-[36px]"
        />
        <img
          src={automatic}
          alt="automatic Logo"
          className="lg:w-[183px] lg:h-[36px]"
        />
      </div>
    </section>
  );
};

export default Companies;
