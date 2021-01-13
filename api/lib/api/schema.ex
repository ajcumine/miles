defmodule API.Schema do
  defmacro __using__(_) do
    quote do
      use Ecto.Schema
      @primary_key {:id, :binary_id, autogenerate: true}
      @foreign_key_type :binary_id
      @derive {Phoenix.Param, key: :id}
      @timestamps_opts [
        inserted_at: :created_at,
        type: :utc_datetime_usec,
        autogenerate: {Api.Clock, :utc_now, []}
      ]
    end
  end
end
