# Take-Home Assessment: Dashboard Application - aTrace

## Overview

This project implements a responsive dashboard application for managing and visualizing product data. The key features include summary boxes, a data table with paginated product listings, and forms for creating and editing products. The application is built using TypeScript, [Next.js](https://nextjs.org), TailwindCSS, and Zustand, with all data stored in local storage for simplicity.

## Table of Contents

1. Setup Instructions
2. Implementation Approach
3. Assumptions
4. Features
5. Deployment

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or later)
- npm / pnpm or yarn
- A code editor like VS Code

## Cloning the Repository

To get the project running on your PC:
First, clone the repository and install the dependencies using:

```bash
git clone (repository URL)

# to install the dependencies
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Variables

No external API integration is required, so environment variables are not needed.

## Implementation approach

### Summary

The project is structured into modular components and pages to ensure scalability and maintainability. TailwindCSS provides a modern styling approach, while Zustand efficiently manages the application state.

### Project structure
Directory structure:
└── williamwebs-atrace-takehome-assessment/
    ├── README.md
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── card/
    │   │   ├── ProductList.tsx
    │   │   └── Summary.tsx
    │   ├── form/
    │   │   └── AddProduct.tsx
    │   ├── input/
    │   │   └── InputField.tsx
    │   ├── modal/
    │   │   └── Modal.tsx
    │   ├── nav/
    │   │   └── SideBar.tsx
    │   ├── pagination/
    │   │   └── Pagination.tsx
    │   └── table/
    │       └── Table.tsx
    ├── constants/
    │   └── constants.js
    ├── public/
    │   └── images/
    ├── store/
    │   └── products.ts
    └── types/
        └── types.d.ts


### Features Implemented

1. Dashboard Page:

- Summary boxes to display total products and their statuses.
- A paginated data table for products with CRUD capabilities.

2. Form for Add/Edit Products:

- A reusable form component with fields for product details and packages.

3. Pagination:

- A simple paginated approach to handle product data, with a default page size of 5.

4. Local Storage for Data:

- Dummy data is created and manipulated locally using the provided schema and GraphQL-style queries/mutations.

### Assumptions

1. Local Storage: All product data is stored and managed locally without external API calls.
2. Pagination: A fixed page size of 5 is used for simplicity, and all pagination logic is handled on the client side.
3. Responsiveness: The app is designed to work seamlessly across mobile, tablet, and desktop devices.
4. Time Format: ETA is displayed in `dd/MM/yyyy hh:mm aaa` format and converted to/from Unix time as needed.

### Features

#### Dashboard

1. Summary Boxes:

- Total products (`countProducts` query).
- Status-wise product count (`productsByStatus` query).

2. Paginated Table:

- Displays product details: `ID, Title, Description, Status, and ETA`.

3. CRUD Operations:

- Create and update products using reusable forms.
- Delete products for extra functionality.
- Add/Edit Form fields with validation.

4. Pagination

- A simple `"Next"` and `"Previous"` button implementation.
- Keeps track of the current page in state.

## Deploy on Vercel

The Next.js application was deployed to use the [Vercel Platform](https://vercel.com) and the Live Demo can be access [here](https://atrace-takehome-assessment.vercel.app/)
