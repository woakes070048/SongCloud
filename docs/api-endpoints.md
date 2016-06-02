# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/user`
- `POST /api/user`
- `PATCH /api/user`

### Session

- `GET /api/session`
- `POST /api/session`
- `DELETE /api/session`

### Songs

- `GET /api/songs`
- `POST /api/songs`
- `GET /api/songs/:id`
- `PATCH /api/songs/:id`
- `DELETE /api/songs/:id`

### Playlists

-
- `GET /api/playlists`
- `POST /api/playlists`
- `GET /api/playlists/:id`
  -  A playlist's songs will be included in the playlist show template
- `PATCH /api/playlists/:id`
- `DELETE /api/playlists/:id`

### Tags

- A song's tags will be included in the song show template
- A playlist's tags will be included in the playlist show template
- `GET /api/tags`
- `POST /api/tags`
- `GET /api/tags/:id`

### Comments

- A song's comments will be included in the song show template
- `GET /api/songs/:song_id/comments`
- `POST /api/songs/:song_id/comments`
- `DELETE /api/songs/:song_id/comments/:id`
