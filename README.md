# LaunchVerse SDK

Type-safe API client for LaunchVerse API.

## Installation

```bash
npm install openapi-fetch
```

## Usage

```typescript
import { createLaunchVerseClient } from './sdk';

const client = createLaunchVerseClient('http://localhost:3000');

// Register
const { data, error } = await client.POST('/v1/auth/register', {
  body: {
    email: 'user@example.com',
    password: 'Pass123!',
    name: 'John Doe',
    role: 'STUDENT',
  },
});

// Login
const { data: loginData } = await client.POST('/v1/auth/login', {
  body: {
    email: 'user@example.com',
    password: 'Pass123!',
  },
});

// Get profile (authenticated)
const { data: profile } = await client.GET('/v1/users/me', {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

// Forgot password
await client.POST('/v1/auth/forgot-password', {
  body: {
    email: 'user@example.com',
  },
});

// Reset password
await client.POST('/v1/auth/reset-password', {
  body: {
    token: 'reset-token',
    password: 'NewPass123!',
  },
});
```

## Features

- ✅ Fully type-safe
- ✅ Auto-completion for all endpoints
- ✅ Request/response validation
- ✅ Zero runtime overhead
- ✅ Works with any HTTP client

## Regenerate SDK

```bash
npm run generate:sdk
```
