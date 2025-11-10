// pages/404.tsx
import { MantineProvider } from '@mantine/core';

export default function Custom404() {
    return (
        <MantineProvider>
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h1>404 - Page Not Found</h1>
            </div>
        </MantineProvider>
    );
}