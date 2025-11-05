import React from "react";
import { Badge } from '@mantine/core';
import Link from "next/link";

type Project = {
    id: string;
    title: string;
    description: string;
    image?: string;
    url?: string;
    tech: string[];
    year: string;
};

const projects: Project[] = [
    {
        id: 'p1',
        title: 'Portfolio Site',
        description: 'Modern personal portfolio showcasing projects and skills, built with Next.js and Tailwind CSS for optimal performance.',
        tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
        year: '2025',
        url: '#'
    },
    {
        id: 'p2',
        title: 'E-commerce Platform',
        description: 'Full-featured e-commerce solution with Stripe integration, cart management, and responsive product galleries.',
        tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
        year: '2024',
        url: '#'
    },
    {
        id: 'p3',
        title: 'Analytics Dashboard',
        description: 'Interactive admin dashboard featuring real-time data visualization, user management, and dark mode support.',
        tech: ['React', 'D3.js', 'Material UI', 'Redux'],
        year: '2024',
        url: '#'
    },
    {
        id: 'p4',
        title: 'Marketing Landing Page',
        description: 'High-converting landing page with animations, A/B testing integration, and optimized performance metrics.',
        tech: ['Next.js', 'Framer Motion', 'TailwindCSS', 'Analytics'],
        year: '2023',
        url: '#'
    }
];

export default function Experiance() {
    return (
        <section id={`experience`} className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto`} >
            <div className={`max-w-2xl mx-auto mb-16 text-center`} >
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 gradient-text`} >Featured Projects</h2>
                <p className={`text-gray-600 dark:text-gray-300`} >A selection of projects I've worked on that showcase my skills and experience.</p>
            </div>

            <div className={`grid gap-8 md:gap-12 grid-cols-1 lg:grid-cols-2`} >
                {projects.map((project) => (
                    <article
                        key={project.id}
                        className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700`}
                    >
                        <div className={`absolute top-4 right-4`} >
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100`} >
                                {project.year}
                            </span>
                        </div>

                        <h3 className={`text-xl font-bold mb-3 gradient-text`} >{project.title}</h3>
                        <p className={`text-gray-600 dark:text-gray-300 mb-4 line-clamp-2`} >
                            {project.description}
                        </p>

                        <div className={`mb-4 flex flex-wrap gap-2`} >
                            {project.tech.map((tech) => (
                                <Badge
                                    key={tech}
                                    size={`sm`}
                                    variant={`light`}
                                    className={`bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300`}
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        {project.url && (
                            <a
                                href={project.url}
                                className={`inline-flex items-center text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium transition-colors duration-200`}
                            >
                                View Project
                                <svg
                                    className={`w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200`}
                                    fill={`none`}
                                    stroke={`currentColor`}
                                    viewBox={`0 0 24 24`}
                                >
                                    <path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`2`} d={`M17 8l4 4m0 0l-4 4m4-4H3`} />
                                </svg>
                            </a >
                        )
                        }
                    </article >
                ))}
            </div >

            <div className={`mt-16 text-center`} >
                <Link
                    href={`https://github.com/frank-and-hub`}
                    target={`_blank`}
                    rel={`noopener noreferrer`}
                    className={`inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover: opacity-90 transition-all duration-200`}
                >
                    View More Projects
                    < svg className={`w-5 h-5 ml-2`} fill={`none`} stroke={`currentColor`} viewBox={`0 0 24 24`} >
                        <path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`2`} d={`M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14`} />
                    </ svg>
                </Link>
            </div >
        </section >
    );
}
