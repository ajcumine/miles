FROM hexpm/elixir:1.11.2-erlang-23.2.1-ubuntu-focal-20201008

RUN apt-get update
RUN apt-get install -y postgresql-client

RUN mix local.hex --force
RUN mix local.rebar --force
RUN mix archive.install hex phx_new 1.5.7 --force

WORKDIR /opt/api
COPY . .

ENTRYPOINT [ "/opt/api/build/prod.entrypoint.sh" ]
