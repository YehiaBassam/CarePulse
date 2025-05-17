# CarePulse - Healthcare Management System

## Project Overview 
CarePulse is a modern healthcare appointment management system built with Next.js. It provides a comprehensive solution for managing patient appointments, doctor schedules, and administrative tasks in a healthcare setting. 

## Features 
- Patient appointment scheduling and management 
- Doctor availability tracking 
- Administrative dashboard 
- Secure authentication with passkey protection 
- Real-time appointment status updates 
- SMS notifications for appointment confirmations and cancellations 
- Responsive design for all devices 

## Technologies Used 
- Frontend : Next.js, React, TypeScript, Tailwind CSS 
- Backend : Appwrite (BaaS) 
- Authentication : Custom passkey system 
- UI Components : Shadcn UI components 
- Data Fetching : Server Actions 
- Styling : Tailwind CSS with custom utility classes 
- Form Handling : React Hook Form 
- Data Tables : TanStack Table 
- Date/Time : React DatePicker 

## Getting Started 
### Prerequisites 
- Node.js (v18 or higher) 
- npm or yarn 
- Appwrite account 

### Installation 
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/carepulse.git
   cd carepulse
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables (see [Environment Variables](#environment-variables) section)

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application

## Admin Access 
To access the admin panel, navigate to /admin and enter the passkey when prompted. 

**Admin Passkey: 123456** 

## Project Structure 
- /app - Next.js app router pages and layouts 
- /components - Reusable UI components 
- /lib - Utility functions and API configurations 
- /public - Static assets 
- /types - TypeScript type definitions 

## Appwrite Setup 
The project uses Appwrite as a backend service with the following collections: 

- Patients 
- Doctors 
- Appointments 

## Environment Variables 
The application requires the following environment variables: 

- PROJECT_ID - Appwrite project ID 
- API_KEY - Appwrite API key 
- DATABASE_ID - Appwrite database ID 
- PATIENT_COLLECTION_ID - Appwrite collection ID for patients 
- DOCTOR_COLLECTION_ID - Appwrite collection ID for doctors 
- APPOINTMENT_COLLECTION_ID - Appwrite collection ID for appointments 
- NEXT_PUBLIC_BUCKET_ID - Appwrite storage bucket ID 
- NEXT_PUBLIC_ENDPOINT - Appwrite endpoint URL 
- NEXT_PUBLIC_ADMIN_PASSKEY - Admin access passkey 
- NEXT_PUBLIC_SENTRY_DSN - Sentry project DSN for error tracking
- SENTRY_AUTH_TOKEN - Sentry Auth Token

## Deployment

The application can be easily deployed on Vercel:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

## License 
MIT License 

## Error Tracking and Monitoring

CarePulse uses Sentry for error tracking and performance monitoring:

- Real-time error tracking and reporting
- Performance monitoring for frontend and API calls
- User session tracking for debugging user-specific issues
- Custom error boundaries to prevent UI crashes
- Environment-specific configuration (development/production)

### Sentry Setup

1. Add Sentry SDK to your project:
   ```bash
   npm install @sentry/nextjs
   # or
   yarn add @sentry/nextjs
   ```

2. Configure Sentry in your Next.js project:
   - Create `sentry.client.config.js`, `sentry.server.config.js`, and `sentry.edge.config.js` files
   - Add the Sentry initialization code with your DSN

3. Add the required environment variables:
   - NEXT_PUBLIC_SENTRY_DSN - Your Sentry project DSN
   - SENTRY_ENVIRONMENT - Environment name (development, production)

## Acknowledgements 
- Shadcn UI for component library 
- Appwrite for backend services 
- Next.js team for the framework
- Sentry for error tracking and monitoring
