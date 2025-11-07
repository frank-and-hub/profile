import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const socialLinks = [
    {
        icon: FaFacebook,
        href: 'https://facebook.com/your-profile',
        label: 'Facebook',
        className: 'fa fa-facebook'
    },
    {
        icon: FaTwitter,
        href: 'https://twitter.com/your-handle',
        label: 'Twitter',
        className: 'fa fa-twitter'
    },
    {
        icon: FaInstagram,
        href: 'https://instagram.com/your-profile',
        label: 'Instagram',
        className: 'fa fa-instagram'
    },
    {
        icon: FaGithub,
        href: 'https://behance.net/your-profile',
        label: 'Behance',
        className: 'fa fa-behance'
    }, {
        icon: FaLinkedin,
        href: 'https://linkedin.com/in/your-profile',
        label: 'LinkedIn',
        className: 'fa fa-linkedin'
    }
];

type SocialLinksProps = {
    color?: boolean;
};

export default function SocialLinks({ color = true }: SocialLinksProps) {
    return (
        <>
            <div className="social-icon row py-3 justify-around mb-3">
                {socialLinks.map((link) => (
                    <div key={link.label} className='p-0'>
                        <Link
                            href={link.href}
                            className={`${link.className} ${color ? 'color' : 'text-white'} text-2xl`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <link.icon />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
