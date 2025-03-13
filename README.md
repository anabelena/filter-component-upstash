# Filter Component with Next.js and Upstash

![Next.js](https://img.shields.io/badge/Next.js-15-blue)
![React](https://img.shields.io/badge/React-19-blue)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4-blue)
![Upstash](https://img.shields.io/badge/Upstash-Redis-green)

## Overview

This project is a **filter component** built with **Next.js 15**, **React 19**, and **Tailwind CSS 4**, utilizing **Upstash Redis** for efficient state management and caching. It demonstrates an optimized approach to handling dynamic filters in an eCommerce setting.

## Features

✅ Built with **Next.js 15** for fast server-side rendering and API routes  
✅ Uses **React 19** with modern features like **useOptimistic**  
✅ Styled with **Tailwind CSS 4** for a clean and responsive UI  
✅ Integrated **Upstash Redis** for fast and scalable filter caching  
✅ Optimized for performance and minimal re-renders  

## Screenshot

![Filter Component](/public/screenshot.png)

## Tech Stack

- **Next.js 15** – SSR, ISR, and API routes  
- **React 19** – Optimistic updates & Suspense  
- **Tailwind CSS 4** – Modern styling approach  
- **Upstash Redis** – Serverless database for caching  
- **TypeScript** – Type safety and better development experience  

## Installation & Usage

### 1. Clone the Repository

```bash
git clone https://github.com/anabelena/filter-component-upstash.git
cd filter-component-upstash
```

### 2. Install Dependencies

```bash
yarn install  # or npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file and add the following:

```env
UPSTASH_REDIS_REST_URL=your-upstash-redis-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-redis-token
```

### 4. Run the Development Server

```bash
yarn dev  # or npm run dev
```

Visit `http://localhost:3000` in your browser.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---
Made with ❤️ by [Ana Belena](https://github.com/anabelena)
