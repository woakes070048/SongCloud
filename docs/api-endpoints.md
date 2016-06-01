# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /user/new`
- `POST /user`
- `PATCH /user`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Songs

- `GET /api/songs`
  - Songs index/search
- `POST /api/songs`
- `GET /api/songs/:id`
- `PATCH /api/songs/:id`
- `DELETE /api/songs/:id`

### Playlists

- `GET /api/playlists`
  - Playlists index/search
- `POST /api/playlists`
- `GET /api/playlists/:id`
- `PATCH /api/playlists/:id`
- `DELETE /api/playlists/:id`
- `GET /api/playlists/:id/songs`
  - index of all songs for a playlist

### Tags

- A song's tags will be included in the song show template
- A playlist's tags will be included in the playlist show template
- `GET /api/tags/:id`
- `POST /api/songs/:song_id/tags`: add tag to song by name
- `DELETE /api/songs/:song_id/tags/:tag_name`: remove tag from song by name
- `POST /api/playlists/:playlist_id/tags`: add tag to playlist by name
- `DELETE /api/playlists/:playlist_id/tags/:tag_name`: remove tag from playlist by name

### Comments

- A song's comments will be included in the song show template
- `GET /api/songs/:song_id/comments`
- `POST /api/songs/:song_id/comments`
- `DELETE /api/songs/:song_id/comments/:id`
