import React from 'react';
import { motion } from 'framer-motion';

const AuthLayout = ({ children, title, subtitle }) => {
    return (
        <div className="min-h-screen flex">
            {/* Left side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
                <div className="w-full max-w-md">
                    <div className="space-y-2 mb-8 text-white">
                        <h1 className="text-3xl font-bold text-center">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-sm text-white/80 text-center">
                                {subtitle}
                            </p>
                        )}
                    </div>
                    {children}
                </div>
            </div>

            {/* Right side - Content */}
            <div className="hidden lg:flex w-1/2 bg-white items-center justify-center p-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-lg space-y-6"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-primary-dark">
                            Welcome to Falatu
                        </h2>
                        <p className="text-lg text-gray-600">
                            Your social media platform for sharing moments that matter.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <FeatureCard
                            icon="🌟"
                            title="Share Moments"
                            description="Share your special moments with friends and family"
                        />
                        <FeatureCard
                            icon="💬"
                            title="Connect"
                            description="Stay connected with people who matter"
                        />
                        <FeatureCard
                            icon="🎯"
                            title="Discover"
                            description="Discover amazing content from around the world"
                        />
                        <FeatureCard
                            icon="🚀"
                            title="Grow"
                            description="Grow your network and reach new heights"
                        />
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                            Join millions of users who trust Falatu for their social media needs.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-4 rounded-lg bg-gray-50 hover:bg-primary-light/10 transition-colors"
    >
        <div className="text-2xl mb-2">{icon}</div>
        <h3 className="font-medium text-primary-dark mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
);

export default AuthLayout; 