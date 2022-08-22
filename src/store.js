import { createContext, useState } from "react";

const Store = createContext();

export function StoreProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);


    return (
        <Store.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </Store.Provider>
    )
}


export default Store;