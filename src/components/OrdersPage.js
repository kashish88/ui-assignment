import React, { useState } from "react";
import "./Orders.css";
import Header from "./Header";
import { useTheme } from "./ThemeContext";

const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const {isDarkMode} = useTheme();

    const orders = [
        { id: "#CMP801", user: "Natali Craig", image: "Female15.png", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", calender: isDarkMode?"CalendarBlank (1).png":"CalendarBlank.png", status: "In Progress" },
        { id: "#CMP802", user: "Kate Morrison", image: "Female09.png", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago",  calender: isDarkMode?"CalendarBlank (1).png":"CalendarBlank.png", status: "Complete" },
        { id: "#CMP803", user: "Drew Cano", image: "Male08.png", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago",  calender: isDarkMode?"CalendarBlank (1).png":"CalendarBlank.png", status: "Pending" },
        { id: "#CMP804", user: "Orlando Diggs", image: "Male06.png", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday",  calender: isDarkMode?"CalendarBlank (1).png":"CalendarBlank.png", status: "Approved" },
        { id: "#CMP805", user: "Andi Lane", image: "Female08.png", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023",  calender: isDarkMode?"CalendarBlank (1).png":"CalendarBlank.png", status: "Rejected" },
        { id: "#CMP801", user: "Natali Craig", image: "Female15.png", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now",  calender: isDarkMode?"CalendarBlank (1).png":"CalendarBlank.png", status: "In Progress" },
        { id: "#CMP802", user: "Kate Morrison", image: "Female09.png", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago",  calender: isDarkMode?"CalendarBlank (1).png":"CalendarBlank.png", status: "Complete" },
        { id: "#CMP803", user: "Drew Cano", image: "Male08.png", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago",  calender: isDarkMode?"CalendarBlank (1).png":"CalendarBlank.png", status: "Pending" },
        { id: "#CMP804", user: "Orlando Diggs", image: "Male06.png", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday",  calender: isDarkMode?"CalendarBlank (1).png":"CalendarBlank.png", status: "Approved" },
        { id: "#CMP805", user: "Andi Lane", image: "Female08.png", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023",  calender: isDarkMode?"CalendarBlank (1).png":"CalendarBlank.png", status: "Rejected" },
    ];


    const getStatusClasses = (status) => {
        const statusClasses = {
            "In Progress": "status-in-progress",
            "Complete": "status-complete",
            "Pending": "status-pending",
            "Approved": "status-approved",
            "Rejected": "status-rejected",
        };

        return statusClasses[status] || "";
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        console.log(`Navigated to page ${page}`);
    };

    return (
        <div className="main-content">
            <div className="header-width" style={{ width: '1228px' }}>
                <Header />
            </div>

            <div className="table-container">
                <h1 className="table-title">Order List</h1>
                <div className="table-controls-container" style={{backgroundColor:isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(247, 249, 251, 1)"}}>
                    <div className="icon-container">
                        <img src={isDarkMode?"/Add.png":"IconSet (12).png"} alt="Icon 1" className="control-icon" />
                        <img src={isDarkMode?"/FunnelSimple.png":"IconSet (13).png"} alt="Icon 2" className="control-icon" />
                        <img src={isDarkMode?"/ArrowsDownUp.png":"IconSet (14).png"} alt="Icon 3" className="control-icon" />
                    </div>
                    <div className="search-container"  style={{backgroundColor:isDarkMode?"rgba(28, 28, 28, 0.4)":"rgba(247, 249, 251, 1)"}}>
                        <div className="search-wrapper">
                            <img src={isDarkMode?"/Search (1).png":"/IconSet.png"} alt="Search" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="search-input"
                                aria-label="Search"
                                style={{backgroundColor:isDarkMode?"rgba(28, 28, 28, 0.4)":"rgba(247, 249, 251, 1)"}}
                            />
                        </div>
                    </div>

                </div>
                <table className="orders-table">
                    <thead >
                        <tr>
                            <th >
                                <input type="checkbox" />
                            </th>
                            <th style={{color:isDarkMode?"rgba(255, 255, 255, 0.4)":"rgba(28, 28, 28, 0.4)"}}>Order ID</th>
                            <th style={{color:isDarkMode?"rgba(255, 255, 255, 0.4)":"rgba(28, 28, 28, 0.4)"}}>User</th>
                            <th style={{color:isDarkMode?"rgba(255, 255, 255, 0.4)":"rgba(28, 28, 28, 0.4)"}}>Project</th>
                            <th style={{color:isDarkMode?"rgba(255, 255, 255, 0.4)":"rgba(28, 28, 28, 0.4)"}}>Address</th>
                            <th style={{color:isDarkMode?"rgba(255, 255, 255, 0.4)":"rgba(28, 28, 28, 0.4)"}}>Date</th>
                            <th style={{color:isDarkMode?"rgba(255, 255, 255, 0.4)":"rgba(28, 28, 28, 0.4)"}}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>{order.id}</td>
                                <td><div className="user-cell">
                                    <img src={order.image} alt={order.user} className="user-image" />
                                    {order.user}
                                </div></td>
                                <td>{order.project}</td>
                                <td>{order.address}</td>
                                <td><div className="user-cell">
                                    <img src={order.calender} alt={order.date} className="calender-image" />
                                    {order.date}
                                </div></td>
                                <td className={getStatusClasses(order.status)}  style={{color:isDarkMode?"rgba(255, 255, 255, 0.4)":"rgba(28, 28, 28, 0.4)"}}>
                                    <span className="status-dot"></span>
                                    {order.status}
                                </td>



                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination-container">
                    {[1, 2, 3, 4, 5].map((page) => (
                        <button
                            key={page}
                            className={`pagination-btn ${currentPage === page ? "active-page" : ""
                                }`}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        className="pagination-btn"
                        onClick={() =>
                            currentPage < 5 && handlePageChange(currentPage + 1)
                        }
                        disabled={currentPage === 5}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Orders;
