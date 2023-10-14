import heroImg from "../assets/heroImg.png";
import avatars from "../assets/Avatars.svg";
import star from "../assets/Star.svg";
import AI from '../assets/AI.svg'

const Hero = () => {
  return (
    <section className="relative flex justify-between border-b flex-col gap-y-8 px-5 lg:flex-row  lg:gap-x-2 lg:pb-[96px] lg:px-[128px]">
      <div>
        <h1 className="text-headerColor text-4xl font-semibold mb-6 lg:leading-[72px] lg:text-[64px]">
          Uniting the world,one video call at a time
        </h1>
        <p className="text-primColor text-sm mb-6 lg:text-base lg:mb-12">
          Experience the future of communication with ClearLink - where
          crystal-clear video conferencing meets unparalleled simplicity.
        </p>
        <div className="flex  items-center gap-x-3 mb-6 lg:gap-x-5 lg:mb-12">
          <button className="rounded-full text-sm bg-[#175CD3] border border-[#98A2B3] font-semibold text-white py-2 px-4 lg:py-4 lg:px-7">
            Start your free trial
          </button>
          <div className="flex items-center gap-x-1">
            <img src={AI} alt="AI icon" />
            <p className="text-[#175CD3] text-sm">Discover AI assistant</p>
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="">
            <img src={avatars} alt="Avatar icons of users" />
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex items-center">
              <img src={star} alt="star icon" className="w-4 h-4" />
              <img src={star} alt="star icon" className="w-4 h-4" />
              <img src={star} alt="star icon" className="w-4 h-4" />
              <img src={star} alt="star icon" className="w-4 h-4" />
              <img src={star} alt="star icon" className="w-4 h-4" />
              <p className="text-xs text-[#344054] font-semibold pl-1">5.0</p>
            </div>
            <p className="text-xs text-[#344054] font-semibold">
              from 3,000+ reviews
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image  */}
      <div className="w-full">
        <img
          src={heroImg}
          alt="Video Call interface showing multiple participants on a call"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
