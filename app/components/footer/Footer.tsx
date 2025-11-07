import { Container, Group, Text, ActionIcon, Divider } from '@mantine/core';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:sourabbiswas000x@gmail.com', label: 'Email' }
];

export default function Footer() {
    return (
        <>
            <footer className="py-8 bg-gray-50 dark:bg-gray-900 mt-auto mx-w-2xl w-full mx-auto">
                <Container size="lg">
                    <Divider className="mb-8" />

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <Text size="sm" color="dimmed" className='text-center'>
                            © {new Date().getFullYear()} Sourab Biswas. All rights reserved.
                        </Text>

                        <Group gap="xs">
                            {socialLinks.map((link) => (
                                <ActionIcon
                                    key={link.label}
                                    variant="subtle"
                                    size="lg"
                                    radius="xl"
                                    component="a"
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className="hover:text-purple-500 transition-colors"
                                >
                                    <link.icon size={20} />
                                </ActionIcon>
                            ))}
                        </Group>
                    </div>
                </Container>
            </footer>
        </>
    );
}
