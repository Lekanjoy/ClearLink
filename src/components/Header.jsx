import logo from "../assets/clearLinkLogo.svg";

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

  return (
    <div className="blur-none flex items-center justify-between py-4 px-8 border border-[#D0D5DD] bg-[#F2F4F7] rounded-full">
      <img src={logo} alt="ClearLink Logo" />
      <nav  className="flex gap-x-6">
      {headerData.map((item) => {
        return <p key={item.id} className="text-[#667085] font-semibold">{item.title}</p>;
        })}
        </nav>
      <div className="flex gap-x-3">
        <button className="rounded-full text-sm bg-white border border-[#98A2B3] font-semibold text-[#101828] py-[14px] px-6">
          Talk to sales
        </button>
        <button className="rounded-full text-sm bg-[#175CD3] border border-[#98A2B3] font-semibold text-white py-[14px] px-6">
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Header;
