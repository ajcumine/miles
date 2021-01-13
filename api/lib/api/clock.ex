defmodule Api.Clock do
  @moduledoc """
  Api.Clock is a wrapper around the Timex module specifically
  the Timex.now("UTC") function. This allows for datetime mocking
  in tests by using the Api.Clock.freeze/0 function.
  """
  use Timex

  @doc """
  utc_now/0 is used as a wrapper around Timex.now("UTC") to allow
  mocking of time in tests. This way whenever we need a UTC time
  from Timex we now use API.Clock.utc_now() instead.
  """
  def utc_now do
    Process.get(:mock_utc_now) || Timex.now("UTC")
  end

  @doc """
  freeze/0 is used in tests to freeze time so that we can set check
  for time based variables.
  """
  def freeze do
    Process.put(:mock_utc_now, utc_now())
  end

  @doc """
  freeze/1 is used similarly to freeze/0 except you can pass a DateTime
  to the function for it to freeze time at.
  """
  def freeze(%DateTime{} = on) do
    Process.put(:mock_utc_now, on)
  end

  @doc """
  unfreeze/0 is used to undo the freeze and allow time to pass again in the same Process
  """
  def unfreeze do
    Process.delete(:mock_utc_now)
  end
end
