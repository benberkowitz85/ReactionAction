import React from "react";
import { Link } from "react-router-dom";

function Nav({ currentPage }) {
    // This allows the nav bar to highlight the current page. The ternerary operator checks if the currentPage is equal to the page being mapped over. If it is, it will apply the text-blue-500 class, if not, it will apply the text-gray-500 class.
    const isPageActive = (page) => (currentPage === page ? "text-blue-500 hover:text-blue-800" : "text-gray-500 hover:text-gray-700 cursor-pointer");

    return (
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex items-center justify-between mx-auto">
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className={isPageActive("/")}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className={isPageActive("/portfolio")}>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume" className={isPageActive("/resume")}>
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={isPageActive("/contact")}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;