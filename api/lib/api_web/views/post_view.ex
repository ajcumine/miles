defmodule ApiWeb.PostView do
  use ApiWeb, :view
  alias ApiWeb.PostView

  def render("index.json", %{posts: posts}) do
    %{data: render_many(posts, PostView, "post.json")}
  end

  def render("show.json", %{post: post}) do
    %{data: render_one(post, PostView, "post.json")}
  end

  def render("post.json", %{post: post}) do
    %{title: post.title,
      id: post.id,
      body: post.body,
      created_at: post.inserted_at}
  end
end
