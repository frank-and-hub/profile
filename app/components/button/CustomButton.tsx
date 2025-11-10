import React from 'react'
import { Button } from '@mantine/core';

interface CustomButton {
    className: string | null;
    label: string;
    pre: <T>(props: T) => React.ElementType;
}

export default function CustomButton({ className, label, ...pre }: CustomButton) {
    return (
        <>
            <Button className={`fadeInUp smoothScroll btn btn-default section-btn ${className ?? ''}`} {...pre} size="md">
                {label}
            </Button>
        </>
    )
}
