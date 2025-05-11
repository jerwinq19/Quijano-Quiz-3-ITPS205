import { Link } from "react-router";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";


const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!isOpen)
    }

    return(
        <nav className="flex justify-between px-2 py-4 bg-stone-600 text-white">
            <Link to="/">Jico</Link>
            <ul
                className={`${
                    isOpen
                    ? "flex flex-col gap-5 absolute top-14 left-0 w-full h-screen p-5 z-50 bg-white/10 backdrop-blur-md"
                    : "hidden"
                } lg:flex gap-5`}
            >                <li>
                    <Link to="/">01. Home</Link>
                </li>
                <li>
                    <Link to="/about">02. About</Link>
                </li>
                <li>
                    <Link to="/project">03. Project</Link>
                </li>
                <li>
                    <Link to="/contact">04. Contacts</Link>
                </li>
            </ul>

            <button className="block lg:hidden" onClick={handleOpen}>
                <RiMenu3Line className="text-2xl" />
            </button>
        </nav>
    );
}

export default Navbar;