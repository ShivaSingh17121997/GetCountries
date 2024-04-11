import React, { Children, createContext, useState } from 'react'
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);

    const login = (token) => {
        setIsAuth(true)
    }

    const logout = () => {
        setIsAuth(false);
    }


    return (
        <div>
            <AuthContext.Provider value={{ login, isAuth, logout,  }}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
