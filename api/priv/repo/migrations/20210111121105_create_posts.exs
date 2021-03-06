defmodule Api.Repo.Migrations.CreatePosts do
  use Ecto.Migration

  def up do
    create table(:posts, primary_key: false) do
      add(:title, :string)
      add(:id, :uuid, primary_key: true)
      add(:body, :text)

      timestamps(type: :utc_datetime_usec, inserted_at: :created_at)
    end
  end

  def down do
    drop table(:posts)
  end
end
