"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Container, Group, Burger, Drawer, Button, List, Title, Space, Text, Center } from '@mantine/core';

export default function Header() {
    const [opened, setOpened] = useState(false);

    const links = [
        { label: 'Works', href: '#works' },
        { label: 'Experience', href: '#experience' },
        { label: 'Services', href: '#price' },
        // { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20" style={{
            backgroundImage: 'url("/images/home-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '20em',
        }}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
            <Container className="relative flex inline-flex items-center justify-between h-full px-4 md:px-6">
                <Link
                    href="#"
                    className="text-xl md:text-2xl font-bold hover:text-purple-300 transition-colors duration-200"
                >
                    <h1 className={`text-white hover:shadow-lg transition-shadow duration-200`}>
                        Frank Dev
                    </h1>
                </Link>

                <Group className="hidden md:flex gap-8">
                    {links.map((l) => (
                        <Link
                            key={l.label}
                            href={l.href}
                            className="text-sm font-medium text-white hover:text-purple-300 transition-colors duration-200 hover:shadow-lg"
                        >
                            {l.label}
                        </Link>
                    ))}
                    <Button
                        component="a"
                        href="#contact"
                        size="xs"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
                    >
                        Contact
                    </Button>
                </Group>

                <div className="md:hidden flex items-center gap-4">
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="sm"
                        className="text-white"
                    />
                </div>

                <Center className="">
                    <section className={`text-center sm:text-left max-w-3xl mx-auto sm:mx-0`} >
                        <Title order={1} size={`h1`} c={`white`} className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent`} >
                            Hi, I'm Frank - a software developer
                        </Title>
                        <Space h={`md`} />
                        <Text size={`xl`} c={`gray`} className={`text-lg sm:text-xl lg:text-2xl`} >
                            I build performant web apps and delightful UIs.
                        </Text>
                    </section>
                </Center>
            </Container>

            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                padding="xl"
                size="xs"
                position="right"
                className="bg-gray-900/95 backdrop-blur-md"
            >
                <List className="flex flex-col space-y-6 mt-8">
                    {links.map((l) => (
                        <List.Item key={l.label} className="list-none">
                            <Link
                                href={l.href}
                                onClick={() => setOpened(false)}
                                className="block text-lg font-medium text-gray-100 hover:text-purple-400 transition-colors duration-200"
                            >
                                {l.label}
                            </Link>
                        </List.Item>
                    ))}
                </List>
            </Drawer>
        </header>
    );
}
