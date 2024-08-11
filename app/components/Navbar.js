'use client';

import Link from 'next/link';
import { useSession, signOut, signIn } from 'next-auth/react';

export default function Navbar() {
const { data: session } = useSession();

return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <Link className="navbar-brand" href="#">Root Ranger</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" href="#">About</Link>
        </li>
        <li className="nav-item">
            {session ? (
            <Link className="nav-link" href="/" onClick={() => signOut({ callbackUrl: '/' })}>
                Sign Out
            </Link>
            ) : (
            <Link className="nav-link" href="/signin" onClick={() => signIn()}>
                Sign In
            </Link>
            )}
        </li>
        </ul>
    </div>
    </div>
</nav>
);
}
