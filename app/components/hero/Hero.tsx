import Link from 'next/link';
import '../../styles/animations.css';
import { Text, Title } from '@mantine/core';

export default function Hero() {

    return (
        <section id="home" className="parallax-section" style={{
            backgroundImage: "url('/images/home-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            width: "100%",
            alignContent: 'center'
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-5 col-md-7 col-sm-12">
                        <div className="home-thumb">
                            <Title order={1} className="fadeInUp text-white" data-wow-delay="0.4s">
                                Hello, I am Sourab
                            </Title>
                            <Text className="fadeInUp text-white" data-wow-delay="0.5s">
                                Full-stack developer focused on building scalable web applications
                                with expertise in frontend, backend, and cloud technologies.
                            </Text>
                            <Link
                                href="#contact"
                                className="fadeInUp smoothScroll btn btn-default section-btn shadow rounded-0 py-2 px-4"
                                data-wow-delay="1s"
                            >
                                Lets Connect
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}