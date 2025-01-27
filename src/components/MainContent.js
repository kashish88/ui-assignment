import React from "react";
import "./MainContent.css";
import Header from "./Header";
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";
import StackedChart from './StackedChart';
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";



const revenue_data = [
    { name: "Jan", current_week_revenue: 5, previous_week_revenue: 10 },
    { name: "Feb", current_week_revenue: 15, previous_week_revenue: 8 },
    { name: "Mar", current_week_revenue: 10, previous_week_revenue: 15 },
    { name: "Apr", current_week_revenue: 18, previous_week_revenue: 12 },
    { name: "May", current_week_revenue: 14, previous_week_revenue: 20 },
    { name: "Jun", current_week_revenue: 20, previous_week_revenue: 18 },
];





const revenueData = [
    { lat: 40.7128, lng: -74.006, revenue: 72, location: "New York" },
    { lat: 37.7749, lng: -122.4194, revenue: 39, location: "San Francisco" },
    { lat: -33.8688, lng: 151.2093, revenue: 25, location: "Sydney" },
    { lat: 1.3521, lng: 103.8198, revenue: 61, location: "Singapore" },
];

const topSellingProducts = [
    { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,518.18" },
    { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
    { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
    { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
    { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

const totalSalesData = [
    { name: "Direct", value: 300.56 },
    { name: "Affiliate", value: 135.18 },
    { name: "Sponsored", value: 154.02 },
    { name: "E-mail", value: 48.96 },
];

const totalSalesColors = ["#000000", "#BAEDBD", "#95A4FC", "#B1E3FF"];


const totalSales = 350.18;

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const percent = ((payload[0].value / totalSales) * 100).toFixed(2);
        return (
            <div style={{
                background: "black", color: 'white', border: "1px solid #ccc", padding: "4px 8px 4px 8px", borderRadius: '8px', width: "51px",
                height: "46px"
            }}>
                <p>{` ${percent}%`}</p>
            </div>
        );
    }
    return null;
};
const CustomLegend = ({ payload }) => {
    return (
        <ul
            style={{
                listStyleType: "none",
                margin: "0",
                padding: "0",
                paddingLeft: "50px",
            }}
        >
            {payload.map((entry, index) => {
                const value = Number(entry.payload.value);
                return (
                    <li
                        key={`item-${index}`}
                        style={{
                            fontSize: "14px",
                            marginBottom: "8px",
                            display: "inline-flex",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "flex-start",
                        }}
                    >
                        <span
                            style={{
                                display: "inline-block",
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                backgroundColor: totalSalesColors[index],
                                marginRight: "8px",
                            }}
                        ></span>
                        <span>
                            {entry.payload.name}:
                        </span>
                        <span style={{ paddingLeft: "8px" }}> ${value.toFixed(2)}</span>
                    </li>
                );
            })}
        </ul>
    );
};

const MainContent = () => {
const {isDarkMode} = useTheme();
    return (
        <div className="main-content">
            <Header />
            <h1 className="table-title">eCommerce</h1>
            <div className="dashboard-cards">
                <div className="card card-customers">
                    Customers
                    <div className="card-details">
                        <span>3,781</span>
                        <span className="percentage positive">
                            +11.01%
                            <img src="IconPositiveSet.png" alt="Up Arrow" className="arrow-icon" />
                        </span>
                    </div>
                </div>
                <Link to="/orders" className="card-link">
                <div className="card" 
                style={{
                    backgroundColor:isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(247, 249, 251, 1)",
                    border:isDarkMode?"1px solid rgba(255, 255, 255, 0.05)":"1px solid #eee",
                    color:isDarkMode?"#fff":"#333"
                    }}>
                    Orders
                    <div className="card-details">
                        <span>1,219</span>
                        <span className="percentage negative">-0.33%  <img src={isDarkMode?"/ArrowFall.png":"IconNegativeSet.png"} alt="Up Arrow" className="arrow-icon" /></span>
                    </div>
                </div>
                </Link>
                <div className="card"
                style={{
                    backgroundColor:isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(247, 249, 251, 1)",
                    border:isDarkMode?"1px solid rgba(255, 255, 255, 0.05)":"1px solid #eee",
                    color:isDarkMode?"#fff":"#333"
                    }}
                >
                    Revenue
                    <div className="card-details">
                        <span>$695</span>
                        <span className="percentage positive">+15.03%  <img src={isDarkMode?"/ArrowRise.png":"IconPositiveSet.png"} alt="Up Arrow" className="arrow-icon" /></span>
                    </div>
                </div>
                <div className="card card-growth">
                    Growth
                    <div className="card-details">
                        <span>30.1%</span>
                        <span className="percentage positive">+6.08%  <img src="IconPositiveSet.png" alt="Up Arrow" className="arrow-icon" /></span>
                    </div>
                </div>

                <div className="projections-chart"  style={{backgroundColor:isDarkMode?"rgba(255, 255, 255, 0.05)":"#f9fafb"}}>
                    <div className="projections-title"
                   
                    >
                        Projections vs Actuals
                    </div>
                    <StackedChart />



                </div>
            </div>
            <div className="charts">
                <div className="chart revenue-chart"  style={{backgroundColor:isDarkMode?"rgba(255, 255, 255, 0.05)":"#f9fafb"}}>
                    <div className="projections-title">
                        Revenue
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <LineChart width={530} height={250} data={revenue_data} >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" />
                            <YAxis
                                ticks={[0,10, 20, 30]}
                                domain={[0, 30]}
                                axisLine={false}
                            />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="basis"
                                dataKey="current_week_revenue"
                                stroke={isDarkMode?"#4bc0c0":"rgba(28, 28, 28, 1)"}
                                strokeDasharray="5 5"
                                activeDot={{ r: 8 }}
                            />
                            <Line
                                type="basis"
                                dataKey="previous_week_revenue"
                                stroke="#4bc0c0"
                            />
                        </LineChart>
                    </div>

                </div>
                <div className="chart location-chart" style={{backgroundColor:isDarkMode?"rgba(255, 255, 255, 0.05)":"#f9fafb"}}>
                    <div className="projections-title">
                        Revenue by Location
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <ComposableMap projection="geoMercator" width={800} height={500}>
                            <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json">
                                {({ geographies }) => (
                                    geographies.map((geo) => (
                                        <Geography key={geo.rsmKey} geography={geo} fill="#a4c8e3" stroke="#FFFFFF" />
                                    ))
                                )}
                            </Geographies>

                            {revenueData.map((data, index) => (
                                <Marker key={index} coordinates={[data.lng, data.lat]}>
                                    <circle r={15} fill={isDarkMode?"red":"rgba(28, 28, 28, 1)"} />

                                </Marker>
                            ))}
                        </ComposableMap>
                    </div>
                    <ul className="location-revenue-list" >
                        {revenueData.map((data, index) => {
                            const maxRevenue = Math.max(...revenueData.map(item => item.revenue)); 
                            const progress = Math.min((data.revenue / maxRevenue) * 100, 100);

                            return (
                                <li key={index} className="location-revenue-item">
                                    <div className="location-revenue-text">
                                        <span>{data.location}</span>
                                        <span>{data.revenue.toLocaleString()} K</span>
                                    </div>
                                    <div className="progress-bar-container">
                                        <div
                                            className="progress-bar"
                                            style={{ width: `${progress}%`, backgroundColor: "rgba(168, 197, 218, 1)" }}
                                        />
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className="tables" >
                <div className="table" style={{backgroundColor:isDarkMode?"rgba(255, 255, 255, 0.05)":"#f9fafb"}}>
                    <div className="projections-title">
                        Top Selling Products
                    </div>
                    <div className="table-header" 
                    style={{
                        color:isDarkMode?"rgba(255, 255, 255, 0.4)":"rgba(28, 28, 28, 0.4)",
                        borderBottom:isDarkMode?"1px solid rgba(255, 255, 255, 0.4) ":"1px solid rgba(28, 28, 28, 0.4)"
                        }}>
                        <div>Name</div>
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Amount</div>
                    </div>

                    {topSellingProducts.map((product, index) => (
                        <div key={index} className="table-row">
                            <div>{product.name}</div>
                            <div>{product.price}</div>
                            <div>{product.quantity}</div>
                            <div>{product.amount}</div>
                        </div>
                    ))}
                </div>
                <div className="table total-sales-chart" style={{backgroundColor:isDarkMode?"rgba(255, 255, 255, 0.05)":"#f9fafb"}}>
                    <div className="total-sales-title">
                        Total Sales
                    </div>

                    <PieChart width={300} height={300}>
                        <Pie
                            data={totalSalesData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={85}
                            innerRadius={55}
                            cornerRadius={20}
                            paddingAngle={5}
                            fill="#8884d8"
                        >
                            {totalSalesData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={totalSalesColors[index]} />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend content={<CustomLegend />} />
                    </PieChart>

                </div>
            </div>
        </div>
    );
};

export default MainContent;
