'use client';

import { useEffect, useState } from 'react';
import '@/public/css/animate.css';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="preloader">
            <div className="spinner">
                <span className="spinner-rotate"></span>
            </div>
        </div>
    );
}