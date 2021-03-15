import { useContext, useEffect, useState } from "react";
import { ContainerContext } from "../context/Container.context";
import { api } from "../services/api";
import { Content } from "./Content";
import { SideBar } from "./SideBar";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Container() {
  const { selectedGenreId, setSelectedGenre } = useContext(ContainerContext);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        console.log(selectedGenreId);
        setMovies(response.data);
      });

    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar genres={genres} />
      <Content movies={movies} />
    </div>
  );
}
