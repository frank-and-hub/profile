'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Burger, Text, Group, Box, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconHome2,
    IconApps,
    IconUser,
    IconBriefcase,
    IconCoin,
    IconMail,
} from '@tabler/icons-react';

const Navlists = [
    { label: 'Home', href: '#home', icon: IconHome2 },
    { label: 'Services', href: '#service', icon: IconApps },
    { label: 'About', href: '#about', icon: IconUser },
    { label: 'Work', href: '#work', icon: IconBriefcase },
    { label: 'Pricing', href: '#price', icon: IconCoin },
    { label: 'Contact', href: '#contact', icon: IconMail }
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [opened, { toggle }] = useDisclosure(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (opened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [opened]);

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} >
            <div className="container">
                <Box component="nav" className="site-nav" >
                    <Group justify="space-between" align="center" style={{ width: '100%' }}>
                        <Link href="/" className="logo">
                            <Group gap="xs">
                                <Text size="xl" fw={700}></Text>
                            </Group>
                        </Link>

                        <Burger
                            opened={opened}
                            onClick={toggle}
                            className={`menu-toggle ${opened ? 'active' : ''}`}
                            aria-label="Toggle navigation"
                            hiddenFrom="sm"
                            size="md"
                        />

                        <Group
                            className={`nav-links ${opened ? 'active' : ''}`}
                            display={{ base: 'none', sm: 'flex' }}
                            gap="lg"
                        >
                            {Navlists.map((list, i) => (
                                <Button key={i} variant="subtle" component={Link} href={list?.href} className='mx-2' >{list?.label.toUpperCase()}</Button>
                            ))}
                        </Group>

                        <Stack
                            className="mobile-nav"
                            style={{
                                display: opened ? 'block' : 'none',
                                position: 'fixed',
                                top: '70px',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'var(--light-color)',
                                padding: '1rem',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                zIndex: 1000,
                            }}
                        >
                            {Navlists.map((list, i) => (
                                <>
                                    <Button
                                        key={i}
                                        fullWidth
                                        variant="subtle"
                                        component={Link}
                                        href={list?.href}
                                        onClick={() => toggle()}
                                    >
                                        <b>
                                            {list?.label.toUpperCase()}
                                        </b>
                                    </Button>
                                    <br />
                                </>
                            ))}
                        </Stack>
                    </Group>
                </Box>
            </div>
        </header>
    );
}