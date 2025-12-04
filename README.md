# Hospital/Clinic Management System (HMS)

A complete web-based system for managing appointments, doctor schedules, patient records, reports, and billing for hospitals and clinics.

## Features

- **Patient Management**: Add, edit, and manage patient records with detailed information
- **Doctor Management**: Manage doctor profiles, specializations, and consultation fees
- **Appointment Scheduling**: Schedule, update, and track patient appointments
- **Doctor Schedules**: Set and manage doctor availability schedules
- **Billing System**: Create and manage bills, track payments, and generate invoices
- **Reports & Analytics**: 
  - Dashboard with key statistics
  - Appointment reports
  - Patient statistics
  - Doctor performance reports
  - Revenue reports

## Technology Stack

### Backend
- Node.js with Express
- TypeScript
- SQLite database
- RESTful API

### Frontend
- React with TypeScript
- React Router for navigation
- Axios for API calls
- Modern, responsive UI

## Installation

1. **Install dependencies for all projects:**
   ```bash
   npm run install-all
   ```

   Or install separately:
   ```bash
   # Root dependencies
   npm install
   
   # Backend dependencies
   cd server
   npm install
   
   # Frontend dependencies
   cd ../client
   npm install
   ```

2. **Create data directory:**
   ```bash
   mkdir server/data
   ```

## Running the Application

### Development Mode (Both Frontend and Backend)

From the root directory:
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend development server on `http://localhost:3000`

### Run Separately

**Backend only:**
```bash
cd server
npm run dev
```

**Frontend only:**
```bash
cd client
npm start
```

## API Endpoints

### Patients
- `GET /api/patients` - Get all patients
- `GET /api/patients/:id` - Get patient by ID
- `POST /api/patients` - Create new patient
- `PUT /api/patients/:id` - Update patient
- `DELETE /api/patients/:id` - Delete patient
- `POST /api/patients/:id/records` - Add patient record

### Doctors
- `GET /api/doctors` - Get all doctors
- `GET /api/doctors/:id` - Get doctor by ID
- `POST /api/doctors` - Create new doctor
- `PUT /api/doctors/:id` - Update doctor
- `DELETE /api/doctors/:id` - Delete doctor

### Appointments
- `GET /api/appointments` - Get all appointments
- `GET /api/appointments/:id` - Get appointment by ID
- `POST /api/appointments` - Create new appointment
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Delete appointment

### Schedules
- `GET /api/schedules` - Get all schedules
- `GET /api/schedules/:id` - Get schedule by ID
- `POST /api/schedules` - Create new schedule
- `PUT /api/schedules/:id` - Update schedule
- `DELETE /api/schedules/:id` - Delete schedule

### Billing
- `GET /api/billing` - Get all bills
- `GET /api/billing/:id` - Get bill by ID
- `POST /api/billing` - Create new bill
- `PUT /api/billing/:id` - Update bill
- `DELETE /api/billing/:id` - Delete bill
- `GET /api/billing/summary/stats` - Get billing statistics

### Reports
- `GET /api/reports/dashboard` - Get dashboard statistics
- `GET /api/reports/appointments` - Get appointments report
- `GET /api/reports/patients` - Get patients report
- `GET /api/reports/doctors` - Get doctors report
- `GET /api/reports/revenue` - Get revenue report

## Database Schema

The system uses SQLite with the following main tables:
- `patients` - Patient information
- `doctors` - Doctor profiles
- `schedules` - Doctor availability schedules
- `appointments` - Appointment records
- `billing` - Billing and payment records
- `patient_records` - Medical records and visit history

## Project Structure

```
Hospital_Clinic Management System/
├── server/                 # Backend API
│   ├── src/
│   │   ├── index.ts       # Express server setup
│   │   ├── database.ts    # Database initialization
│   │   └── routes/        # API route handlers
│   ├── data/              # SQLite database files
│   └── package.json
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service functions
│   │   └── App.tsx
│   └── package.json
└── package.json           # Root package.json
```

## Environment Variables

Create a `.env` file in the `server` directory (optional):
```
PORT=5000
```

## Building for Production

**Build frontend:**
```bash
cd client
npm run build
```

The built files will be in `client/build/` directory.

## License

MIT

## Contributing

Feel free to submit issues and enhancement requests!

