const firebaseConfig = {
  apiKey: "AIzaSyCjHvHwlbPejTpcuXNscVbXOHht0SoF98M",
  authDomain: "estatement-81a77.firebaseapp.com",
  projectId: "estatement-81a77",
  storageBucket: "estatement-81a77.firebasestorage.app",
  messagingSenderId: "661540457267",
  appId: "1:661540457267:web:bda7ec2d44708981638c46",
  measurementId: "G-8G9HXY8Y8C"
};

// Initialize with error handling
try {
  firebase.initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
} catch (error) {
  console.log('Firebase initialization error:', error);
}
