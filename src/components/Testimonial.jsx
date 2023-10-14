import shopify from "../assets/Shopify.com svg.svg";
import star from "../assets/Star.svg";
import testImg from "../assets/testimonialBg.png";
import avatar from '../assets/Avatar.svg'
import arrow from '../assets/arrow.svg'

const Testimonial = () => {
  return (
    <section className="bg-[#F9FAFB] w-full min-h-max py-10 px-5 lg:py-[96px] lg:px-[128px]">
      <div className="flex flex-col gap-y-5 lg:gap-y-10">
        <img src={shopify} alt="Shopify logo" className="w-[112px] h-7" />
        <div className="flex items-center">
          <img src={star} alt="star icon" className="w-4 h-4" />
          <img src={star} alt="star icon" className="w-4 h-4" />
          <img src={star} alt="star icon" className="w-4 h-4" />
          <img src={star} alt="star icon" className="w-4 h-4" />
          <img src={star} alt="star icon" className="w-4 h-4" />
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between mt-8 items-center gap-x-[30px] w-full lg:flex-row">
        <div className="flex flex-col gap-y-6 lg:gap-y-12">
          <h3 className="text-headerColor font-medium text-2xl text-center lg:text-left lg:text-[36px] lg:leading-[60px] lg:-tracking-[0.88px]">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, andtop-notch security make it essential for our
            team.
          </h3>
          <div className="flex justify-between">
            <div className="flex items-center gap-x-4">
              <img src={avatar} alt="Shopify project manager avatar" />
              <div className="flex flex-col">
                <p className="text-headerColor text-sm font-semibold">
                  Sarah Thompson
                </p>
                <p className="text-[#475467] text-xs">
                  Project Manager, Shopify
                </p>
              </div>
            </div>
            <div className="flex gap-x-8">
              <div className="cursor-pointer  backdrop-blur-sm flex justify-center items-center rounded-full w-14 h-14 border border-[#D1E9FF] bg-white">
                <img src={arrow} alt="Arrow Left" className="rotate-180" />
              </div>
              <div className="cursor-pointer backdrop-filter backdrop-blur-sm flex justify-center items-center rounded-full w-14 h-14 border border-[#D1E9FF] bg-white">
                <img src={arrow} alt="Arrow Right" />
              </div>
            </div>
          </div>
        </div>
        <img
          src={testImg}
          alt="People working"
          className="mb-10 lg:mb-0 lg:w-1/2"
        />
      </div>
    </section>
  );
};

export default Testimonial;
