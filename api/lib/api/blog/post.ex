defmodule Api.Blog.Post do
  use API.Schema
  import Ecto.Changeset

  schema "posts" do
    field(:body, :string)
    field(:title, :string)

    timestamps()
  end

  @doc false
  def changeset(post, attrs) do
    post
    |> cast(attrs, [:title, :body])
    |> validate_required([:title, :body])
  end
end
