# Setup Guide

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure Firebase**
   
   Create a `.env` file in the root directory with your Firebase configuration:
   
   ```env
   REACT_APP_FIREBASE_API_KEY=your-api-key-here
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789012
   REACT_APP_FIREBASE_APP_ID=1:123456789012:web:abcdefghijklmnop
   ```

3. **Update Firebase Config**
   
   Update `src/firebase/config.ts` with your actual Firebase configuration values.

4. **Start the application**
   ```bash
   npm start
   ```

## Firebase Setup Steps

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name (e.g., "user-management-system")
4. Follow the setup wizard

### 2. Enable Authentication
1. In Firebase Console, go to "Authentication"
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" provider
5. Add your domain to authorized domains

### 3. Setup Firestore Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location for your database

### 4. Get Configuration
1. In Firebase Console, go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" and select "Web"
4. Register your app and copy the configuration

### 5. Security Rules
Update Firestore security rules in Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Features Overview

### Authentication
- Login with email/password
- Signup with full user details
- Form validation with React Hook Form + Yup
- Persistent login state with localStorage

### Product Listing
- Fetches products from Fake Store API
- Responsive grid layout
- Search by product title
- Filter by category
- Pagination

### Profile Management
- Display user information
- Account statistics
- Logout functionality

### Responsive Design
- Mobile-first approach
- Adapts to all screen sizes
- Material-UI components

## Troubleshooting

### Common Issues

1. **Firebase connection errors**
   - Check your Firebase configuration
   - Ensure Authentication is enabled
   - Verify Firestore database is created

2. **TypeScript errors**
   - The application should work despite TypeScript warnings
   - These are related to Material-UI version compatibility

3. **Build errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`

### Development Notes

- The app uses React 19 with TypeScript
- Material-UI v7 for styling
- Firebase v10 for backend services
- React Router v6 for navigation

## Testing the Application

1. **Signup Flow**
   - Navigate to `/signup`
   - Fill in all required fields
   - Submit the form
   - Should redirect to products page

2. **Login Flow**
   - Navigate to `/login`
   - Use credentials from signup
   - Should redirect to products page

3. **Product Listing**
   - Browse products
   - Test search functionality
   - Test category filtering
   - Test pagination

4. **Profile Page**
   - Click profile button in header
   - View user information
   - Test logout functionality

## Deployment

To build for production:

```bash
npm run build
```

The build folder will contain the production-ready application.
