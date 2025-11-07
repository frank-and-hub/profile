import { Text } from '@mantine/core'
import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <div>
                <h2>Not Found</h2>
                <Text>Could not find requested resource</Text>
                <Link href="/">Return Home</Link>
            </div>
        </>
    )
}