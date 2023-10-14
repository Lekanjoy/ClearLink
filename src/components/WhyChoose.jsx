import video from "../assets/video-recorder.svg";
import noise from "../assets/noise.svg";
import calendar from "../assets/calendar.svg";
import security from "../assets/security.svg";
import whyImg from '../assets/whyChoose.png'
import vector from '../assets/Vector.svg'

const offerData = [
  {
    id: 0,
    img: video,
    title: "Crystal-clear HD video",
    text: "No more pixelation or blurriness - just stunning, lifelike clarity that brings your team closer in meetings.",
  },

  {
    id: 1,
    img: noise,
    title: "Noise-canceling audio",
    text: "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
  },

  {
    id: 2,
    img: calendar,
    title: "Scheduling made easy",
    text: "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
  },

  {
    id: 3,
    img: security,
    title: "Bank-grade security",
    text: "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-10 px-5 lg:py-[96px] lg:px-[128px]">
      <div className="flex flex-col mb-10 lg:mb-[100px]">
        <p className="text-[#175CD3] text-sm font-semibold mb-[2px]">
          The ClearLink Advantage
        </p>
        <h2 className="text-headerColor text-3xl mb-5 font-semibold lg:text-5xl">
          Why choose ClearLink?
        </h2>
        <p className="text-primColor text-sm lg:text-base lg:max-w-[600px] ">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>

      <div className="relative flex flex-col-reverse lg:flex-row lg:gap-x-20">
        <img
          src={vector}
          alt=""
          className="absolute right-[270px] -top-[200px] hidden lg:block"
        />
        <div className="grid grid-cols-2 gap-8 mt-10 lg:mt-0">
          {offerData.map((offer) => {
            return (
              <div key={offer.id} className="flex flex-col">
                <div className="flex w-fit justify-center items-center p-2 mb-3 bg-[#F9FAFB] border border-[#EAECF0] rounded-full lg:mb-5 lg:p-4">
                  <img src={offer.img} alt={offer.title} />
                </div>
                <p className="text-[#101828] text-lg font-semibold lg:text-xl">
                  {offer.title}
                </p>
                <p className="text-[#475467] text-xs lg:text-sm">{offer.text}</p>
              </div>
            );
          })}
        </div>
        <img src={whyImg} alt="" className="w-[544px]" />
      </div>
    </section>
  );
};

export default WhyChoose;
