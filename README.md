# service-ts

## Project structure
```
├── src
│   ├── controllers
│   │   ├── ExampleController.ts
│   │   └── index.ts
│   ├── routes
│   │   ├── ExampleRoutes.ts
│   │   └── index.ts
│   ├── services
│   │   ├── ExampleService.ts
│   │   └── index.ts
│   └── index.ts
├── docker-compose.yml
├── Dockerfile
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```
## Getting started

Clone the repository:
```
git clone git@github.com:eremt/service-ts.git your-project
```

Create the `.env` file:
```
cp .env.example .env
```

Install dependencies:
```
npm install
```

Rename project from `service-ts` to `your-project`:
```
sed -i 's/service-ts/your-project/g' *
```

## Development
Start the development environment:
```
docker-compose up
```
The server will be running on [http://0.0.0.0:3000](http://0.0.0.0:3000).

## Production
Start the server in production:
```
npm run start
```
