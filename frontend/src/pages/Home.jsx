import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiSearch, FiPlusSquare, FiHeart, FiUser, FiLogOut } from 'react-icons/fi';

const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (!userData) {
            navigate('/');
            return;
        }
        setUser(JSON.parse(userData));
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 fixed top-0 w-full z-50">
                <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-primary-dark">Falatu</h1>
                    <div className="flex items-center gap-4">
                        <img
                            src={user.avatar}
                            alt={user.username}
                            className="w-8 h-8 rounded-full"
                        />
                        <button
                            onClick={handleLogout}
                            className="text-red-500 hover:text-red-600"
                        >
                            <FiLogOut size={20} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto pt-20 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Sample Posts */}
                    {[1, 2, 3, 4, 5, 6].map((post) => (
                        <div
                            key={post}
                            className="bg-white rounded-lg shadow-sm overflow-hidden"
                        >
                            <img
                                src={`https://picsum.photos/seed/${post}/400/400`}
                                alt="Post"
                                className="w-full aspect-square object-cover"
                            />
                            <div className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <img
                                        src={user.avatar}
                                        alt={user.username}
                                        className="w-6 h-6 rounded-full"
                                    />
                                    <span className="font-medium text-sm">
                                        {user.username}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Sample post caption #{post}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 md:hidden">
                <div className="flex justify-around py-3">
                    {[FiHome, FiSearch, FiPlusSquare, FiHeart, FiUser].map((Icon, i) => (
                        <button
                            key={i}
                            className="text-primary-dark hover:text-primary"
                        >
                            <Icon size={24} />
                        </button>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Home; 