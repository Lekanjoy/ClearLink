import logo from "../assets/clearLinkLogo.svg";
import apple from "../assets/Apple logo.svg";
import play from "../assets/Google Play logo.svg";

const Footer = () => {
  return (
    <section className=" flex flex-col justify-between px-5 py-10 lg:flex-row  lg:py-[96px] lg:px-[128px]">
      <div className="flex flex-col gap-y-4 mb-10 lg:mb-0 lg:gap-y-8 lg:w-[300px]">
        <div>
          <img src={logo} alt="ClearLink logo" />
        </div>
        <p className="text-[#475467] text-sm ">
          ClearLink is your gateway to effortless, high-quality video
          conferencing. Join us in shaping the future of communication!
        </p>
      </div>

      <div className="flex flex-col justify-between items-center text-center gap-y-10 lg:text-left lg:items-start lg:gap-x-20 lg:flex-row">
        <ul className="w-full flex flex-col gap-y-4 border-b pb-3 lg:w-auto lg:border-none lg:pb-0">
          <li className="text-[#667085] text-lg font-semibold lg:text-xs">Product</li>
          <li className="text-[#475467] text-sm font-semibold">Overview</li>
          <li className="text-[#475467] text-sm font-semibold">Features</li>
          <li className="text-[#475467] text-sm font-semibold">Solutions</li>
          <li className="text-[#475467] text-sm font-semibold">Tutorials</li>
          <li className="text-[#475467] text-sm font-semibold">Pricing</li>
        </ul>

        <ul className="flex flex-col gap-y-4 w-full border-b pb-3 lg:w-auto lg:border-none lg:pb-0">
          <li className="text-[#667085] text-lg font-semibold lg:text-xs">Company</li>
          <li className="text-[#475467] text-sm font-semibold">About us</li>
          <li className="text-[#475467] text-sm font-semibold">Careers</li>
          <li className="text-[#475467] text-sm font-semibold">Press</li>
          <li className="text-[#475467] text-sm font-semibold">News</li>
          <li className="text-[#475467] text-sm font-semibold">Contact</li>
        </ul>

        <ul className="flex flex-col gap-y-4 w-full border-b pb-3 lg:w-auto lg:border-none lg:pb-0">
          <li className="text-[#667085] text-lg font-semibold lg:text-xs">Resources</li>
          <li className="text-[#475467] text-sm font-semibold">Blog</li>
          <li className="text-[#475467] text-sm font-semibold">Events</li>
          <li className="text-[#475467] text-sm font-semibold">Help centre</li>
          <li className="text-[#475467] text-sm font-semibold">Tutorials</li>
          <li className="text-[#475467] text-sm font-semibold">Support</li>
        </ul>

        <ul className="flex flex-col gap-y-4 w-full border-b pb-3 lg:w-auto lg:border-none lg:pb-0">
          <li className="text-[#667085] text-lg font-semibold lg:text-xs">Legal</li>
          <li className="text-[#475467] text-sm font-semibold">Terms</li>
          <li className="text-[#475467] text-sm font-semibold">Privacy</li>
          <li className="text-[#475467] text-sm font-semibold">Cookies</li>
          <li className="text-[#475467] text-sm font-semibold">Licenses</li>
          <li className="text-[#475467] text-sm font-semibold">Contact</li>
        </ul>
      </div>

      <div className="flex flex-col items-center mt-10 lg:items-start lg:mt-0 lg:border-none lg:pt-0">
        <p className="font-semibold text-sm text-[#004EEB]">Get the app</p>
        <div className="flex items-center gap-x-3 lg:flex-col">
          <button className="p-1 w-fit rounded flex text-xs gap-x-2 items-center bg-black border border-[#A6A6A6] W-[135px] h-10 my-4">
            <img src={apple} alt="Apple icon" />
            <div className="text-white flex flex-col text-left">
              <span>Download on the </span>
              <span className="font-semibold text-sm italic">App Store</span>
            </div>
          </button>
          <button className="p-1 w-fit rounded flex text-xs gap-x-2 items-center bg-black border border-[#A6A6A6] W-[135px] h-10">
            <img src={play} alt="Google play icon" />
            <div className="text-white flex flex-col text-left">
              <span>GET on</span>
              <p className="font-semibold text-sm italic">Google Play</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
