import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import github from '../assets/github.svg'
import youtube from '../assets/youtube.svg'

const FooterLinks = () => {
  return (
    <div className="bg-[#F9FAFB] flex flex-col items-center gap-y-4 p-5 lg:flex-row lg:py-[48px] lg:px-[128px] lg:gap-x-8 ">
      <p className="text-[#667085] text-sm">
        © 2023 ClearLink. All rights reserved.
      </p>
      <div className="flex gap-x-6 items-center">
        <img src={linkedin} alt="Linkedin icon" />
        <img src={twitter} alt="twitter icon" />
        <img src={facebook} alt="facebook icon" />
        <img src={instagram} alt="instagram icon" />
        <img src={github} alt="github icon" />
        <img src={youtube} alt="youtube icon" />
      </div>
    </div>
  );
}

export default FooterLinks