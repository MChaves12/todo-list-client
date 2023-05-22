import { createContext, useEffect, useState } from 'react';
import authApi from '../api/auth.api';
import { getToken, removeToken } from '../utils/token.utils';

const AuthContext = createContext();

const AuthProviderWrapper = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const[isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    const authenticateUser = async () => {
        const storedToken = getToken();
        setIsLoading(true);
        try {
            if(storedToken) {
                const response = await authApi.verify();
                setIsLoggedIn(true);
                setUser(response);
            } else {
                setIsLoggedIn(false);
            }
        } catch (error) {
            removeToken();
            setIsLoggedIn(false);
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    }

    const logOutUser = () => {
        removeToken();
        authenticateUser();
    }

    useEffect(() => {
        authenticateUser();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, user, authenticateUser, logOutUser}}>
            {children}
        </AuthContext.Provider>
    )
};

export { AuthContext, AuthProviderWrapper };
