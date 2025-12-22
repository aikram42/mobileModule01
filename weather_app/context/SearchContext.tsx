// export default function SearchContext() {}

import { createContext, useContext, useState } from "react";

const SearchContext = createContext({ searchText: "", setSearchText: (text: string) => {} });

import { ReactNode } from "react";

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <SearchContext.Provider value={{searchText, setSearchText}}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => useContext(SearchContext);
