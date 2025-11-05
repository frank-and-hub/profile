"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Container, Group, Burger, Drawer, Button, List } from '@mantine/core';

export default function Header() {
    const [opened, setOpened] = useState(false);

    const links = [
        { label: 'Works', href: '#works' },
        { label: 'Experience', href: '#experience' },
        { label: 'Services', href: '#price' },
        // { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className="backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
            <Container className="flex items-center justify-between h-full">
                <Link href="#" className="text-2xl font-bold gradient-text">
                    Frank Dev
                </Link>

                <Group className="hidden md:flex">
                    {links.map((l) => (
                        <Link key={l.label} href={l.href} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                            {l.label}
                        </Link>
                    ))}
                </Group>

                <div className="md:hidden flex items-center gap-2">
                    <Button component="a" href="#contact" size="xs" className="hidden sm:inline-flex bg-gradient-to-r from-purple-600 to-blue-600 text-white">Contact</Button>
                    <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" />
                </div>
            </Container>

            <Drawer opened={opened} onClose={() => setOpened(false)} padding="md" size="xs">
                <List className="flex flex-col space-y-3" spacing="xs" size="sm">
                    {links.map((l) => (
                        <List.Item key={l.label}>
                            <Link href={l.href} onClick={() => setOpened(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                                {l.label}
                            </Link>
                        </List.Item>
                    ))}
                </List>
            </Drawer>
        </header>
    );
}
