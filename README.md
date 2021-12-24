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
npm run dev
```

## Production
Start the server in production:
```
npm run start
```
