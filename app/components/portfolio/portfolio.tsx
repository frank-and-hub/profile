import React from "react";

const portfolioItems = [
    {
        title: "Personal Blog Platform",
        description: "A full-featured blog platform with markdown support, comments, and user authentication.",
        image: "/portfolio/blog.png",
        url: "#",
        tags: ["Next.js", "TypeScript", "Prisma", "TailwindCSS"],
    },
    {
        title: "E-commerce Store",
        description: "Modern e-commerce store with Stripe payments, product search, and admin dashboard.",
        image: "/portfolio/store.png",
        url: "#",
        tags: ["React", "Stripe", "Redux", "Node.js"],
    },
    {
        title: "SaaS Dashboard",
        description: "Analytics dashboard for SaaS products with real-time charts and user management.",
        image: "/portfolio/saas.png",
        url: "#",
        tags: ["Next.js", "Chart.js", "MongoDB", "TailwindCSS"],
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Portfolio</h2>
                <p className="text-gray-600 dark:text-gray-300">Some of my favorite projects and case studies.</p>
            </div>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {portfolioItems.map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden card-hover flex flex-col">
                        {item.image && (
                            <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-700">
                                <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                            </div>
                        )}
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold mb-2 gradient-text">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{item.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {item.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a href={item.url} className="inline-flex items-center text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                                View Project
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
