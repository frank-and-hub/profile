'use client';

import Image from 'next/image';
import { Text, Title } from '@mantine/core';

interface WorkItem {
    id: number;
    title: string;
    category: string;
    image: string;
}

const works: WorkItem[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Full-stack Development",
        image: "/images/work-image1.jpg"
    },
    {
        id: 2,
        title: "API Gateway System",
        category: "Backend Development",
        image: "/images/work-image2.jpg"
    },
    {
        id: 3,
        title: "Cloud Infrastructure",
        category: "DevOps",
        image: "/images/work-image3.jpg"
    }
];

export default function Work() {

    return (
        <section id="work" className="parallax-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="fadeInUp section-title" data-wow-delay="0.2s">
                            <Title order={2}>Featured Projects</Title>
                            <Text>Showcasing full-stack development, API integration, and cloud solutions</Text>
                        </div>
                    </div>
                    {works.map((work) => (
                        <div key={work.id} className="fadeInUp col-md-4 col-sm-6 my-2" data-wow-delay="0.5s">
                            <div className="work-thumb">
                                <div className="work-thumb-overlay">
                                    <h4 className="text-white">{work.title}</h4>
                                    <h3>{work.category}</h3>
                                </div>
                                <Image src={work.image} alt={work.title} width={400} height={300} className="img-responsive rounded-2xl" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}