# ▲ / base-forge

**Production-grade Turborepo template for Next.js apps.**

<div>
  <img src="https://img.shields.io/npm/dy/base-forge" alt="" />
  <img src="https://img.shields.io/npm/v/base-forge" alt="" />
  <img src="https://img.shields.io/github/license/vercel/base-forge" alt="" />
</div>

## Overview

[base-forge](https://github.com/vercel/base-forge) is a production-grade [Turborepo](https://turborepo.com) template for [Next.js](https://nextjs.org/) apps. It's designed to be a comprehensive starting point for building SaaS applications, providing a solid, opinionated foundation with minimal configuration required.

Built on a decade of experience building web applications, base-forge balances speed and quality to help you ship thoroughly-built products faster.

### Philosophy

base-forge is built around five core principles:

- **Fast** — Quick to build, run, deploy, and iterate on
- **Cheap** — Free to start with services that scale with you
- **Opinionated** — Integrated tooling designed to work together
- **Modern** — Latest stable features with healthy community support
- **Safe** — End-to-end type safety and robust security posture

## Demo

Experience base-forge in action:

- [Web](https://demo.base-forge.com) — Marketing website
- [App](https://app.demo.base-forge.com) — Main application
- [Storybook](https://storybook.demo.base-forge.com) — Component library
- [API](https://api.demo.base-forge.com/health) — API health check

## Features

base-forge comes with batteries included:

### Apps

- **Web** — Marketing site built with Tailwind CSS and TWBlocks
- **App** — Main application with authentication and database integration
- **API** — RESTful API with health checks and monitoring
- **Docs** — Documentation site powered by Mintlify
- **Email** — Email templates with React Email
- **Storybook** — Component development environment

### Packages

- **Authentication** — Powered by [Clerk](https://clerk.com)
- **Database** — Type-safe ORM with migrations
- **Design System** — Comprehensive component library with dark mode
- **Payments** — Subscription management via [Stripe](https://stripe.com)
- **Email** — Transactional emails via [Resend](https://resend.com)
- **Analytics** — Web ([Google Analytics](https://developers.google.com/analytics)) and product ([Posthog](https://posthog.com))
- **Observability** — Error tracking ([Sentry](https://sentry.io)), logging, and uptime monitoring ([BetterStack](https://betterstack.com))
- **Security** — Application security ([Arcjet](https://arcjet.com)), rate limiting, and secure headers
- **CMS** — Type-safe content management for blogs and documentation
- **SEO** — Metadata management, sitemaps, and JSON-LD
- **AI** — AI integration utilities
- **Webhooks** — Inbound and outbound webhook handling
- **Collaboration** — Real-time features with avatars and live cursors
- **Feature Flags** — Feature flag management
- **Cron** — Scheduled job management
- **Storage** — File upload and management
- **Internationalization** — Multi-language support
- **Notifications** — In-app notification system

## Getting Started

### Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io) (or npm/yarn/bun)
- [Stripe CLI](https://docs.stripe.com/stripe-cli) for local webhook testing

### Installation

Create a new base-forge project:

```sh
npx base-forge@latest init
```

### Setup

1. Configure your environment variables
2. Set up required service accounts (Clerk, Stripe, Resend, etc.)
3. Run the development server

For detailed setup instructions, read the [documentation](https://www.base-forge.com/docs).

## Structure

base-forge uses a monorepo structure managed by Turborepo:

```
base-forge/
├── apps/           # Deployable applications
│   ├── web/        # Marketing website (port 3001)
│   ├── app/        # Main application (port 3000)
│   ├── api/        # API server
│   ├── docs/       # Documentation
│   ├── email/      # Email templates
│   └── storybook/  # Component library
└── packages/       # Shared packages
    ├── design-system/
    ├── database/
    ├── auth/
    └── ...
```

Each app is self-contained and independently deployable. Packages are shared across apps for consistency and maintainability.

## Documentation

Full documentation is available at [base-forge.com/docs](https://www.base-forge.com/docs), including:

- Detailed setup guides
- Package documentation
- Migration guides for swapping providers
- Deployment instructions
- Examples and recipes

## Contributing

We welcome contributions! See the [contributing guide](https://github.com/vercel/base-forge/blob/main/.github/CONTRIBUTING.md) for details.

### Git Commit Messages

This project follows a strict commit message format based on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). All commits must follow this format:

```
<type>(<scope>): <short summary>

<body>

<footer>
```

#### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks, dependency updates
- **build**: Build system changes
- **ci**: CI configuration changes
- **revert**: Revert previous commit
- **bench**: Benchmark changes
- **deprecate**: Deprecate feature
- **remove**: Remove feature
- **temp**: Temporary/experimental changes

#### Examples

```
feat(auth): add clerk authentication integration
fix(api): resolve database connection timeout
docs(readme): update installation instructions
chore(deps): update next.js to v16
```

For detailed guidelines, see the [Git Commit Messages guide](https://github.com/ivishal-g/base-forge/blob/main/etc/commitlint/docs/COMMIT_GUIDE.md).

## Contributors

<a href="https://github.com/vercel/base-forge/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=vercel/base-forge" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## License

MIT
# Commitlint Setup Complete
test change
test



# Server
CLERK_SECRET_KEY="sk_test_GFkoW9YDAyOqx8a9g67D3nS8cGNyLZOvIxkgnO4M0b"
CLERK_WEBHOOK_SECRET="whsec_..."

DATABASE_URL="postgresql://neondb_owner:npg_Fj4Sem5ERdzZ@ep-cool-recipe-aik4217k-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
RESEND_TOKEN="re_..."
RESEND_FROM="noreply@yourdomain.com"
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
BETTERSTACK_API_KEY="..."
BETTERSTACK_URL="https://dummy.betterstack.com"
FLAGS_SECRET="..."
ARCJET_KEY="ajkey_..."
SVIX_TOKEN="testsk_dummy_token_for_dev"
LIVEBLOCKS_SECRET="sk_..."
BASEHUB_TOKEN="bshb_pk_eypaxar2wkvbkiiv3zh5maw9nuzpsbfcpgz0mbkcxxz1sgsza1b4vupj85wgqm3o"
VERCEL_PROJECT_PRODUCTION_URL="http://localhost:3001"
KNOCK_API_KEY="..."
KNOCK_API_KEY="..."
KNOCK_SECRET_API_KEY="..."
KNOCK_FEED_CHANNEL_ID="..."
NEXT_PUBLIC_KNOCK_API_KEY="..."
NEXT_PUBLIC_KNOCK_FEED_CHANNEL_ID="..."

# Client
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_b3V0Z29pbmctcGVnYXN1cy0yNi5jbGVyay5hY2NvdW50cy5kZXYk"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/"
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-..."
NEXT_PUBLIC_POSTHOG_KEY="phc_..."
NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.com"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_WEB_URL="http://localhost:3001"
NEXT_PUBLIC_API_URL="http://localhost:3002"
NEXT_PUBLIC_DOCS_URL="http://localhost:3004"
BETTERSTACK_URL="https://dummy.betterstack.com"

