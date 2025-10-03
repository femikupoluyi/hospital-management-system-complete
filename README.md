# Hospital Management System - Complete Platform

## Overview
A comprehensive, modular, secure, and scalable hospital management platform for GrandPro HMSO. This platform enables hospital recruitment and management, daily operations, owner and patient engagement, partner integrations, and real-time oversight with analytics.

## Features

### 🏥 Core Modules

#### 1. Electronic Medical Records (EMR)
- Patient registration and management
- Medical history tracking
- Prescription management
- Lab results integration
- Appointment scheduling

#### 2. Billing & Revenue Management
- Invoice generation
- Payment processing (Cash, Card, Insurance, NHIS, HMO)
- Insurance claims management
- Revenue tracking and analytics

#### 3. Inventory Management
- Medication and supplies tracking
- Automatic reorder alerts
- Stock movement history
- Supplier management
- Batch and expiry tracking

#### 4. Staff Management
- Staff scheduling and roster
- Attendance tracking
- Performance metrics
- Department management
- Leave management

#### 5. Bed Management
- Real-time bed availability
- Admission and discharge processing
- Ward occupancy tracking
- Bed allocation system

#### 6. Analytics Dashboard
- Real-time operational metrics
- Revenue analytics
- Occupancy trends
- Performance KPIs
- Report generation

### 🔐 Security Features
- JWT-based authentication
- Role-based access control (RBAC)
- End-to-end encryption
- HIPAA/GDPR compliance ready
- Comprehensive audit logging

### 🔄 Real-time Features
- WebSocket-based live updates
- Real-time notifications
- Live dashboard metrics
- Instant alert system

## Technology Stack
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (Neon Cloud)
- **Authentication**: JWT tokens
- **Real-time**: WebSocket (ws)
- **Frontend**: HTML5, CSS3, JavaScript
- **Security**: bcryptjs for password hashing

## Installation

### Prerequisites
- Node.js 16+ 
- PostgreSQL database (or Neon Cloud account)
- npm or yarn package manager

### Setup Steps

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hospital-management-system-complete.git
cd hospital-management-system-complete
```

2. Install dependencies:
```bash
npm install
```

3. Configure database:
   - Update the database connection string in `hms-backend-fully-functional.js`
   - Default uses Neon Cloud PostgreSQL

4. Start the backend server:
```bash
npm start
# Server runs on http://localhost:5801
```

5. Start the frontend server:
```bash
npm run frontend
# Frontend runs on http://localhost:8083
```

6. Or run both together:
```bash
npm run dev
```

## Default Credentials
- Email: `admin@hospital.com`
- Password: `admin123`

## API Endpoints

### Authentication
- POST `/api/auth/login` - User login
- POST `/api/auth/register` - User registration

### Patients
- GET `/api/patients` - Get all patients
- GET `/api/patients/:id` - Get patient by ID
- POST `/api/patients` - Create new patient
- PUT `/api/patients/:id` - Update patient

### Medical Records
- GET `/api/medical-records` - Get medical records
- POST `/api/medical-records` - Create medical record

### Billing
- GET `/api/invoices` - Get all invoices
- POST `/api/invoices` - Create invoice
- POST `/api/payments` - Process payment

### Inventory
- GET `/api/inventory` - Get inventory items
- GET `/api/inventory/low-stock` - Get low stock items
- POST `/api/inventory` - Add inventory item
- PUT `/api/inventory/:id/stock` - Update stock

### Staff
- GET `/api/staff` - Get staff members
- GET `/api/schedules` - Get schedules
- POST `/api/schedules` - Create schedule

### Beds
- GET `/api/beds/available` - Get available beds
- GET `/api/wards/occupancy` - Get ward occupancy
- POST `/api/admissions` - Create admission

### Analytics
- GET `/api/analytics/dashboard` - Get dashboard metrics
- GET `/api/analytics/revenue` - Get revenue analytics
- GET `/api/analytics/occupancy-trends` - Get occupancy trends

## External Access URLs
When deployed on Morph platform:
- Backend API: `https://hms-backend-morphvm-[instance].http.cloud.morph.so`
- Frontend: `https://hms-frontend-morphvm-[instance].http.cloud.morph.so`

## Testing
Run the test suite:
```bash
npm test
```

## Project Structure
```
hospital-management-system-complete/
├── hms-backend-fully-functional.js  # Main backend server
├── hms-frontend-fully-functional.html  # Frontend application
├── hms-frontend-server.js  # Frontend server
├── package.json  # Dependencies
├── README.md  # Documentation
└── test-full-functionality.js  # Test suite
```

## Deployment Roadmap

### Phase 1 (MVP) - Completed ✅
- Partner onboarding portal
- Basic CRM
- Core hospital operations (EMR, billing, inventory)
- OCC-lite dashboards

### Phase 2 - In Progress
- Full CRM implementation
- Procurement hub
- Telemedicine MVP
- Advanced analytics

### Phase 3 - Planned
- Advanced OCC
- Training platform
- Predictive analytics
- Regional expansion

## Contributing
Please read our contributing guidelines before submitting pull requests.

## License
This project is licensed under the MIT License.

## Support
For support and questions, please contact the GrandPro HMSO technical team.

## Status
✅ **Production Ready** - All core modules functional and tested

---
Built with ❤️ for GrandPro HMSO Hospital Network
