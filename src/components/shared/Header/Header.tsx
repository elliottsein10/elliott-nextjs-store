import Link from 'next/link';

export const Header = () => {
    return (
        <header style={{ textAlign: 'center' }}>
            <nav>
                <ul style={{ display: 'inline-block', padding: 0 }}>
                    <Link href="/">
                        <li style={{ display: 'inline-block', margin: '0 10px' }}>Home</li>
                    </Link>
                    <Link href="/store">
                        <li style={{ display: 'inline-block', margin: '0 10px' }}>Store</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}
