defmodule Api.Repo.Migrations.CreatePosts do
  use Ecto.Migration

  def change do
    create table(:posts, primary_key: false) do
      add :title, :string
      add :id, :uuid, primary_key: true
      add :body, :text
      add :created_at, :utc_datetime

      timestamps()
    end

  end
end
