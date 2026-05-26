# Dusty Pages Backend

A personal portfolio backend designed to demonstrate core web development concepts with Node.js, Express, PostgreSQL, and Prisma.

This API powers the Dusty Pages frontend by serving article, category, and ranking data.

## Why This Project Exists

This backend is part of a personal application intended to show practical understanding of:

- REST API design
- Controller-based backend architecture
- Relational data modeling
- ORM usage with Prisma
- Local development workflows with Docker

## Tech Stack

- Node.js (ES Modules)
- Express 5
- PostgreSQL 15 (Docker Compose)
- Prisma 7
- `@prisma/adapter-pg` + `pg` connection adapter
- Faker seed data generator
- Prettier

## Architecture Overview

```mermaid
flowchart LR
  A[React Frontend] -->|HTTP /api| B[Express App]
  B --> C[Route Layer]
  C --> D[Controller Layer]
  D --> E[Prisma Client]
  E --> F[(PostgreSQL)]
```

Runtime responsibilities:

- `src/app.js`
  - Configures CORS and JSON parsing
  - Registers route modules under `/api/*`
  - Starts the HTTP server on `PORT`
- `src/routes/*`
  - Maps endpoints to controller functions
- `src/controllers/*`
  - Implements API logic and database access
- `src/lib/prisma.js`
  - Initializes Prisma client with Postgres adapter

## API Base URL

Local base URL:

- `http://localhost:5000/api`

## Implemented Endpoints

### Articles

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/api/articles/get-featured` | Returns up to 3 featured articles by weekly view count with all-time fallback |
| `GET` | `/api/articles/get-all` | Returns all articles |
| `GET` | `/api/articles/:id` | Returns a single article by numeric ID |

### Categories

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/api/categories/get-categories` | Returns all categories |
| `GET` | `/api/categories/:categoryName/get-top-articles` | Returns top 5 viewed articles in that category |

Query parameters for top category articles:

- `timeframe=all` (default)
- `timeframe=1day`
- `timeframe=7days`
- `timeframe=1month`
- `timeframe=1year`

### Users

- `src/routes/userRoutes.js` currently exports an empty router (authentication/user endpoints are planned but not implemented yet).

## Data Model Summary

The schema models articles, users, categories, eras, views, and comments with relation tables for many-to-many connections.

Main entities:

- `Article`
- `Category`
- `User`
- `Era`
- `Comments`
- `ArticleView`

Join tables:

- `ArticleCategory`
- `UserArticle`
- `ArticleEra`

Important behavior:

- Featured articles are computed from grouped `ArticleView` records.
- Category top articles are computed with grouped views filtered by category relation + timeframe.

## Project Structure

```text
prisma/
  schema.prisma          # Data model definitions
  migrations/            # Prisma migration history
  seed.js                # Fake data seeding script
src/
  app.js                 # Express app bootstrap
  controllers/           # Route handlers and business logic
  generated/prisma/      # Generated Prisma client output
  lib/prisma.js          # Prisma + pg adapter initialization
  routes/                # API route modules
docker-compose.yml       # PostgreSQL local container
prisma.config.ts         # Prisma config + datasource URL source
```

## Local Setup

### Prerequisites

- Node.js 20+
- npm 10+
- Docker Desktop (or compatible Docker engine)

### 1) Install Dependencies

```bash
npm install
```

### 2) Create Environment File

Use `.env.example` as template and create `.env`.

PowerShell:

```powershell
Copy-Item .env.example .env
```

Then fill values in `.env`:

```env
PORT=5000

POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=dusty_pages

DATABASE_URL=postgresql://postgres:postgres@localhost:5432/dusty_pages
```

### 3) Start PostgreSQL Container

```bash
docker compose up -d
```

### 4) Run Migrations

```bash
npx prisma migrate dev --name init
```

### 5) Seed Example Data

```bash
npx prisma db seed
```

### 6) Start API Server

```bash
node src/app.js
```

Expected server log:

- `Server running on http://localhost:5000`

## Useful Prisma Commands

```bash
npx prisma migrate status
npx prisma studio
npx prisma generate
```

## CORS + Frontend Integration

Current CORS configuration allows:

- `http://localhost:5173`

If your frontend runs on another origin, update CORS origin in `src/app.js`.

## Error Handling Notes

Controllers currently return:

- `500` for unexpected errors
- `404` for missing category in category-specific ranking endpoint

Potential improvements:

- Centralized error middleware
- Request validation (schema-based)
- Consistent API response envelope

## Known Gaps / Roadmap

- Add user registration/login endpoints
- Add authentication + authorization middleware
- Add pagination for large article collections
- Add input validation and sanitization
- Add test suite (unit + integration)
- Add health check and observability (logging/metrics)

## Portfolio Context

This backend intentionally prioritizes clear architecture and practical full-stack integration over feature completeness, making it suitable as a showcase project for modern web development fundamentals.