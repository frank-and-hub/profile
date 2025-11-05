import Link from "next/link";
import React from "react";

type Work = { title: string; description: string; url?: string };

const works: Work[] = [
    { title: 'Portfolio site', description: 'Personal site built with Next.js', url: '#' },
    { title: 'E-commerce demo', description: 'Stripe + Next integration', url: '#' },
];

export default function Works() {
    return (
        <section id={`works`} className={`py-16 px-6 max-w-5xl mx-auto`} >
            < h2 className={`text-2xl font-semibold mb-6`} >Selected Works</h2>
            < div className={`grid gap-6 grid-cols-1 sm: grid-cols-2 lg: grid-cols-3`} >
                {
                    works.map((w) => (
                        <article key={w.title} className={`p-4 border rounded-md`} >
                            < h3 className={`text-lg font-medium mb-2`} >{w.title}</h3>
                            < p className={`text-slate-700`} >{w.description}</p>
                            {w.url && <div className={`mt-3`} >
                                <Link className={`text-sky-600 hover:underline`} href={w.url} >View</Link >
                            </div >}
                        </ article >
                    ))
                }
            </div >
        </section >
    );
}
