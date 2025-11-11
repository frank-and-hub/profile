import { PriceInterface } from "@/app/api/interfaces/price";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const staticPrices: PriceInterface[] = [
    {
        name: 'Starter Website',
        price: 499,
        description: 'Perfect for individuals, freelancers, or small businesses who need a fast, modern, and professional online presence.',
        features: [
            'Responsive 5-page website',
            'Modern UI/UX design',
            'Contact & Inquiry Form',
            'Basic SEO setup',
            'Deployment on your custom domain',
            'Performance optimization',
            'Google Analytics integration',
            '1-month maintenance & support',
        ],
        highlight: false,
    },
    {
        name: 'Professional Web App',
        price: 1499,
        description: 'Ideal for growing businesses that need a data-driven web application with backend integration and advanced features.',
        features: [
            'Custom React.js / Next.js frontend',
            'Node.js or Laravel backend',
            'Database integration',
            'User authentication & authorization',
            'Admin dashboard & analytics',
            'Payment gateway integration',
            'Performance optimization & caching',
            '1-months priority support',
        ],
        highlight: true,
    },
    {
        name: 'Full-Stack Application',
        price: 1999,
        description: 'Best suited for startups and enterprises building scalable SaaS platforms or complex multi-tenant systems.',
        features: [
            'Frontend + Backend architecture',
            'Next.js + Nest.js / Laravel API setup',
            'User authentication & roles',
            'Admin dashboard & management panel',
            'Subscription & billing system',
            'Multi-tenant / team workspace support',
            'Deployment on AWS / Vercel',
            '1-months dedicated support',
        ],
        highlight: false,
    },
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