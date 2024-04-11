import { createContext, useState } from "react";

export const DataContext = createContext({
    html: '',
    css: '',
    js: '',
    setHtml: () => {},
    setCss: () => {},
    setJs: () => {},
  
})

const DataProvider = ({ children })=>{

    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJS] = useState('')

    return(
        <DataContext.Provider
        // we have export the states... n we have to import it n use it in component
            value={{
                html, 
                setHtml, 
                css, 
                setCss,     
                js, 
                setJS
            }}
            >
            {children}
        </DataContext.Provider>
    )
}

export  default DataProvider