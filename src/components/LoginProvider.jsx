import { useContext } from 'react';
import { createContext, useState } from 'react';

export const LoginContext = createContext(null)

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [online,setOnline] = useState('offline')

    let userName = (online === 'online' ? user.email.split("@")[0] : 'user');

    const login = (userData) => {
        setUser(userData);
        setOnline('online');
    }

    const logout = () => {
        setUser(null);
        setOnline('offline');
    }
    return (
        <LoginContext.Provider value = {{user, online, userName, login,logout}}>
            {children}
        </LoginContext.Provider>
    )
}

