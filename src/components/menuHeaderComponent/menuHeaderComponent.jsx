import { ClassNamesForStyles } from "../../styles/tailwind-classNames/classNames";
import hamburger from "../../assets/icons/hamburger.svg"
import { useState, useEffect } from "react";


const MenuHeaderComponent = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [size, setSize] = useState(window.innerWidth)

    let classNameDiv

    function getClassName(size) {
       if(size >= 768) {
        return classNameDiv = ClassNamesForStyles.isMenuVisible
       } else if (size <= 576 && isNavOpen) {
        return classNameDiv = ClassNamesForStyles.isMenuSmallVisible
       } else {
        return classNameDiv = ClassNamesForStyles.isMenuHidden

       }
    }
   
     
    useEffect(() => {
        const updateWindowDimensions = () => {
            setSize(window.innerWidth)
          }
          window.addEventListener('resize', updateWindowDimensions)
          return () => window.removeEventListener('resize', updateWindowDimensions)
    }, [])

   getClassName(size)

    return <nav>
                <button data-collapse-toggle="navbar-hamburger" type="button" onClick={() => setIsNavOpen((prev) => !prev)} className="md:hidden inline-flex items-center justify-center m-2 p-2 w-10 h-10 text-sm text-violet-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <img src={hamburger} alt="hamburger menu icon"/>
                </button>
                <div className={`${classNameDiv}`} id="navbar-hamburger">
                        <a href="#responsive-header" className={ClassNamesForStyles.menuItem}>
                        Home
                        </a>
                        <a href="#responsive-header" className={ClassNamesForStyles.menuItem}>
                        About Us
                        </a>
                        <a href="#responsive-header" className={ClassNamesForStyles.menuItem}>
                        Books
                        </a>
                        <a href="#responsive-header" className={ClassNamesForStyles.menuItem}>
                        New Release
                        </a>
                        <a href="#responsive-header" className={ClassNamesForStyles.menuItem}>
                        Contact Us
                        </a>
                        <a href="#responsive-header" className={ClassNamesForStyles.menuItem}>
                        Blog
                        </a>
                </div>
            </nav>

}

export default MenuHeaderComponent;