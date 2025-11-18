import { PriceInterface } from "@/app/api/interfaces/price";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const staticPrices: PriceInterface[] = [
    {
        name: "Basic Website",
        price: 149,
        description: "Simple, responsive website for individuals or small businesses.",
        features: [
            "Up to 3 pages",
            "Responsive UI design",
            "HTML / CSS / JavaScript / Bootstrap",
            "Contact form integration",
            "Deployment support",
            "5 days support",
            "—",
            "—"
        ],
        highlight: false,
        timeline: "1-2 weeks"
    },
    {
        name: "Starter Web App",
        price: 399,
        description: "Interactive web app with login, database, and basic backend.",
        features: [
            "React.js / Next.js frontend",
            "Simple backend (Laravel / Node.js)",
            "Database setup (MySQL / MongoDB)",
            "User authentication",
            "Basic admin panel",
            "API integrations (Email, SMS)",
            "Deployment on hosting/AWS",
            "1-week support"
        ],
        highlight: false,
        timeline: "3-4 weeks"
    },
    {
        name: "Business Web",
        price: 799,
        description: "Advanced business app with full frontend, backend, and integrations.",
        features: [
            "Full frontend + backend development",
            "User authentication",
            "Advanced admin dashboard",
            "Payment gateway integration",
            "Social login integration",
            "Cloud storage (AWS S3)",
            "Performance optimization",
            "2-weeks premium support"
        ],
        highlight: true,
        timeline: "5-7 weeks"
    },
    {
        name: "Full-Stack Platform",
        price: 1299,
        description: "Complex full-stack platform with real-time features and cloud deployment.",
        features: [
            "End-to-end architecture design",
            "Real-time chat & notifications",
            "Agora audio/video calling",
            "In-app purchases / Subscriptions",
            "GraphQL / REST APIs (Next.js / Node.js / Laravel)",
            "Multi-tenant systems",
            "Cloud deployment (AWS / Docker)",
            "1-month dedicated support"
        ],
        highlight: false,
        timeline: "8-12 weeks"
    }
];

const priceSlice = createSlice({
    name: "prices",
    initialState: {
        list: [...staticPrices] as PriceInterface[],
        loading: false,
        error: null as string | null,
    },
    reducers: {
        addPrice: (state, action: PayloadAction<PriceInterface>) => {
            state.list.push(action.payload);
        },
        removePrice: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter((item) => item.name !== action.payload);
        },
    },
    extraReducers: (builder) => { },
});

export const { addPrice, removePrice } = priceSlice.actions;
export default priceSlice.reducer;