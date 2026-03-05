# microhub

Microservices project with centralized ESLint and Prettier configuration.

## Setup

Install dependencies:

```bash
npm install
```

## Linting & Formatting

All linting and formatting is done from the root:

```bash
npm run lint          # Check entire codebase
npm run lint:fix      # Fix entire codebase
npm run format        # Format entire codebase
npm run format:check  # Check formatting
```

## Adding a New Service

When creating a new service:

1. Create the service directory under `services/`
2. Initialize with a minimal `package.json`:

```json
{
  "name": "your-service",
  "version": "1.0.0",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "devDependencies": {
    "typescript": "^5.9.3"
  }
}
```

3. Run `npm install` from the root

That's it! The root ESLint and Prettier configs will automatically apply to all services.
