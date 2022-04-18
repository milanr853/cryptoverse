
import { useState } from "react";
import { createContext } from "react";


const LimitItemsContext = createContext()


const LimitItemsContextProvider = ({ children }) => {
    const [Limited, setLimited] = useState(true)

    return (
        <LimitItemsContext.Provider value={{ Limited, setLimited }}>
            {children}
        </LimitItemsContext.Provider>
    )
}


export { LimitItemsContext, LimitItemsContextProvider }