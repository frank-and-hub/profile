import { Container, Text, Divider } from '@mantine/core';
import SocialLinks from '../social-links/SocialLinks';

export default function Footer() {
    return (
        <>
            <Divider className="pt-5 parallax-section" />
            <footer className="py-8 mt-auto mx-w-2xl w-full mx-auto bg">
                <Container size="lg">
                    <Divider className="mb-8 parallax-section" />
                    <div className="row flex flex-col md:flex-row justify-between text-center gap-4 fadeInUp">
                        <Text size="sm" color="dimmed" className='text-white col-12 mb-0'>
                            © {new Date().getFullYear()} Frank and Hub | All rights reserved.
                        </Text>
                        <div className='col-8 col-sm-12 mx-auto'>
                            <SocialLinks color={false} />
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    );
}
