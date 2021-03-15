import { createContext, ReactNode, useState } from "react";
import { SideBar } from "../components/SideBar";

interface ContainerContextData {
  handleClickButton: (props: number) => void;
  setSelectedGenre: (props: Genre) => void;
  selectedGenre: Genre;
  selectedGenreId: number;
}
interface ContainerContextProviderProps {
  children: ReactNode;
}
interface Genre {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export const ContainerContext = createContext({} as ContainerContextData);

export function ContainerContextProvider({
  children,
}: ContainerContextProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<Genre>({} as Genre);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <ContainerContext.Provider
      value={{
        handleClickButton,
        setSelectedGenre,
        selectedGenre,
        selectedGenreId,
      }}
    >
      {children}
    </ContainerContext.Provider>
  );
}
