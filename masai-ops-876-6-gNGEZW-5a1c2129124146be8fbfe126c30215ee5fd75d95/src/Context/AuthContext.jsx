import React, { createContext, useState } from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
    const [state, setState] = useState({ isAuth: false, token: null })

    const loginUser = (token) => { setState({ ...state, isAuth: true, token, }) }


    const logoutUser = () => { setState({ ...state, isAuth: false, token: null }) }


    return (
        <AuthContext.Provider value={{ authState: state, loginUser, logoutUser }}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider;
//-------------------------------------------------------------------------------------------------------------------------------
export const authcontext = createContext();

function authcontext({ children }) {
    const [state, setState] = useState({ isAuth: false, token: null })


    const login = (token) => { setState({ ...state, isAuth: true, token: token }) }

    const logout = () => { setState({ ...state, isAuth: false, token: null }) }

    return (
        <authcontext.Provider value={{authState:state,login, logout}} >{children}</authcontext.Provider>
    )
}



