type Artist = {
  name: string;
  id: string;
  image: string;
  albums: Album[];
};

type Album = {
  name: string;
  id: string;
  image: string;
  songs: Song[];
  releaseDate: string;
};

type Song = {
  id: string;
  title: string;
  artistName: string;
  album: string;
  duration: number;
  url: string;
};

export type { Artist, Album, Song };
