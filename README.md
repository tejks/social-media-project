<div align="center">
  <img src="docs/assets/chat.svg" alt="logo" width="150" height="150" />

  <h1 align="center">Social Media Project — Web</h1>
</div>

</br>

A modern single-page social media web client built with Vite, React, and TypeScript. It provides user authentication, posts feed, comments, photo gallery, and profile management. The UI is component-driven, responsive, and uses Tailwind CSS with SCSS helpers.

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Screenshots](#screenshots)
- [Architecture Notes](#architecture-notes)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running](#running)
- [Key Files](#key-files)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This repository contains the front-end of a social media application. The app supports:

- Authentication (login / signup)
- Creating, listing and viewing posts
- Commenting on posts
- Uploading and browsing photos
- User profiles with avatars

The front-end consumes backend APIs for auth, posts, comments and photos located under `src/common/API/services`.

## Key Features

- Feed with paginated posts
- Post creation with text and image upload
- Comment threads and replies
- User profile and avatar upload (drag & drop)
- Search users and posts via the navbar
- Responsive layout and image modal viewer

## Screenshots

![Screenshot 1](docs/assets/landing.png)
![Screenshot 2](docs/assets/post_with_comments.png)

## Architecture Notes

- Component structure: `src/components` (UI primitives under `elements`)
- Pages: `src/pages` (Home, Login, Signup, Posts, Photos)
- State: Redux Toolkit in `src/store` (authentication slice + others)
- API layer: `src/common/API/services` (auth.ts, post.ts, comment.ts, photos.ts)

Recommendations:

- Keep API contracts in `src/common/API/interfaces` to ease type-safe requests
- Centralize environment-driven base URL in `src/config/env.ts`

## Technologies

- Vite
- React + TypeScript
- Tailwind CSS + SCSS
- Redux Toolkit
- fetch / axios for API calls

## Prerequisites

- Node.js (LTS recommended)
- npm or yarn

## Installation

```bash
git clone https://github.com/tejks/social-media-project
cd social-media-project
npm install
# or
yarn
```

## Running

Start the development server:

```bash
npm run dev
```

Build and preview production:

```bash
npm run build
npm run preview
```

## Key Files

- [src/main.tsx](src/main.tsx) — application entry point
- [src/index.scss](src/index.scss) — global styles
- [src/store](src/store) — Redux configuration and slices
- [src/components](src/components) — shared UI components and elements
- [src/pages](src/pages) — page-level components (Home, Posts, Photos, Login, Signup)
- [src/common/API/services](src/common/API/services) — API service modules
- [src/common/API/models](src/common/API/models) — typed response models

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines. Short workflow:

- Open an issue for major changes
- Create a feature branch
- Run the app and ensure it builds locally
- Submit a PR with tests or screenshots when applicable

## License

This project is released under the MIT License — see the `LICENSE` file for details.
