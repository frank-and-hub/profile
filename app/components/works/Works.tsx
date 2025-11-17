'use client';

import Image from 'next/image';
import { List, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { useAppSelector } from '@/app/lib/store/hooks';
import { WorkInterface } from '@/app/api/interfaces/work';

export default function Work() {

    const workData = useAppSelector((state) => state.works);
    const works: WorkInterface[] = workData && workData?.list.length > 1 ? workData?.list : [];

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
                    {works.map((work, i) => (
                        <Link href={work?.href} key={i} className="fadeInUp col-md-4 col-sm-6 my-2" data-wow-delay="0.5s">
                            <div className="work-thumb">
                                <div className="work-thumb-overlay">
                                    <h4 className="text-white">{work.title}</h4>
                                    {/* <List className='text-center'>
                                        {work.category.map((tech, index) => (
                                            <List.Item key={index}>
                                                {tech}{index < work.category.length - 1 ? ", " : ""}
                                            </List.Item>
                                        ))}
                                    </List> */}
                                </div>
                                <Image src={work?.image && work.image.length > 0 ? work.image : '/images/work-image1.jpg'} alt={work.title} width={400} height={300} className="img-responsive rounded-2xl" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}