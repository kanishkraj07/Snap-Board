
# Snapboard - Photo Sharing App (Qode.world Assignment)

## Overview

Snapboard is a photo-sharing web application where users can view snaps, post new snaps, and leave comments on existing ones. The application uses a modern tech stack to provide a seamless and responsive user experience. Snapboard allows users to upload snaps, with images securely stored using AWS S3. The backend is powered by Prisma ORM and PostgreSQL for efficient data handling.

## Technologies Used

- **Next.js** - A React framework for server-side rendering and building scalable web applications.
- **TypeScript** - A superset of JavaScript that adds type safety, improving the development experience.
- **Ant Design** - A UI design framework for building rich and interactive user interfaces.
- **Prisma** - An ORM that simplifies database queries and provides a type-safe interface.
- **PostgreSQL** - A powerful, open-source relational database used for storing snaps and user data.
- **Docker** - Containerization platform to ensure consistency across different environments and easy deployment.
- **AWS S3** - Object storage service used for storing and serving images uploaded by users.

## Features

- **Home Page**: View all snaps uploaded by users along with their associated comments.
- **Snap Upload**: Users can upload new snaps via an easy-to-use interface, with images stored in AWS S3.
- **Comments**: Users can comment on snaps to share thoughts and feedback.
- **Responsive Design**: The app is responsive, working well across both desktop and mobile devices.

## Installation Using Docker

1. **Clone the repository** (if you haven't already):

   ```bash
   git clone <repository-url>
   cd <project-folder>
