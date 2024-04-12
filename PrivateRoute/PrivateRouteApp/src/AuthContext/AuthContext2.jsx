import React, { Children, createContext, useState } from 'react'

export const AuthContext = createContext();

export default function AuthContext2({ Children }) {

    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null)

    const login = (token) => {
        setIsAuth(true)
        setToken(token)
    }

    const logout = () => {
        setIsAuth(false);
        tokan(null);
    }


    return (
        <div>
            <AuthContext.Provider value={{ login, logout, token }} >
                {Children}
            </AuthContext.Provider>

        </div>
    )
};
