import { useState } from "react";
import logo from "../assets/clearLinkLogo.svg";
import hamburger from '../assets/icon-hamburger.svg'

const Header = () => {
  const headerData = [
    {
      id: 0,
      title: "Products",
    },

    {
      id: 1,
      title: "Solutions",
    },

    {
      id: 2,
      title: "Resources",
    },

    {
      id: 3,
      title: "Pricing",
    },
  ];

  const [showNav, setShowNav] = useState(false)

  return (
    <div className="flex items-center justify-between  py-4 px-5  border-[#D0D5DD] bg-[#F2F4F7] lg:rounded-full lg:border lg:flex-row  lg:px-8">
      <div>
        <img src={logo} alt="ClearLink Logo" />
      </div>
      <div onClick={() => setShowNav(!showNav)} className="block cursor-pointer lg:hidden">
        <img src={hamburger} alt="Hamburger Menu" />
      </div>
      <nav className="hidden flex-col absolute top-[84px] px-5 py-10 left-0  gap-y-8 bg-[#F2F4F7] w-full lg:p-0 lg:relative lg:gap-x-6 lg:flex-row lg:top-0 lg:bg-none lg:w-auto lg:flex">
        {headerData.map((item) => {
          return (
            <p key={item.id} className="text-[#667085] font-semibold">
              {item.title}
            </p>
          );
        })}
        <div className="flex gap-x-3  lg:hidden">
          <button className="rounded-full text-sm bg-white border border-[#98A2B3] font-semibold text-[#101828] py-[12px] px-6">
            Talk to sales
          </button>
          <button className="rounded-full text-sm bg-[#175CD3] border border-[#98A2B3] font-semibold text-white py-[12px] px-6">
            Sign up for free
          </button>
        </div>
      </nav>
      <div className=" gap-x-3 hidden lg:flex">
        <button className="rounded-full text-sm bg-white border border-[#98A2B3] font-semibold text-[#101828] py-[14px] px-6">
          Talk to sales
        </button>
        <button className="rounded-full text-sm bg-[#175CD3] border border-[#98A2B3] font-semibold text-white py-[14px] px-6">
          Sign up for free
        </button>
      </div>

      {/* Mobile Nav */}

      {showNav && (
        <nav className="flex flex-col absolute top-[84px] px-5 py-10 left-0  gap-y-8 bg-[#F2F4F7] w-full lg:hidden lg:p-0 lg:relative lg:gap-x-6 lg:flex-row lg:top-0 lg:bg-none lg:w-auto">
          {headerData.map((item) => {
            return (
              <p key={item.id} className="text-[#667085] font-semibold">
                {item.title}
              </p>
            );
          })}
          <div className="flex gap-x-3  lg:hidden">
            <button className="rounded-full text-sm bg-white border border-[#98A2B3] font-semibold text-[#101828] py-[12px] px-6">
              Talk to sales
            </button>
            <button className="rounded-full text-sm bg-[#175CD3] border border-[#98A2B3] font-semibold text-white py-[12px] px-6">
              Sign up for free
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
