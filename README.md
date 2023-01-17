## Initial setup

```shell
mkdir setup
cd setup
mkdir server

npm init -y

npm i fastify
npm i typescript -D
npm i tsx -D

npx tsc --init

```

## ORM Install

```shell
npm i prisma -D
npm i @prisma/client
npx prisma init --datasource-provider SQLite
```

- Configure file `prisma/schema.prisma`

````shell
npx prisma migrate dev
````

- Run prisma studio

````shell
npx prisma studio
````

- Configure Cors
````shell
npm i @fastify/cors
````