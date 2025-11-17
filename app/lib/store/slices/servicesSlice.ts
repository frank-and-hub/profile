import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServiceInterface } from "@/app/api/interfaces/service";
import {
    FaLaptopCode,
    FaPlug,
    FaDatabase,
    FaCloud,
    FaGlobe,
    FaCreditCard,
} from "react-icons/fa";

const staticService: ServiceInterface[] = [
    {
        title: "Full-Stack Development",
        icon: FaLaptopCode,
        category: [
            "Laravel / PHP",
            "Node.js / Express.js",
            "Next.js / React.js"
        ]
    },
    {
        title: "API Development",
        icon: FaPlug,
        category: [
            "REST APIs",
            "3rd-party Integrations",
            "Real-time Features"
        ]
    },
    {
        title: "Database Architecture",
        icon: FaDatabase,
        category: [
            "MySQL",
            "PostgreSQL",
            "MongoDB"
        ]
    },
    {
        title: "Cloud & DevOps",
        icon: FaCloud,
        category: [
            "AWS EC2 / S3 / RDS",
            "Docker Setup",
            "Deployment & Monitoring"
        ]
    },
    {
        title: "Web Application Development",
        icon: FaGlobe,
        category: [
            "Admin Dashboards",
            "E-commerce",
            "Real-Estate & Fitness Apps"
        ]
    },
    {
        title: "Payment Systems",
        icon: FaCreditCard,
        category: [
            "Razorpay",
            "Stripe",
            "In-App Purchases"
        ]
    }
];

const servicesSlice = createSlice({
    name: "Service",
    initialState: {
        list: [...staticService] as ServiceInterface[],
        loading: false,
        error: null as string | null,
    },
    reducers: {
        addservice: (state, action: PayloadAction<ServiceInterface>) => {
            state.list.push(action.payload);
        },
        removeservice: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter((item) => item.title !== action.payload);
        },
    },
    extraReducers: (builder) => { },
});

export const { addservice, removeservice } = servicesSlice.actions;
export default servicesSlice.reducer;
