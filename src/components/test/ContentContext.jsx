import { createContext, useState } from "react";
import BookList from "./BookList";

export const ContentContext = createContext();

export const ContentContextProvider = ({children})=>{

    const [content, setContent] = useState(<BookList/>);

    return(
        <ContentContext.Provider value={{content, setContent}}>
            {children}
        </ContentContext.Provider>
    )
}