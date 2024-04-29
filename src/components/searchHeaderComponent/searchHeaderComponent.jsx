import search from "../../assets/icons/search.svg"
import user from "../../assets/icons/user.svg"

const SearchHeaderComponent = () => {
    return <div className="w-screen relative flex justify-start items-center p-6 px-5 lg:px-10"> 
                <form className="w-3/4 md:w-2/4 absolute flex-initial md:left-1/4">   
                    <div className="relative">
                        <input type="search" id="default-search" className="w-full p-2  px-3 rounded-3xl bg-lightGrey 
                          focus:border-violet" placeholder="Search Books" required />
                        <button type="submit" className="absolute  end-2.5 bottom-2.5 bg-transparent hover:bg-transparent focus:outline-none px-4">
                             <img src={search} alt="search icon"/>
                        </button>
                    </div>
                </form>
                <div className="ml-auto">
                    <a href="#" className="text-violet visited:text-purple-600">
                        <img src={user} alt="user icon"/>
                    </a>
                </div>
            </div>
}

export default SearchHeaderComponent