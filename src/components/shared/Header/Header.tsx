import Link from 'next/link';
import {cookies} from 'next/headers'

export const Header = () => {

    const cookiesStore = cookies()
    const token = cookiesStore.get('accesToken')?.value

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

                {token ? (<p>Hola</p>) : (<Link href="/login">Login</Link>)}
            </nav>
        </header>
    )
}
