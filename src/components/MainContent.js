import React from "react";
import "./MainContent.css";

import Header from "./Header";
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { scaleLinear } from "d3-scale";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip as LineTooltip,
    Legend as LineLegend,
    ResponsiveContainer,
} from "recharts";
import StackedChart from './StackedChart';

const data = [
    { name: "Jan", Projections: 28, Actuals: 25 },
    { name: "Feb", Projections: 30, Actuals: 27 },
    { name: "Mar", Projections: 32, Actuals: 29 },
    { name: "Apr", Projections: 35, Actuals: 33 },
    { name: "May", Projections: 38, Actuals: 35 },
    { name: "Jun", Projections: 40, Actuals: 37 },
];

const revenue_data = [
    { name: "Jan", current_week_revenue: 5, previous_week_revenue: 3 },
    { name: "Feb", current_week_revenue: 10, previous_week_revenue: 7 },
    { name: "Mar", current_week_revenue: 15, previous_week_revenue: 12 },
    { name: "Apr", current_week_revenue: 20, previous_week_revenue: 18 },
    { name: "May", current_week_revenue: 25, previous_week_revenue: 22 },
    { name: "Jun", current_week_revenue: 30, previous_week_revenue: 28 },
];


const revenueData = [
    { lat: 51.505, lng: -0.09, revenue: 5000, location: "London" },
    { lat: 40.7128, lng: -74.006, revenue: 8000, location: "New York" },
    { lat: 34.0522, lng: -118.2437, revenue: 3000, location: "Los Angeles" },
    { lat: 48.8566, lng: 2.3522, revenue: 7000, location: "Paris" },
];
const topSellingProducts = [
    { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,518.18" },
    { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
    { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
    { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
    { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];
const totalSalesData = [
    { name: "Direct", value: 38.6, revenue: 300.56 },
    { name: "Affiliate", value: 30.56, revenue: 135.18 },
    { name: "Sponsored", value: 15.42, revenue: 154.02 },
    { name: "Email", value: 14.62, revenue: 48.96 }
];


const totalSalesColors = ["#007bff", "#28a745", "#ffc107", "#17a2b8"];

const revenueScale = scaleLinear().domain([0, 75000]).range([5, 15]);

const CustomLegend = ({ payload }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "10px" }}>
            {payload.map((entry, index) => (
                <div key={`legend-item-${index}`} style={{ display: "flex", alignItems: "center", margin: "0 10px" }}>
                    <div
                        style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: entry.color,
                            marginRight: 6,
                        }}
                    ></div>
                    <span>{entry.value}</span>
                </div>
            ))}
        </div>
    );
};

const MainContent = () => {

    const revenueScale = scaleLinear().domain([0, 75000]).range([5, 15]);

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
                <div className="card card-orders">
                    Orders
                    <div className="card-details">
                        <span>1,219</span>
                        <span className="percentage negative">-0.33%  <img src="IconNegativeSet.png" alt="Up Arrow" className="arrow-icon" /></span>
                    </div>
                </div>
                <div className="card card-revenue">
                    Revenue
                    <div className="card-details">
                        <span>$695</span>
                        <span className="percentage positive">+15.03%  <img src="IconPositiveSet.png" alt="Up Arrow" className="arrow-icon" /></span>
                    </div>
                </div>
                <div className="card card-growth">
                    Growth
                    <div className="card-details">
                        <span>30.1%</span>
                        <span className="percentage positive">+6.08%  <img src="IconPositiveSet.png" alt="Up Arrow" className="arrow-icon" /></span>
                    </div>
                </div>

                <div className="projections-chart">
                    <div className="projections-title">
                        Projections vs Actuals
                    </div>
                    <StackedChart />



                </div>
            </div>
            <div className="charts">
                <div className="chart revenue-chart">
                    <div className="projections-title">
                        Revenue
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <LineChart width={530} height={250} data={revenue_data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis
                                ticks={[10, 20, 30]}
                                domain={[0, 30]}
                            />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="current_week_revenue"
                                stroke="#4bc0c0"
                                activeDot={{ r: 8 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="previous_week_revenue"
                                stroke="#c04b4b"
                                strokeDasharray="5 5"
                            />
                        </LineChart>
                    </div>

                </div>
                <div className="chart location-chart">
                    <div className="projections-title">
                        Revenue by Location
                    </div>
                    <div style={{ marginTop: '20px',width:'208px' }}>
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
                                    <circle r={6} fill="red" />

                                </Marker>
                            ))}
                        </ComposableMap>
                    </div>

                </div>
            </div>
            <div className="tables">
                <div className="table">
                    <div className="projections-title">
                        Top Selling Products
                    </div>
                    <div className="table-header">
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
                <div className="table total-sales-chart">
                <div className="projections-title">
                    Total Sales
                    </div>
                    <PieChart width={220} height={220}>
                        <Pie
                            data={totalSalesData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={85}
                            innerRadius={55}
                            cornerRadius={20}
                            paddingAngle={7}
                            fill="#8884d8"

                        >
                            {totalSalesData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={totalSalesColors[index]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend content={<CustomLegend />} />

                    </PieChart>

                </div>
            </div>
        </div>
    );
};

export default MainContent;
