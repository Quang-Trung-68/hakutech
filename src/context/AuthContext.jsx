import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // Initialize state from localStorage to persist login across refreshes
    const [user, setUser] = useState(() => {
        try {
            const storedUser = localStorage.getItem('haku_user');
            return storedUser ? JSON.parse(storedUser) : null;
        } catch (error) {
            console.error("Failed to parse user from localStorage", error);
            return null;
        }
    });

    const login = (userData) => {
        // In a real app, you'd validate credentials here or receive a token
        const userToStore = {
            id: '1',
            email: userData.email,
            fullName: 'Haku User',
            role: 'user', // or 'admin' 
            ...userData
        };
        setUser(userToStore);
        localStorage.setItem('haku_user', JSON.stringify(userToStore));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('haku_user');
    };

    const value = {
        user,
        isAuthenticated: !!user,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
