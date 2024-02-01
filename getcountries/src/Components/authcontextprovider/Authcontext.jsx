

import React, { createContext, useState } from "react";

export const authcontext = createContext();
export default function Authcontext({ children }) {


    const [state, setState] = useState({ isAuth: false, token: null })


    const login = (token) => { setState({ ...state, isAuth: true, token: token }) }

    const logout = () => { setState({ ...state, isAuth: false, token: null }) }

    console.log(state)

    return (
        <authcontext.Provider value={{ authState: state, login, logout }} >{children}</authcontext.Provider>
    )
}


