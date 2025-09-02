# User Management System

A fully responsive React application with authentication, profile management, and product listing features.

## Features

### 🔐 Authentication
- **Login & Signup pages** with form validation
- **Firebase Authentication** (Email/Password)
- **Firebase Firestore** for user data storage
- **React Context API** for state management
- **localStorage persistence** for login state
- **Form validation** using React Hook Form + Yup

### 🛍️ Product Listing
- **Fake Store API** integration
- **Responsive grid layout** (mobile/tablet/desktop)
- **Search functionality** by product title
- **Category filtering**
- **Pagination** support
- **Product cards** with images, titles, prices, and ratings

### 👤 Profile Management
- **User profile page** with personal information
- **Display user details** from Firebase Auth
- **Responsive design** for all screen sizes
- **Logout functionality**

### 🎨 UI/UX
- **Material-UI** components and styling
- **Responsive design** for all devices
- **Modern gradient backgrounds**
- **Clean and intuitive interface**
- **Loading states** and error handling

## Tech Stack

- **React 19** with TypeScript
- **React Router v6** for navigation
- **React Context API** for state management
- **Firebase Authentication & Firestore**
- **Material-UI** for styling
- **React Hook Form** for form handling
- **Yup** for validation
- **Fake Store API** for products

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Firebase project setup

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd user-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Firebase Setup**
   
   Create a Firebase project and update the configuration in `src/firebase/config.ts`:
   
   ```typescript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id"
   };
   ```

4. **Enable Authentication**
   - Go to Firebase Console > Authentication
   - Enable Email/Password authentication
   - Add your domain to authorized domains

5. **Setup Firestore Database**
   - Go to Firebase Console > Firestore Database
   - Create database in test mode
   - Set up security rules for the `users` collection

6. **Start the development server**
   ```bash
   npm start
   ```

   The application will open at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── Login.tsx
│   │   ├── Signup.tsx
│   │   └── PrivateRoute.tsx
│   ├── products/
│   │   └── ProductList.tsx
│   └── profile/
│       └── Profile.tsx
├── contexts/
│   └── AuthContext.tsx
├── firebase/
│   └── config.ts
├── utils/
│   └── validationSchemas.ts
├── App.tsx
└── index.tsx
```

## Routes

- `/login` - Login page
- `/signup` - Signup page
- `/products` - Product listing page (protected)
- `/profile` - User profile page (protected)
- `/` - Redirects to `/products`

## Features in Detail

### Authentication Flow
1. User visits the app
2. If not logged in → redirected to login page
3. If logged in → redirected to products page
4. Login state persists across browser sessions

### Product Listing
- Fetches products from Fake Store API
- Displays products in responsive grid
- Search by product title
- Filter by category
- Pagination for large product lists
- Product cards with hover effects

### Profile Management
- Displays user information from Firebase
- Shows account statistics
- Quick actions for navigation
- Logout functionality

## Responsive Design

The application is fully responsive and adapts to:
- **Mobile** (xs): Single column layout
- **Tablet** (sm/md): 2-3 column grid
- **Desktop** (lg+): 4 column grid

## Firebase Security Rules

Example Firestore security rules for the `users` collection:

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

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## Environment Variables

Create a `.env` file in the root directory for Firebase configuration:

```env
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.
