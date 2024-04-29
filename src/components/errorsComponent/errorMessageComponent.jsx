import { ErrorMessage } from "../../data/errorMessagesData";

const ErrorMessageComponent = () => {
    return <p className="err mt-2 text-red text-sx w-4/5">{ErrorMessage.noSocialMediaInfo}</p>;
  };
  
  export default ErrorMessageComponent;