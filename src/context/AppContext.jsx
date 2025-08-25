import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null); // null if not logged in

    const login = (userData) => {
        // In a real app, you'd validate against a backend
        setUser({ name: userData.name || 'Usuario' });
    };

    const logout = () => {
        setUser(null);
    };

    const isAuthenticated = !!user;

    return (
        <AppContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
