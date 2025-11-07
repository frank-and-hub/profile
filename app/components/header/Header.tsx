'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <nav className="site-nav">
                    <div className="logo">
                        <Link href="/">KALAY</Link>
                    </div>
                    <button
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><Link href="#home">Home</Link></li>
                        <li><Link href="#service">Services</Link></li>
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="#work">Work</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}