# LaunchVerse SDK

Type-safe API client for LaunchVerse API.

## Installation

```bash
npm install github:kapish-webknot/launchverse-sdk@v1.0.5 openapi-fetch
```

## Usage

```typescript
import { createLaunchVerseClient } from '@launchverse/sdk';

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
const { data: profile } = await client.GET('/v1/users/me');
```

## Features

- ✅ Fully type-safe
- ✅ Auto-completion for all endpoints
- ✅ Request/response validation
- ✅ Zero runtime overhead (2KB bundle)
- ✅ Works with any HTTP client

## Version

**Current Version:** v1.0.5

## Changelog

See [GitHub Releases](https://github.com/kapish-webknot/launchverse-sdk/releases) for version history.
