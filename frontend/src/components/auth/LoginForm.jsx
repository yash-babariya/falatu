import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import Input from '../common/Input';
import Button from '../common/Button';
import logo from '../../assets/logo/logo.png';
import { FiLogIn, FiGithub, FiHelpCircle } from 'react-icons/fi';

const LoginForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError(''); // Clear error when user types
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (!formData.username || !formData.password) {
                throw new Error('Please fill in all fields');
            }

            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify({
                username: formData.username,
                isAuthenticated: true,
                avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.username}`,
                fullName: formData.username,
            }));

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            navigate('/home');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthLayout
            title={
                <div className="flex items-center justify-center gap-3">
                    <img src={logo} alt="logo" className="w-8 h-8" />
                    <span>Falatu</span>
                </div>
            }
            subtitle="Welcome back! Please enter your details"
        >
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-50 text-red-500 text-sm p-3 rounded-lg animate-shake">
                            {error}
                        </div>
                    )}

                    <div className="space-y-4">
                        <Input
                            label="Username"
                            name="username"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />

                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-4">
                        <Button
                            type="submit"
                            icon={FiLogIn}
                            loading={isLoading}
                            size="lg"
                        >
                            Sign in
                        </Button>

                        <div className="flex gap-3">
                            <Button
                                variant="outline"
                                size="sm"
                                icon={FiGithub}
                                iconPosition="left"
                            >
                                GitHub
                            </Button>

                            <Button
                                variant="ghost"
                                size="sm"
                                icon={FiHelpCircle}
                            >
                                Help
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
};

export default LoginForm; 