import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function MainPage(currentPage) {
    currentPage = currentPage.currentPage;
// Set the document once component renders
    useEffect(() => {
        document.title = currentPage.charAt(1).toUpperCase() + currentPage.slice(2) + " | Anders Newgard";
    }, [currentPage]);

    return (
        <div>
            <Outlet />
        </div>
    );
}

export default MainPage;