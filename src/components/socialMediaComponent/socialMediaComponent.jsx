import { ClassNamesForStyles } from "../../styles/tailwind-classNames/classNames";
import { socialMedia } from "../../data/socialMediaData";

const SocialMediaComponent = () => {
    if(socialMedia) {
       return socialMedia.map(el => (
          <a key={el.id} href={el.href}>
                    <img src={el.src} alt={el.alt} className={ClassNamesForStyles.iconImg}/>
          </a>
       ))
    }
 }
 
 export default SocialMediaComponent;