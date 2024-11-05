FROM oven/bun:1 AS base
LABEL authors="jombi"

FROM base AS install_and_build
COPY . /app

RUN cd /app && bun install
RUN cd /app && bun run build

FROM base AS release

COPY package.json /app/
COPY entrypoint.sh /app/
COPY --from=install_and_build /app/.next /app/.next
COPY --from=install_and_build /app/node_modules /app/node_modules

WORKDIR /app/
EXPOSE 3000/tcp
RUN chmod 755 ./entrypoint.sh
ENTRYPOINT [ "./entrypoint.sh" ]
