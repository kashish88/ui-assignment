import React from "react";
import "./Orders.css";
import Header from "./Header";

const Orders = () => {
    const orders = [
        { id: "#CMP801", user: "Natali Craig", image: "Female15.png", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", calender: "CalendarBlank.png", status: "In Progress" },
        { id: "#CMP802", user: "Kate Morrison", image: "Female09.png", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", calender: "CalendarBlank.png", status: "Complete" },
        { id: "#CMP803", user: "Drew Cano", image: "Male08.png", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", calender: "CalendarBlank.png", status: "Pending" },
        { id: "#CMP804", user: "Orlando Diggs", image: "Male06.png", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", calender: "CalendarBlank.png", status: "Approved" },
        { id: "#CMP805", user: "Andi Lane", image: "Female08.png", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", calender: "CalendarBlank.png", status: "Rejected" },
        { id: "#CMP801", user: "Natali Craig", image: "Female15.png", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", calender: "CalendarBlank.png", status: "In Progress" },
        { id: "#CMP802", user: "Kate Morrison", image: "Female09.png", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", calender: "CalendarBlank.png", status: "Complete" },
        { id: "#CMP803", user: "Drew Cano", image: "Male08.png", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", calender: "CalendarBlank.png", status: "Pending" },
        { id: "#CMP804", user: "Orlando Diggs", image: "Male06.png", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", calender: "CalendarBlank.png", status: "Approved" },
        { id: "#CMP805", user: "Andi Lane", image: "Female08.png", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", calender: "CalendarBlank.png", status: "Rejected" },
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
    


    return (
        <div className="main-content">
            <Header />
            <div className="table-container">
                <h1 className="table-title">Order List</h1>
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" />
                            </th>
                            <th>Order ID</th>
                            <th>User</th>
                            <th>Project</th>
                            <th>Address</th>
                            <th>Date</th>
                            <th>Status</th>
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
                                <td className={getStatusClasses(order.status)}>
                                    <span className="status-dot"></span>
                                    {order.status}
                                </td>



                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
