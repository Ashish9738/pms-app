export default function Nav() {
    return (
        <>
            <nav className="flex items-center justify-between bg-white p-4 shadow-md">
                <div className="text-lg font-bold">My App</div>
                <div className="space-x-4">
                    <a href="/dashboard" className="text-gray-700 hover:text-blue-500">Dashboard</a>
                    <a href="/settings" className="text-gray-700 hover:text-blue-500">Settings</a>
                    <a href="/logout" className="text-gray-700 hover:text-blue-500">Logout</a>
                </div>
            </nav>
        </>
    )
}