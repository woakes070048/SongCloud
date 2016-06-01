# SongCloud

[Heroku link][heroku]

[heroku]: http://songcloud.herokuapp.com

## Minimum Viable Product

SongCloud is a web application inspired by SoundCloud that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for an SoundCloud-inspired site: playlist creation and saving, playlist editing, song uploading, song editing and saving, tag and like songs
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README

## Product Goals and Priorities
SongCloud will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [x] Create an account (MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Create, view, edit, and delete playlists (MVP)
- [ ] Upload, view, edit, and delete songs (MVP)
- [ ] Tag songs with multiple tags (MVP)
- [ ] Tag playlists with multiple tags (MVP)
- [ ] Allow user to follow other users (expected feature, but not MVP)
- [ ] Allow user to like and comment on songs (expected feature, but not MVP)
- [ ] Allow user to like playlists (expected feature, but not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages
- [x] blank landing page after signin

### Phase 2: Songs Model, API, and basic APIUtil (1.5 days)

**Objective:** Songs can be created, read, and destroyed through
the API.

- [ ] create `Song` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for songs (`SongsController`)
- [ ] jBuilder views for songs
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Songs can be uploaded, viewed, and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- [ ] implement each song component, building out the flux loop as needed.
  - [ ] `SongsIndex`
  - [ ] `SongIndexItem`
  - [ ] `SongForm`

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Playlists (1 day)

**Objective:** Songs belong to Playlists, and can be viewed by playlist. Playlists can be created, viewed, and destroyed with the user interface.

- [ ] create `Playlist` model
- build out API, Flux loop, and components for:
  - [ ] Playlist CRUD
  - [ ] viewing songs by playlist
- Use CSS to style new views

### Phase 6: Tags (1.5 days)

**Objective:** Songs and Playlists can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for song/playlist
  - [ ] adding tags to song/playlist
  - [ ] creating tags while adding to songs/playslists
  - [ ] searching songs/playlists by tag
- [ ] Style new elements

### Phase 7: Allow Complex Styling in Songs (0.5 days)

**objective:** Enable complex styling of songs.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Song comments in progress bar
- [ ] Pagination / infinite scroll for Songs Index
- [ ] Multiple sessions
