import React, { createContext, useState } from 'react';

export const addData = createContext();

const ContextProvider = ({ children }) => {

    const [userAdd, setUserAdd] = useState("");

    return (
        <div>
            <addData.Provider value={{ userAdd, setUserAdd }}>
                {children}
            </addData.Provider>
        </div>
    )
}

export default ContextProvider;