# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Api.Repo.insert!(%Api.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Api.Repo
alias Api.Blog.Post

Repo.insert! %Post{title: "Post 1 Title", body: "Body of blog post 1"}
Repo.insert! %Post{title: "Post 2 Title", body: "Body of blog post 2"}
Repo.insert! %Post{title: "Post 3 Title", body: "Body of blog post 3"}
