import React, { useState, useRef } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdError } from "react-icons/md";

const Input = ({
    label,
    name,
    type = 'text',
    error,
    helperText,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);
    const isPassword = type === 'password';

    const getIcon = () => {
        if (name === 'username') return <FaUser size={18} />;
        if (isPassword) return <RiLockPasswordLine size={18} />;
        return null;
    };

    return (
        <div className="space-y-1.5">
            {label && (
                <label
                    htmlFor={name}
                    className={`
                        block text-sm font-medium
                        transition-colors duration-200
                        ${isFocused ? 'text-primary' : 'text-primary-dark'}
                        ${error ? 'text-red-500' : ''}
                    `}
                >
                    {label}
                </label>
            )}

            <div className="relative">
                {getIcon() && (
                    <span className={`
                        absolute left-3 top-1/2 -translate-y-1/2
                        transition-colors duration-200
                        ${isFocused ? 'text-primary' : 'text-primary-light'}
                        ${error ? 'text-red-500' : ''}
                    `}>
                        {getIcon()}
                    </span>
                )}

                <input
                    ref={inputRef}
                    id={name}
                    name={name}
                    type={isPassword ? (showPassword ? 'text' : 'password') : type}
                    className={`
                        w-full bg-white/90
                        rounded-lg
                        transition-all duration-200
                        ${getIcon() ? 'pl-10' : 'pl-4'} pr-10 py-2.5
                        border-2
                        ${error
                            ? 'border-red-500 focus:border-red-600'
                            : 'border-secondary/50 focus:border-primary'
                        }
                        focus:outline-none
                        ${isFocused ? 'shadow-sm shadow-primary/20' : ''}
                    `}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />

                {isPassword && (
                    <button
                        type="button"
                        className={`
                            absolute right-3 top-1/2 -translate-y-1/2
                            transition-colors duration-200
                            ${isFocused ? 'text-primary' : 'text-primary-light'}
                            hover:text-primary
                        `}
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <IoEyeOffOutline size={20} />
                        ) : (
                            <IoEyeOutline size={20} />
                        )}
                    </button>
                )}

                {error && (
                    <MdError
                        size={20}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500"
                    />
                )}
            </div>

            {(error || helperText) && (
                <p className={`text-sm ${error ? 'text-red-500' : 'text-primary-light'}`}>
                    {error || helperText}
                </p>
            )}
        </div>
    );
};

export default Input; 