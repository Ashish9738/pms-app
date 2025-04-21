import Nav from "@/components/nav"
export default function Dashboard() {
    return (
        <>
            <Nav />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="mt-4">Welcome to your dashboard!</p>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-xl font-bold">Recent Activity</h2>
                <ul className="mt-2">
                    <li className="border-b py-2">Activity 1</li>
                    <li className="border-b py-2">Activity 2</li>
                    <li className="border-b py-2">Activity 3</li>
                </ul>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Load More</button>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-xl font-bold">Settings</h2>
                <ul className="mt-2">
                    <li className="border-b py-2">Profile Settings</li>
                    <li className="border-b py-2">Account Settings</li>
                    <li className="border-b py-2">Privacy Settings</li>
                </ul>   
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Update Settings</button>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-xl font-bold">Notifications</h2>
                <ul className="mt-2">
                    <li className="border-b py-2">Notification 1</li>
                    <li className="border-b py-2">Notification 2</li>
                    <li className="border-b py-2">Notification 3</li>
                </ul>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">View All</button>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-xl font-bold">Support</h2>
                <p className="mt-2">If you need help, please contact support.</p>           
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Contact Support</button>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-xl font-bold">Feedback</h2>
                <p className="mt-2">We value your feedback. Please let us know how we can improve.</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Give Feedback</button>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-xl font-bold">Logout</h2>
                <p className="mt-2">Are you sure you want to logout?</p>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-xl font-bold">Help</h2>
                <p className="mt-2">If you have any questions, please refer to our help center.</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Visit Help Center</button>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-xl font-bold">Terms of Service</h2>
                <p className="mt-2">Please read our terms of service carefully.</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Read Terms</button>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-xl font-bold">Privacy Policy</h2>
                <p className="mt-2">Please read our privacy policy carefully.</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Read Privacy Policy</button>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-xl font-bold">Contact Us</h2>
                <p className="mt-2">If you have any questions, please contact us.</p>   
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Contact Us</button>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-xl font-bold">About Us</h2>
                <p className="mt-2">Learn more about our company and mission.</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-xl font-bold">Follow Us</h2>
                <p className="mt-2">Stay connected with us on social media.</p>
                <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-blue-500">Facebook</a>      
                    <a href="#" className="text-blue-500">Twitter</a>
                    <a href="#" className="text-blue-500">Instagram</a>
                    <a href="#" className="text-blue-500">LinkedIn</a>
                </div>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-xl font-bold">Subscribe to our Newsletter</h2>
                <p className="mt-2">Get the latest updates and news.</p>
                <input type="email" placeholder="Enter your email" className="border p-2 rounded" />
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Subscribe</button>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-xl font-bold">Follow Us</h2>
                <p className="mt-2">Stay connected with us on social media.</p>
                <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-blue-500">Facebook</a>
                    <a href="#" className="text-blue-500">Twitter</a>
                    <a href="#" className="text-blue-500">Instagram</a>
                    <a href="#" className="text-blue-500">LinkedIn</a>
                </div>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-xl font-bold">Feedback</h2>
                <p className="mt-2">We value your feedback. Please let us know how we can improve.</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Give Feedback</button>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-xl font-bold">Terms of Service</h2>
                <p className="mt-2">Please read our terms of service carefully.</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Read Terms</button>
            </div>
        </>
    )
}