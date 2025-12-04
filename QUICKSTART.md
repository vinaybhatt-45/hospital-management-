# Quick Start Guide

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn

## Setup Steps

1. **Install all dependencies:**
   ```bash
   npm run install-all
   ```

2. **Start the development servers:**
   ```bash
   npm run dev
   ```

   This will start:
   - Backend API server on `http://localhost:5000`
   - Frontend React app on `http://localhost:3000`

3. **Access the application:**
   - Open your browser and navigate to `http://localhost:3000`
   - The database will be automatically created in `server/data/hms.db` on first run

## First Steps

1. **Add Doctors:**
   - Navigate to "Doctors" in the sidebar
   - Click "+ Add Doctor" to create doctor profiles
   - Add their specialization, consultation fees, etc.

2. **Add Doctor Schedules:**
   - Go to "Schedules" section
   - Set availability for each doctor by day and time

3. **Add Patients:**
   - Navigate to "Patients"
   - Click "+ Add Patient" to register new patients

4. **Create Appointments:**
   - Go to "Appointments"
   - Click "+ New Appointment"
   - Select patient and doctor, choose date and time

5. **Manage Billing:**
   - Navigate to "Billing"
   - Create bills for services, consultations, medicines, etc.
   - Track payment status

6. **View Reports:**
   - Check the "Dashboard" for overview statistics
   - Use "Reports" section for detailed analytics

## Troubleshooting

- **Port already in use:** Change the PORT in `server/src/index.ts` or set environment variable
- **Database errors:** Delete `server/data/hms.db` and restart the server to recreate the database
- **CORS errors:** Ensure backend is running on port 5000 and frontend on port 3000

## API Testing

You can test the API directly using:
- Postman
- curl
- Browser (for GET requests)

Example:
```bash
curl http://localhost:5000/api/health
```

