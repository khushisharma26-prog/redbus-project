import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLang: 'en' | 'hi' = 'en';

  translations: any = {
 en: {
  title: 'RED BUS',
  routes: 'Routes',
  bookTicket: 'bookTicket',
  notifications: 'Notifications',
  dark: 'Dark Mode',
  light: 'Light Mode',
  reviews: 'Route Reviews',
  averageRating: 'Average Rating',
  submitReview: 'Submit Review',
  community: 'Community Posts',
  post: 'Post',
  name: 'Name',
  email: 'Email',
  source: 'Source',
  destination: 'Destination',
  createPost: 'Create Post',
  login: 'Login',
  signup: 'Sign Up',
  password: 'Password',
  noAccount: "Don't have an account?",
  profile: 'My Profile',
  logout: 'Logout'
},
hi: {
  title: 'रेड बस',
  routes: 'रूट्स',
  bookTicket: 'टिकट बुक करें',
  notifications: 'सूचनाएं',
  dark: 'डार्क मोड',
  light: 'लाइट मोड',
  reviews: 'मार्ग समीक्षाएँ',
  averageRating: 'औसत रेटिंग',
  submitReview: 'समीक्षा जोड़ें',
  community: 'समुदाय पोस्ट',
  post: 'पोस्ट करें',
  name: 'नाम',
  email: 'ईमेल',
  source: 'स्रोत',
  destination: 'गंतव्य',
  createPost: 'पोस्ट बनाएं',
  login: 'लॉगिन',
  signup: 'साइन अप',
  password: 'पासवर्ड',
  noAccount: 'खाता नहीं है?',
  profile: 'मेरी प्रोफ़ाइल',
  logout: 'लॉगआउट'
  
}
  };

  toggleLanguage() {
    
    this.currentLang = this.currentLang === 'en' ? 'hi' : 'en';
  }

  t(key: string): string {
    return this.translations[this.currentLang][key] || key;
  }
}
