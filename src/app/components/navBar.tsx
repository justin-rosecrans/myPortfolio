import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className='bg-slate-600'>
        <h1 className='text-3xl text-white'>My Website</h1>
        <Link href="/">Home</Link>
        </nav>
    )
    }