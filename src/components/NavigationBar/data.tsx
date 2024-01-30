import {
  PersonOutlined,
  AlbumOutlined,
  MusicNoteOutlined,
  QueueMusicOutlined,
} from "@mui/icons-material";

export const top_level_nav = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Explore",
    path: "/explore",
  },
  {
    id: 3,
    name: "Merch",
    path: "/merch",
  },
];

export const my_collection_nav = [
  {
    id: 1,
    name: "Artists",
    path: "/artists",
    icon: <PersonOutlined />,
  },
  {
    id: 2,
    name: "Albums",
    path: "/albums",
    icon: <AlbumOutlined />,
  },
  {
    id: 3,
    name: "Songs",
    path: "/songs",
    icon: <MusicNoteOutlined />,
  },
  {
    id: 4,
    name: "Playlists",
    path: "/playlists",
    icon: <QueueMusicOutlined />,
  },
];

export const playlists = [
  {
    id: 1,
    name: "My Playlist",
    path: "/my-playlist",
  },
  {
    id: 2,
    name: "My Playlist 2",
    path: "/my-playlist-2",
  },
  {
    id: 3,
    name: "My Playlist 3",
    path: "/my-playlist-3",
  },
];
