import React, { useEffect, useState } from "react";
import { app } from "../firebase/Config";

export const Auth = React.createContext();

export const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        app.auth().onAuthStateChanged(function(user) {
            console.log(user)
            setUser(user);
            setShowChild(true);
        });
    }, []);

    if (!showChild) {
        return (<div>Cargando...</div>);
    } else {
        return (
            <Auth.Provider value={{ user }}>
                {children}
            </Auth.Provider>
        );
    }
};