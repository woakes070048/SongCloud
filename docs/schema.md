# Schema Information

## songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
file_url    | string    | not null
img_url     | string    |
genre       | string    |
description | text      |
user_id     | integer   | not null, foreign key (references users), indexed
private     | boolean   | not null, default: false

## playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
img_url     | string    |
description | text      |
user_id     | integer   | not null, foreign key (references users), indexed
private     | boolean   | not null, default: false

## playlistings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
song_id     | integer   | not null, foreign key (references songs), indexed
playlist_id | integer   | not null, foreign key (references playlists), indexed

## tags
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
name          | string    | not null
taggable_id   | integer   | not null, foreign key (references songs/playlists), indexed
taggable_type | string    | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
song_id     | integer   | not null, foreign key (references song), indexed
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
song_id     | integer   | not null, foreign key (references songs), indexed
seconds     | integer   | not null

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
song_id     | integer   | not null, foreign key (references users), indexed

## followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
followed_id | integer   | not null, foreign key (references users), indexed
