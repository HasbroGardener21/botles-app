# Botles

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). The project integrates [Clerk](https://clerk.dev/) for user authentication, [Neon Tech](https://neon.tech/) for database management, and access to Google Drive data using specific Google Scopes.

## Table of Contents
- [Getting Started](#getting-started)
- [Features](#features)
- [Environment Variables](#environment-variables)
- [Setup Instructions](#setup-instructions)
- [Running the Development Server](#running-the-development-server)
- [Deployment](#deploy-on-vercel)

## Features
- **Clerk Authentication**: Secure user authentication with Clerk.
- **Google Scopes Integration**: Read-only access to Google Drive content, metadata, and activity.
- **Neon Tech Database**: Cloud-based PostgreSQL database integration.

## Environment Variables
To run this project, you will need to add the following environment variables to your `.env` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

DATABASE_URL=
```

### Google Scopes
The following Google scopes are used to grant read-only access to Google Drive data:
- `https://www.googleapis.com/auth/drive.readonly`: Allows read-only access to Google Drive files.
- `https://www.googleapis.com/auth/drive.metadata`: Provides access to metadata of Google Drive files.
- `https://www.googleapis.com/auth/drive.activity.readonly`: Grants read-only access to view Google Drive activity logs.

## Setup Instructions

1. **Clerk Authentication**:  
   - Create an account with [Clerk](https://clerk.dev/).
   - Set up an application and get your `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`.
   - In your Clerk dashboard, configure Google OAuth settings to include the following scopes for Google Drive access:
     - `https://www.googleapis.com/auth/drive.readonly`
     - `https://www.googleapis.com/auth/drive.metadata`
     - `https://www.googleapis.com/auth/drive.activity.readonly`
   - Add your Clerk keys to the `.env` file as shown above.

2. **Neon Tech Database**:
   - Sign up at [Neon Tech](https://neon.tech/) to create a PostgreSQL database.
   - Obtain the connection URL for your database and add it to the `DATABASE_URL` variable in your `.env` file.

3. **Google API Setup**:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Create or select a project and enable the Google Drive API.
   - Configure OAuth consent and set up the necessary OAuth 2.0 credentials for web application access.
   - In Clerk, configure your Google OAuth settings to include the specified scopes.

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/botles-team/botles-app.git
cd botles-app
npm install
```

## Running the Development Server

To start the development server, use one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
