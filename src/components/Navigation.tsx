import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 bg-gray-200 shadow-md">
            <Link to="/">Airport</Link>
            <Link to="/auth">Auth</Link>
        </nav>
    )
}
