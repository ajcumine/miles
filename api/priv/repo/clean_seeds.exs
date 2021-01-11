# Script for depopulating the database. You can run it as:
#
#     mix run priv/repo/clean_seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Api.Repo.delete!(%Api.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Api.Repo
alias Api.Blog.Post

Repo.delete_all(Post)

