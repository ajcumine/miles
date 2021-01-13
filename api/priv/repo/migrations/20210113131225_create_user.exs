defmodule Api.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def up do
    create table(:users, primary_key: false) do
      add(:email, :string)
      add(:password_hash, :string)
      add(:id, :uuid, primary_key: true)
    end

    create unique_index(:users, [:email])
  end

  def down do
    drop table(:users)
  end
end
