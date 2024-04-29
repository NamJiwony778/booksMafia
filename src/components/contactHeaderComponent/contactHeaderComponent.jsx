import SocialMediaComponent from "../socialMediaComponent/socialMediaComponent";
import phone from "../../assets/icons/phone.svg";
import { ClassNamesForStyles } from "../../styles/tailwind-classNames/classNames";

const ContactHeaderComponent = () => {
    return <div className="w-screen flex items-center justify-between px-5 lg:px-10 h-12 md:h-16 bg-violet">
        <div className="flex items-center h-5">
            <img src={phone} alt="white phone icon" className={ClassNamesForStyles.iconImg}/>
            <p className="mx-5 text-base text-white text-[11px] md:text-base lg:text-xl">+91 8374902234</p>
        </div>
        <div className="flex items-center gap-x-2.5">
          <SocialMediaComponent/>
        </div>
     </div>
 
 }
 
 export default ContactHeaderComponent;