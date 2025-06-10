import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const links = [
      { title: "Home", link: "/" },
      { title: "All Books", link: "/all-books" },
    ];

        const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
        if(isLoggedIn===false){
          links.splice(1,1);
        }

    const handleLogout = () => {
        dispatch(authActions.logout());
        navigate("/LogIn");
    };

    return (
        <div className="flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
            <div className="flex items-center">
                <img
                    className="h-10 me-4"
                    src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png"
                    alt="logo"
                />
                <h1 className="text-2xl font-semibold">BookHeaven</h1>
            </div>
            <div className="nav-links-bookheaven flex items-center gap-4">
                <div className="flex gap-4">
                    {links.map((items,i)=>(
                        <div className="flex items-center justify-center" key={i}>{items.title === "Profile" ? <Link to={items.link} className="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300" key={i}>{items.title}{" "}</Link> : <Link to={items.link} className="hover:text-blue-500 transition-all duration-300" key={i}>{items.title}{" "}</Link>}</div>
                    ))}
                </div>
                
                {isLoggedIn===false && <><div className="flex gap-4">
                    <Link to="/LogIn" className="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
                    Log In
                    </Link>
                    <Link to="/SignUp" className="px-2 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">Sign Up</Link>
                </div></>}
                {isLoggedIn === true && (
                    <button 
                        onClick={handleLogout} 
                        className="px-2 py-1 border border-red-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
                    >
                        Sign Out
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
