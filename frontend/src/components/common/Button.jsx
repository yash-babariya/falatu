import React from 'react';
import { CgSpinner } from 'react-icons/cg';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    loading = false,
    icon: Icon,
    iconPosition = 'right',
    ...props
}) => {
    const baseStyles = 'relative inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-gradient-to-r from-primary-dark to-primary hover:from-primary hover:to-primary-dark text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 active:shadow-none',
        secondary: 'bg-gradient-to-r from-primary-light to-secondary hover:from-secondary hover:to-primary-light text-white shadow-lg shadow-secondary/30 hover:shadow-secondary/50 active:shadow-none',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
        ghost: 'text-primary hover:bg-primary/10',
        danger: 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white shadow-lg shadow-red-500/30 hover:shadow-red-500/50 active:shadow-none'
    };

    const sizes = {
        sm: 'text-sm px-3 py-1.5 gap-1.5',
        md: 'text-base px-4 py-2 gap-2',
        lg: 'text-lg px-6 py-2.5 gap-2.5'
    };

    const iconClasses = loading ? 'animate-spin' : iconPosition === 'right' ? 'group-hover:translate-x-0.5' : 'group-hover:-translate-x-0.5';

    return (
        <button
            className={`
                ${baseStyles}
                ${variants[variant]}
                ${sizes[size]}
                group
            `}
            disabled={loading || props.disabled}
            {...props}
        >
            {loading ? (
                <>
                    <CgSpinner className="animate-spin" size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} />
                    <span>Loading...</span>
                </>
            ) : (
                <>
                    {Icon && iconPosition === 'left' && (
                        <Icon className={`transition-transform duration-200 ${iconClasses}`} />
                    )}
                    {children}
                    {Icon && iconPosition === 'right' && (
                        <Icon className={`transition-transform duration-200 ${iconClasses}`} />
                    )}
                </>
            )}

            {/* Ripple effect overlay */}
            <span className="absolute inset-0 overflow-hidden rounded-inherit">
                <span className="absolute inset-0 rounded-inherit bg-black/[0.001] group-hover:bg-black/[0.05] group-active:bg-black/[0.1] transition-colors" />
            </span>
        </button>
    );
};

export default Button; 