# Miles Monorepo

Monorepo to store all code for personal website

### Why a monorepo?

Personally I chose to use a monorepo structure for this group of projects to provide a single source of truth and greater transparency across the multiple projects I intend to build in it.

I intend to have a single Elixir backend API to serve one or more frontend projects and this way I will not need to jump between multiple repositories to find each project.

One of the major disadvantages of using a monorepo are performance problems caused by the amount of code that could eventually end up in one repository. I do not expect this to be a problem for some time so this should be avoided.

## Structure

The monorepo contains the following subdirectories

```
|
|-/api
|-/app
```

### API

Elixir/Phoenix API backend

### App

React based PWA for the website

# Development Setup and Run

## Environment Variables

Environment variables are drawn from the `.env` file at the root directory while will need to match those given in the `.env.example` file. This will need to be created and populated.

## Database

Dockerised PostgreSQL Database

To run the database you will need to install Docker, then run `docker-compose up -d` to run a silent psql db. This will take environment variables from the `.env` file at the root.

### Why Docker?

Docker enables you to create an container environment that will run on any platform that can run docker. This way you only have to install the Docker platform and Docker will manage the rest of the dependancies

### Why PostgreSQL?

PostgreSQL is often used as the default database in backend frameworks so has excellent support.

## API

Elixir/Phoenix API

To run the API you will need Elixir and Phoenix installed. Both have very well structured and up to date installation pages on their websites.

When installed and with the database running, run `mix phx.server` in the `/api` directory to start the API at [localhost:4000](http://localhost:4000).
