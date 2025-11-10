'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Text, Title } from '@mantine/core';
import SocialLinks from '../social-links/SocialLinks';

export default function About() {

    return (
        <section id="about" className="parallax-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="about-image-thumb mx-auto w-100">
                            <Image
                                src="/images/profile-image.jpg"
                                width={400}
                                height={400}
                                alt="Profile"
                                className="fadeInUp img-responsive rounded-xl"
                                data-wow-delay="0.2s"
                            />
                            <SocialLinks />
                        </div>
                    </div>

                    <div className="col-md-8 col-sm-12">
                        <div className="about-thumb">
                            <div className="section-title" data-wow-delay="0.6s">
                                <Title order={2}>a little more about me</Title>
                            </div>
                            <div className="fadeInUp" data-wow-delay="0.8s">
                                <Text>
                                    As a versatile full-stack developer, I bring extensive expertise in both frontend and
                                    backend technologies. My focus is on creating scalable, efficient web applications
                                    that deliver exceptional user experiences while maintaining robust server-side
                                    architecture.
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}