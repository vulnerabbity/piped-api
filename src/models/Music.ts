import { Playlist } from "./Playlist"
import { Video } from "./Video"

export type MusicType = MusicAlbum | MusicSong | MusicVideo | MusicPlaylist

/**
 * Same shape with playlist but videos is -1
 */
export type MusicAlbum = Playlist & {
  readonly videos: -1
}

/**
 * Same shape with video with some fields hardcoded
 */
export type MusicSong = Omit<
  Video,
  "uploaderName" | "uploaderUrl" | "uploadedDate" | "uploaderAvatar" | "shortDescription"
> & {
  readonly uploaderAvatar: null
  readonly uploadedDate: null
  readonly shortDescription: null
  readonly views: -1
  readonly uploaded: -1
  readonly uploaderVerified: boolean
}

/**
 * Same shape with video with some fields hardcoded
 */
export type MusicVideo = Omit<
  Video,
  "uploaderAvatar" | "uploadedDate" | "shortDescription" | "uploaded"
> & {
  readonly uploaderAvatar: null
  readonly uploadedDate: null
  readonly shortDescription: null
  readonly uploaded: -1
}

export type MusicPlaylist = Playlist
