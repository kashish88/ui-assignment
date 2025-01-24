import React from "react";
import "./MainContent.css";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import Header from "./Header";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { scaleLinear } from "d3-scale";


const data = [
    { name: "Jan", Projections: 28, Actuals: 25 },
    { name: "Feb", Projections: 30, Actuals: 27 },
    { name: "Mar", Projections: 32, Actuals: 29 },
    { name: "Apr", Projections: 35, Actuals: 33 },
    { name: "May", Projections: 38, Actuals: 35 },
    { name: "Jun", Projections: 40, Actuals: 37 },
];

const revenueData = [
    { city: "New York", revenue: 72000, coordinates: [-74.006, 40.7128] },
    { city: "San Francisco", revenue: 39000, coordinates: [-122.4194, 37.7749] },
    { city: "Sydney", revenue: 25000, coordinates: [151.2093, -33.8688] },
    { city: "Singapore", revenue: 61000, coordinates: [103.8198, 1.3521] },
];

const topSellingProducts = [
    { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,518.18" },
    { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
    { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
    { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
    { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];
const MainContent = () => {
    
    const revenueScale = scaleLinear().domain([0, 75000]).range([5, 15]);

    return (
        <div className="main-content">
            <Header />
            <div className="dashboard-cards">
                <div className="card">Customers<br /><span>3,781</span></div>
                <div className="card">Orders<br /><span>1,219</span></div>
                <div className="card">Revenue<br /><span>$695</span></div>
                <div className="card">Growth<br /><span>30.1%</span></div>
                <div className="projections-chart">
                    <div className="projections-title">
                        Projections vs Actuals
                    </div>

                    <ResponsiveContainer width="100%" height={170}>
                        <BarChart
                            data={data}
                            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                            barGap={-30}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar
                                dataKey="Projections"
                                fill="#cce5ff"
                                radius={[10, 10, 0, 0]}
                                barSize={50}
                                stackId="a"
                            />
                            <Bar
                                dataKey="Actuals"
                                fill="#5dade2"
                                radius={[10, 10, 0, 0]}
                                barSize={50}
                                stackId="a"
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="charts">
                <div className="chart revenue-chart">Revenue</div>
                <div className="chart location-chart">
                    Revenue by Location
                    {/* <ComposableMap projection="geoMercator" projectionConfig={{ scale: 130 }}>
                        <Geographies geography="https://raw.githubusercontent.com/d3/d3-geo/master/test/data/world-110m.json">
                            {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography key={geo.rsmKey} geography={geo} fill="#D6D6DA" stroke="#FFFFFF" />
                                ))
                            }
                        </Geographies>
                        {revenueData.map((location) => (
                            <Marker key={location.city} coordinates={location.coordinates}>
                                <circle
                                    r={revenueScale(location.revenue)}
                                    fill="#FF5733"
                                    stroke="#000"
                                    strokeWidth={2}
                                />
                            </Marker>
                        ))}
                    </ComposableMap>
                    <div className="revenue-info">
                        {revenueData.map((location) => (
                            <div key={location.city} className="revenue-item">
                                <strong>{location.city}:</strong> ${location.revenue.toLocaleString()}
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
            <div className="tables">
                <div className="table">Top Selling Products
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
                <div className="table">Total Sales</div>
            </div>
        </div>
    );
};

export default MainContent;
