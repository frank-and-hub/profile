import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkInterface } from "@/app/api/interfaces/work";

const staticWorks: WorkInterface[] = [
    {
        title: "EduTech Platform",
        category: [
            "Laravel",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "AWS (EC2, S3, RDS)",
            "Payment Gateway Integration"
        ],
        image: "",
        href: "https://scholarsbox.in/"
    }, {
        title: "Bank Management System",
        category: [
            "Laravel (PHP)",
            "MySQL",
            "PostgreSQL",
            "AWS",
            "Docker",
            "SMS Integration"
        ],
        image: "",
        href: "https://samraddh.com"
    }, {
        title: "Task Management App",
        category: [
            "React.js",
            "Next.js",
            "AWS (EC2, S3, Rekognition)",
            "Express.js",
            "MongoDB",
            "Social Login Integration"
        ],
        image: "",
        href: "https://wincy.com"
    }, {
        title: "E-commerce Website",
        category: [
            "HTML",
            "CSS",
            "Bootstrap",
            "JavaScript",
            "jQuery",
            "Core PHP",
            "MySQL",
            "Razorpay Integration"
        ],
        image: "",
        href: "https://www.artitudehome.com/"
    }, {
        title: "SEO Content Management System",
        category: [
            "Next.js",
            "MongoDB",
            "Node.js",
            "Express.js",
            "React.js (Admin Panel)",
            "Social Login Integration"
        ],
        image: "",
        href: "https://parkscape.app/"
    }, {
        title: "Real Estate Listing Platform",
        category: [
            "Next.js",
            "MongoDB",
            "Node.js",
            "Express.js",
            "AWS S3",
            "PayFast Integration",
            "Social Login Integration",
            "WhatsApp Messaging Integration"
        ],
        image: "",
        href: "https://pocketproperty.app/"
    }, {
        title: "E-commerce Website",
        category: [
            "HTML",
            "CSS",
            "JavaScript",
            "Core PHP",
            "PostgreSQL",
            "Razorpay Integration"
        ],
        image: "",
        href: "https://www.i-cakes.co.uk/"
    }, {
        title: "Real Estate App",
        category: [
            "Laravel",
            "MongoDB",
            "AWS S3",
            "Stripe",
            "Firebase Integration",
            "API Integration",
            "Social Login Integration"
        ],
        image: "",
        href: "https://homee.app/"
    }, {
        title: "Fitness Tracking App",
        category: [
            "Next.js",
            "MongoDB",
            "Node.js",
            "Express.js",
            "API Integration",
            "In-App Purchases",
            "Social Login Integration"
        ],
        image: "",
        href: "https://fitpro360x.com/"
    }, {
        title: "Dating Application",
        category: [
            "Next.js",
            "MongoDB",
            "Node.js",
            "Express.js",
            "GraphQL Services",
            "Agora SDK",
            "Webhooks",
            "In-App Purchases",
            "Social Login Integration"
        ],
        image: "",
        href: "https://chatmeup.app/"
    },
];

const workSlice = createSlice({
    name: "works",
    initialState: {
        list: [...staticWorks] as WorkInterface[],
        loading: false,
        error: null as string | null,
    },
    reducers: {
        addwork: (state, action: PayloadAction<WorkInterface>) => {
            state.list.push(action.payload);
        },
        removework: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter((item) => item.href !== action.payload);
        },
    },
    extraReducers: (builder) => { },
});

export const { addwork, removework } = workSlice.actions;
export default workSlice.reducer;
