import ContactHeaderComponent from "../contactHeaderComponent/contactHeaderComponent";
import MenuHeaderComponent from "../menuHeaderComponent/menuHeaderComponent";
import SearchHeaderComponent from "../searchHeaderComponent/searchHeaderComponent";

const HeaderComponent = () => {
   return <>
       <ContactHeaderComponent/>
       <SearchHeaderComponent />
       <MenuHeaderComponent/>
    </>

}

export default HeaderComponent;