import { useState, createContext } from "react";
import type { Song } from "../interface";

/*
getNextSong: if there is a song list with a length > 1
  AND currentSong is not the greatest index of the list
  AND repeatSongs is not true then this song is songList[currentSongIndex + 1]
  ELSE IF repeatSongs is true then play currentSong
  ELSE play songList[0]
  ELSE playCurrentSong
*/

const getNextSong = (songList: Song[], currentSong: Song, isRepeatingSongs: boolean) => {
  if (songList.length > 1 && currentSong !== songList[songList.length - 1] && !isRepeatingSongs) {
    return songList[songList.indexOf(currentSong) + 1];
  }

  if (isRepeatingSongs) {
    return currentSong;
  }

  if (songList.length <= 1) {
    return currentSong;
  }

  return songList[0];
};

/*
getPreviousSong: if there is a song list with a length > 1
  AND currentSong's index is not 0
  AND repeatSongs is not true then this song is songList[currentSongIndex - 1]
  ELSE IF repeatSongs is true then play currentSong
  ELSE play songList[songList.length - 1]
  ELSE play currentSong

*/

const getPreviousSong = (songList: Song[], currentSong: Song, isRepeatingSongs: boolean) => {
  if (songList.length > 1 && songList.indexOf(currentSong) !== 0 && !isRepeatingSongs) {
    return songList[songList.indexOf(currentSong) - 1];
  }

  if (isRepeatingSongs) {
    return currentSong;
  }

  if (songList.length <= 1) {
    return currentSong;
  }

  return songList[songList.length - 1];
};
/*

songList: If a playlist, album, EP, or queued song is selected, the entire list (array)
  of songs that are apart of that data set.

  */

type SongList = Song[];

/*

playSong: function to play the passed song and set it to currentSong

*/

const playSong = (song: Song) => {
  return new Audio(song.url).play();
};

/*
pauseSong: function to pause the passed song
*/

const pauseSong = (song: Song) => {
  return new Audio(song.url).pause();
};

/*
shuffleSongs: if songList.length is greater than 1 copy and reorder songList (shuffledSongList)
*/

const shuffleSongs = (songList: Song[]) => {
  if (songList.length > 1) {
    const shuffledSongList = [...songList];
    for (let i = shuffledSongList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = shuffledSongList[i];
      shuffledSongList[i] = shuffledSongList[j];
      shuffledSongList[j] = temp;
    }
    return shuffledSongList;
  }
  return songList;
};

/*
isSongsShuffled: boolean to declare that shuffleSongs has been selected
*/

type SongPlayerInfo = {
  currentSong: Song;
  songList: SongList;
  isRepeatingSongs: boolean;
  isShufflingSongs: boolean;
  isPlaying: boolean;
};

type SongPlayerState = SongPlayerInfo & {
  useMusicPlayer: () => ReturnType<typeof useMusicPlayer> | void;
};

/*

shuffledSongList: if Shuffle
*/

export const useMusicPlayer = () => {
  const [state, setState] = useState<SongPlayerInfo>({
    currentSong: {
      id: "",
      title: "",
      artistName: "",
      album: "",
      duration: 0,
      url: "",
    },
    songList: [],
    isRepeatingSongs: false,
    isShufflingSongs: false,
    isPlaying: false,
  });

  return {
    state,
    setState,
    playSong,
    pauseSong,
    getNextSong,
    getPreviousSong,
    shuffleSongs,
  };
};

export const MusicPlayerContext = createContext<SongPlayerState>({
  currentSong: {
    id: "",
    title: "",
    artistName: "",
    album: "",
    duration: 0,
    url: "",
  },
  songList: [],
  isRepeatingSongs: false,
  isShufflingSongs: false,
  isPlaying: false,
  useMusicPlayer: () => {},
});
