# Nuxt Blocks

<p align="center">
  <strong>Reusable feature blocks for Nuxt 3.</strong>
</p>

<p align="center">
  Stop rebuilding infrastructure. Start building products.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Nuxt-3-00DC82?style=flat-square&logo=nuxt&logoColor=white" alt="Nuxt 3" />
  <img src="https://img.shields.io/badge/Vue-3-42b883?style=flat-square&logo=vue.js&logoColor=white" alt="Vue 3" />
  <img src="https://img.shields.io/badge/TypeScript-Ready-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/License-MIT-black?style=flat-square" alt="MIT License" />
</p>

---

## What is Nuxt Blocks?

**Nuxt Blocks** is a collection of reusable feature blocks for Nuxt 3 applications.

Instead of starting every project by rebuilding the same infrastructure, you can add only the feature you need and continue building your actual product.

```bash
npx nuxt-blocks add auth
```

The generated code is copied directly into your project.

You own it.  
You can modify it.  
You can extend it.  
No vendor lock-in.

---

## Why?

Most Nuxt projects start with the same repetitive tasks:

- Authentication
- User profiles
- Permissions
- Uploads
- Notifications
- Billing

These features are important, but they are usually not the actual product.

Nuxt Blocks helps you skip the boring setup and focus on building the thing users actually care about.

---

## Auth Block

The first block in Nuxt Blocks is focused on authentication.

```bash
npx nuxt-blocks add auth
```

### What it adds

The Auth Block is planned to include:

- Login page
- Registration page
- Forgot password flow
- Password reset flow
- Email verification
- Session handling
- Protected routes
- Route middleware
- User composable
- TypeScript support

### Generated structure

Example output:

```text
pages/
├── login.vue
└── register.vue

components/
└── auth/

composables/
└── useAuth.ts

middleware/
└── auth.ts

server/
└── api/
    └── auth/
```

### The idea

Nuxt Blocks does not try to hide authentication behind a black box.

It gives you real code inside your project.

That means you can:

- Read it
- Change it
- Remove it
- Adapt it to your product

No magic.  
No hidden runtime dependency.  
Just code you control.

> Status: 🚧 In Development

---

## Planned Blocks

Other blocks planned for future versions:

- Profile
- Permissions
- Uploads
- Notifications
- Search
- Pagination
- SEO

---

## Principles

Nuxt Blocks is:

- **Modular** — install only what you need
- **Editable** — generated code belongs to your project
- **Practical** — focused on common app features
- **Nuxt-first** — built specifically for Nuxt 3 projects

Nuxt Blocks is not:

- A full starter template
- A SaaS boilerplate
- A UI library
- A framework

---

## Contributing

Feedback, ideas and contributions are welcome.

Open an issue if you want to suggest a new block, improve an existing one or discuss the project direction.

---

## License

MIT
