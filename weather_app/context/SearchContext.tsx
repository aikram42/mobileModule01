import { createContext, useContext, useState, ReactNode } from "react";
import React from "react";

const SearchContext = createContext({ searchText: "", setSearchText: (text: string) => {} });


export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <SearchContext.Provider value={{searchText, setSearchText}}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => useContext(SearchContext);
