# Miles Monorepo

Monorepo to store all code for personal website

### Why a monorepo?

Personally I chose to use a monorepo structure for this group of projects to provide a single source of truth and greater transparency across the multiple projects I intend to build in it.

I intend to have a single Elixir backend API to serve one or more frontend projects and this way I will not need to jump between multiple repositories to find each project.

One of the major disadvantages of using a monorepo are performance problems caused by the amount of code that could eventually end up in one repository. I do not expect this to be a problem for some time so this should be avoided.


## Structure

```
|
|-/api
|-/app
```

### API
Elixir/Phoenix API backend

### app
React based PWA for the website
