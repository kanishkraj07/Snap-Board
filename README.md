
# Snapboard - Photo Sharing Application

## Overview

Snapboard is a photo-sharing web application where users can view snaps, post new snaps, and leave comments on existing ones. The application uses a modern tech stack to provide a seamless and responsive user experience. Snapboard allows users to upload snaps, with images securely stored using AWS S3. The backend is powered by Prisma ORM and PostgreSQL for efficient data handling.

The application has been deployed on [Vercel](https://qode-assignment-jvnz.vercel.app/) for easy access.


## Technologies Used

- **Next.js** - A React framework for server-side rendering and building scalable web applications.
- **TypeScript** - A superset of JavaScript that adds type safety, improving the development experience.
- **Ant Design** - A UI design framework for building rich and interactive user interfaces.
- **Prisma** - An ORM that simplifies database queries and provides a type-safe interface.
- **PostgreSQL** - A powerful, open-source relational database used for storing snaps and user data.
- **Docker** - Docker is used to run the application locally, ensuring consistency across environments and facilitating deployment.
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

To run the Snapboard app using Docker, follow these steps:

2. **Build the Docker image**

```bash
docker build -t <name> .
```

3. **Run the Docker image**

```bash
docker run -d -p 3000:3000 <name>
