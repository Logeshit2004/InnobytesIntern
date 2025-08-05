King Sukh Guest House - Project Documentation
Table of Contents
Project Overview

Tech Stack

Features

File Structure

Installation & Setup

Core Components

API Endpoints

UI/UX Design

Responsive Design

Performance Optimizations

Browser Compatibility

Security Features

Testing

Deployment

Maintenance

Contributing

License

Project Overview
King Sukh Guest House is a premium hotel booking website designed to provide a luxurious digital experience for guests seeking royal accommodation in the beautiful hills of West Bengal. The project combines elegant design with modern web technologies to create an immersive booking platform.

Project Goals
Create an engaging, royal-themed booking experience

Implement advanced booking management system

Provide seamless user interaction across all devices

Deliver high-performance web application

Ensure accessibility and SEO optimization

Target Audience
Leisure travelers seeking luxury accommodation

Business travelers requiring premium facilities

Couples looking for romantic getaways

Families planning hill station vacations

Corporate clients organizing events

Tech Stack
Frontend Technologies
Technology	Version	Purpose
HTML5	Latest	Semantic markup and structure
CSS3	Latest	Styling, animations, and responsive design
JavaScript (ES6+)	Latest	Interactive functionality and DOM manipulation
Font Awesome	6.0.0	Icon library for UI elements
Google Fonts	Latest	Custom typography (Inter, Playfair Display)
CSS Frameworks & Methodologies
CSS Grid & Flexbox - Modern layout systems

CSS Custom Properties - Theming and consistent design tokens

CSS Animations & Transitions - Smooth user interactions

BEM Methodology - Component-based CSS architecture

JavaScript Architecture
ES6+ Classes - Object-oriented programming structure

Module Pattern - Code organization and encapsulation

Event-Driven Architecture - Reactive user interactions

Async/Await - Modern asynchronous programming

Design System
Golden Royal Theme - Luxury color palette

Typography Scale - Consistent text hierarchy

Spacing System - Harmonious layout proportions

Animation Library - Smooth micro-interactions

Features
🏠 Core Features
1. Dynamic Booking System
Multi-step booking process with form validation

Real-time availability checking (simulated)

Guest management (adults, children, infants)

Room type selection with pricing

Date validation and conflict prevention

2. Advanced Room Management
6 different room categories with detailed information

Dynamic filtering by price, category, and amenities

High-quality image galleries for each room

Real-time pricing and availability display

Detailed amenity lists and room features

3. Interactive Gallery
Filterable photo gallery with 10+ categories

Lightbox functionality with navigation

Image optimization and lazy loading

Social sharing capabilities

Download functionality for high-res images

4. Virtual Tour System
4 comprehensive tour sections:

Property Overview

Royal Rooms

Amenities Showcase

Natural Surroundings

Video integration with autoplay controls

Interactive navigation between tour sections

5. Booking Status Management
Multi-tab booking center:

Search existing bookings

View booking history

Modify reservations

Cancel bookings

Multiple search methods (ID, email, phone)

Mock booking data with realistic information

Status tracking (confirmed, pending, completed, cancelled)

🤖 AI-Powered Features
Royal Concierge Assistant
Intelligent chatbot with contextual responses

Quick action buttons for common queries

Auto-responses for booking inquiries

Real-time messaging with typing indicators

Action triggers (opens booking modal, status center)

🎨 Design Features
Advanced Animations
Loading screen with progress indicator

Scroll-triggered animations using Intersection Observer

Hover effects and micro-interactions

Ripple effects on button clicks

Floating animations for cards

Smooth page transitions

Responsive Design
Mobile-first approach with progressive enhancement

Flexible grid system adapting to all screen sizes

Touch-friendly interactions for mobile devices

Optimized typography scaling across devices

Adaptive navigation with hamburger menu

📱 User Experience Features
Navigation & Accessibility
Smooth scrolling navigation

Keyboard shortcuts (Ctrl+B for booking, Ctrl+S for status)

Focus management for accessibility

Screen reader compatible markup

High contrast design elements

Performance Features
Image lazy loading for faster page loads

Critical CSS inlining for above-the-fold content

JavaScript code splitting for optimal loading

Service Worker ready for PWA conversion

Optimized asset delivery

File Structure
text
king-sukh-guest-house/
│
├── index.html                 # Main HTML file
├── styles.css                 # Main CSS file
├── script.js                  # Main JavaScript file
│
├── assets/                    # Static assets directory
│   ├── images/               # Image files
│   │   ├── rooms/           # Room images
│   │   ├── gallery/         # Gallery images
│   │   ├── amenities/       # Amenity images
│   │   └── icons/           # Icon files
│   │
│   ├── videos/              # Video files for virtual tours
│   └── fonts/               # Custom font files (if any)
│
├── docs/                    # Documentation files
│   ├── README.md           # Project documentation
│   ├── API.md              # API documentation
│   └── CHANGELOG.md        # Version history
│
├── tests/                   # Test files
│   ├── unit/               # Unit tests
│   ├── integration/        # Integration tests
│   └── e2e/                # End-to-end tests
│
└── deploy/                  # Deployment configuration
    ├── .htaccess           # Apache configuration
    ├── nginx.conf          # Nginx configuration
    └── service-worker.js   # PWA service worker
Installation & Setup
Prerequisites
Modern web browser (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)

Local web server (optional for development)

Code editor (VS Code recommended)

Quick Start
1. Clone or Download
bash
# Clone repository
git clone https://github.com/your-username/king-sukh-guest-house.git

# Or download ZIP and extract
2. Local Development
bash
# Navigate to project directory
cd king-sukh-guest-house

# Option 1: Use Python SimpleHTTPServer
python -m http.server 8000

# Option 2: Use Node.js http-server
npx http-server

# Option 3: Use PHP built-in server
php -S localhost:8000

# Option 4: Use Live Server extension in VS Code
3. Open Browser
text
http://localhost:8000
Production Deployment
Web Server Configuration
text
# .htaccess for Apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [QSA,L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
Core Components
1. KingSukhGuestHouse Class
The main JavaScript class that orchestrates all functionality:

javascript
class KingSukhGuestHouse {
    constructor() {
        // Initialize core properties
        this.loadingProgress = 0;
        this.currentStep = 1;
        this.bookingData = {};
        this.mockBookings = this.generateMockBookings();
        this.init();
    }
    
    // Core initialization methods
    init() {
        this.setupLoader();
        this.setupNavigation();
        this.setupBookingModal();
        this.setupVirtualTour();
        this.setupBookingStatus();
        // ... more setup methods
    }
}
Key Methods:
Method	Purpose	Parameters
setupLoader()	Initializes loading screen with progress	None
setupNavigation()	Configures smooth scrolling and mobile menu	None
setupBookingModal()	Creates multi-step booking form	None
setupVirtualTour()	Initializes video tour functionality	None
setupBookingStatus()	Configures booking search and management	None
filterRooms(filter)	Filters room display by category	filter: string
openBookingModal()	Opens booking modal dialog	None
performBookingSearch()	Searches for existing bookings	None
showNotification(message, type)	Displays user notifications	message: string, type: string
2. Booking System Architecture
Multi-Step Form Flow:
Date Selection - Check-in/out date validation

Guest Count - Adult/children/infant counters

Guest Details - Contact information and room selection

Confirmation - Final booking submission

Form Validation:
javascript
validateCurrentStep() {
    const currentStepEl = document.querySelector('.form-step.active');
    const requiredFields = currentStepEl.querySelectorAll('input[required], select[required]');
    
    for (let field of requiredFields) {
        if (!field.value) {
            field.focus();
            this.showNotification('Please fill in all required fields', 'error');
            return false;
        }
    }
    return true;
}
3. Virtual Tour System
Video Management:
javascript
setupVirtualTour() {
    const tourNavBtns = document.querySelectorAll('.tour-nav-btn');
    const tourSections = document.querySelectorAll('.tour-section');

    tourNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tourType = btn.dataset.tour;
            this.switchTourSection(tourType);
        });
    });
}
Tour Sections:
Property Overview - Exterior and common areas

Royal Rooms - Interior room showcases

Amenities - Facilities and services

Surroundings - Natural landscape and location

4. Booking Status Management
Search Methods:
Booking ID + Email - Primary identification method

Name + Email + Date - Alternative search option

Phone + Last Name - Secondary identification

Mock Data Structure:
javascript
generateMockBookings() {
    return {
        id: 'KSH2024001234',
        guestName: 'John Doe',
        email: 'john@example.com',
        phone: '+91 9876543210',
        roomType: 'Royal Chambers',
        checkIn: '2024-03-15',
        checkOut: '2024-03-18',
        guests: 2,
        status: 'confirmed',
        totalAmount: 10500
    };
}
API Endpoints
Mock API Structure
The current implementation uses mock data, but here's the planned API structure for backend integration:

Authentication Endpoints
text
POST /api/auth/login
POST /api/auth/register
POST /api/auth/forgot-password
Booking Endpoints
text
GET    /api/bookings              # Get all bookings
POST   /api/bookings              # Create new booking
GET    /api/bookings/:id          # Get specific booking
PUT    /api/bookings/:id          # Update booking
DELETE /api/bookings/:id          # Cancel booking
GET    /api/bookings/search       # Search bookings
Room Management
text
GET    /api/rooms                 # Get all rooms
GET    /api/rooms/:id             # Get specific room
GET    /api/rooms/availability    # Check availability
POST   /api/rooms/reserve         # Reserve room
Content Management
text
GET    /api/gallery               # Get gallery images
GET    /api/amenities             # Get amenities list
GET    /api/reviews               # Get customer reviews
POST   /api/contact               # Send contact message
Request/Response Examples
Create Booking Request:
json
{
  "guestName": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "checkIn": "2024-03-15",
  "checkOut": "2024-03-18",
  "roomType": "royal-chambers",
  "adults": 2,
  "children": 0,
  "specialRequests": "Late check-in requested"
}
Booking Response:
json
{
  "status": "success",
  "bookingId": "KSH2024001234",
  "confirmationNumber": "RC15032024",
  "message": "Booking confirmed successfully",
  "bookingDetails": {
    "id": "KSH2024001234",
    "status": "confirmed",
    "totalAmount": 10500,
    "paymentStatus": "pending"
  }
}
UI/UX Design
Design System
Color Palette
css
:root {
  /* Primary Colors */
  --royal-gold: #FFD700;
  --deep-gold: #B8860B;
  --bright-gold: #FFA500;
  
  /* Accent Colors */
  --royal-purple: #663399;
  --royal-red: #8B0000;
  --cream-white: #FFF8DC;
  
  /* Text Colors */
  --text-primary: #2C1810;
  --text-secondary: #8B4513;
  
  /* Background Colors */
  --background-light: #FFF8DC;
  --background-dark: #F5F5DC;
}
Typography Scale
css
/* Font Families */
--font-primary: 'Inter', sans-serif;
--font-display: 'Playfair Display', serif;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
Spacing System
css
/* Spacing Scale */
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
Component Design
Button Variants
css
/* Primary Button */
.btn-primary {
  background: var(--gradient-royal);
  color: var(--text-primary);
  border: 2px solid var(--deep-gold);
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  transition: all 0.3s ease;
}

/* Outline Button */
.btn-outline {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--royal-gold);
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  transition: all 0.3s ease;
}
Card Components
css
.room-card {
  background: linear-gradient(145deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 248, 220, 0.9) 100%);
  border-radius: 25px;
  border: 3px solid var(--royal-gold);
  box-shadow: 0 15px 40px var(--shadow-light);
  backdrop-filter: blur(15px);
  transition: all 0.4s ease;
}
Animation Design
Loading Animations
css
@keyframes crownFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
Interaction Animations
css
@keyframes pulseRing {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
Responsive Design
Breakpoint Strategy
css
/* Mobile First Approach */
/* Base styles: 320px - 767px (Mobile) */

@media (min-width: 768px) {
  /* Tablet: 768px - 1023px */
}

@media (min-width: 1024px) {
  /* Desktop: 1024px - 1199px */
}

@media (min-width: 1200px) {
  /* Large Desktop: 1200px+ */
}
Responsive Components
Navigation
css
/* Mobile Navigation */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 80px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 80px);
    background: rgba(255, 248, 220, 0.98);
    flex-direction: column;
    transition: left 0.3s ease;
  }
  
  .nav-menu.active {
    left: 0;
  }
  
  .hamburger {
    display: flex;
  }
}
Grid System
css
/* Responsive Cards Grid */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
Typography Scaling
css
.title-main {
  font-size: clamp(2.8rem, 6vw, 5rem);
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.8rem);
}
Touch Interactions
Touch-Friendly Buttons
css
.touch-target {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1.5rem;
}

@media (hover: none) and (pointer: coarse) {
  .hover-effect:hover {
    /* Disable hover effects on touch devices */
    transform: none;
  }
}
Performance Optimizations
Image Optimization
Lazy Loading Implementation
javascript
setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}
Responsive Images
xml
<img src="image-400.jpg" 
     srcset="image-400.jpg 400w, 
             image-800.jpg 800w, 
             image-1200.jpg 1200w"
     sizes="(max-width: 768px) 100vw, 
            (max-width: 1024px) 50vw, 
            33vw"
     alt="Room Image"
     loading="lazy">
JavaScript Optimization
Code Splitting Strategy
javascript
// Dynamic imports for non-critical features
async function loadVirtualTour() {
    const { VirtualTour } = await import('./virtual-tour.js');
    return new VirtualTour();
}

// Intersection Observer for animations
const animationObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);
Event Delegation
javascript
// Instead of individual event listeners
document.addEventListener('click', (e) => {
    if (e.target.matches('.book-room-btn')) {
        const roomType = e.target.dataset.room;
        this.bookSpecificRoom(roomType);
    }
    
    if (e.target.matches('.filter-btn')) {
        const filter = e.target.dataset.filter;
        this.filterRooms(filter);
    }
});
CSS Optimization
Critical CSS Strategy
xml
<style>
/* Inline critical CSS for above-the-fold content */
.navbar { /* Critical styles */ }
.hero-section { /* Critical styles */ }
.loading-screen { /* Critical styles */ }
</style>

<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
CSS Variables for Performance
css
/* Single source of truth for theme values */
:root {
  --royal-gold: #FFD700;
  --transition-standard: all 0.3s ease;
  --shadow-standard: 0 8px 25px var(--shadow-medium);
}

/* Efficient animations using transform and opacity */
.animate-in {
  transform: translateY(0);
  opacity: 1;
  transition: var(--transition-standard);
}
Network Optimization
Resource Hints
xml
<!-- DNS prefetching -->
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//images.unsplash.com">

<!-- Preconnect to critical origins -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Preload critical resources -->
<link rel="preload" href="styles.css" as="style">
<link rel="preload" href="script.js" as="script">
Compression Strategy
text
# Enable gzip compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/javascript
</IfModule>

# Enable brotli compression (if available)
<IfModule mod_brotli.c>
    BrotliCompressionLevel 6
    BrotliFilterNote Input instream
    BrotliFilterNote Output outstream
    BrotliFilterNote Ratio ratio
</IfModule>
Browser Compatibility
Supported Browsers
Browser	Version	Support Level
Chrome	80+	Full Support ✅
Firefox	75+	Full Support ✅
Safari	13+	Full Support ✅
Edge	80+	Full Support ✅
Opera	70+	Full Support ✅
Samsung Browser	12+	Full Support ✅
Fallback Strategies
CSS Grid Fallback
css
.cards-grid {
  /* Flexbox fallback */
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

@supports (display: grid) {
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}
JavaScript Feature Detection
javascript
// Intersection Observer fallback
if ('IntersectionObserver' in window) {
    this.setupScrollAnimations();
} else {
    // Fallback to scroll event
    window.addEventListener('scroll', this.handleScrollFallback);
}

// Fetch API fallback
if ('fetch' in window) {
    this.fetchData();
} else {
    // XMLHttpRequest fallback
    this.fetchDataXHR();
}
CSS Custom Properties Fallback
css
.element {
  /* Fallback for older browsers */
  background: #FFD700;
  /* Modern browsers */
  background: var(--royal-gold, #FFD700);
}
Progressive Enhancement
Enhanced Features for Modern Browsers
javascript
// Service Worker for PWA capabilities
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}

// Web Share API
if (navigator.share) {
    navigator.share({
        title: 'King Sukh Guest House',
        text: 'Experience royal luxury',
        url: window.location.href
    });
} else {
    // Fallback sharing methods
    this.showShareOptions();
}
Security Features
Input Validation & Sanitization
Client-Side Validation
javascript
validateInput(input, type) {
    const patterns = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^[\+]?[1-9][\d]{0,15}$/,
        name: /^[a-zA-Z\s]{2,50}$/,
        bookingId: /^KSH\d{10}$/
    };
    
    return patterns[type] ? patterns[type].test(input) : false;
}

sanitizeInput(input) {
    return input
        .replace(/[<>]/g, '') // Remove potential HTML tags
        .trim() // Remove whitespace
        .substring(0, 255); // Limit length
}
Form Protection
xml
<!-- CSRF protection ready -->
<form id="contact-form" data-csrf-token="{{ csrf_token }}">
    <!-- Honeypot field for bot detection -->
    <input type="text" name="website" style="display: none;" tabindex="-1" autocomplete="off">
    
    <!-- Regular form fields -->
    <input type="text" name="name" required maxlength="100">
    <input type="email" name="email" required maxlength="255">
</form>
Content Security Policy
CSP Implementation
xml
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; 
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
               img-src 'self' https: data:; 
               font-src 'self' https://fonts.gstatic.com;">
Data Protection
Local Storage Management
javascript
class SecureStorage {
    static set(key, value, expiry = 24) {
        const item = {
            value: value,
            expiry: Date.now() + (expiry * 60 * 60 * 1000)
        };
        localStorage.setItem(key, JSON.stringify(item));
    }
    
    static get(key) {
        const item = localStorage.getItem(key);
        if (!item) return null;
        
        const parsed = JSON.parse(item);
        if (Date.now() > parsed.expiry) {
            localStorage.removeItem(key);
            return null;
        }
        
        return parsed.value;
    }
}
Testing
Testing Strategy
1. Unit Testing
javascript
describe('KingSukhGuestHouse', () => {
    let guestHouse;
    
    beforeEach(() => {
        guestHouse = new KingSukhGuestHouse();
    });
    
    describe('Booking System', () => {
        test('should validate required fields', () => {
            const result = guestHouse.validateCurrentStep();
            expect(result).toBe(false);
        });
        
        test('should update guest count correctly', () => {
            guestHouse.updateGuests('adults', 1);
            expect(guestHouse.bookingData.adults).toBe(3);
        });
    });
    
    describe('Filter System', () => {
        test('should filter rooms by category', () => {
            guestHouse.filterRooms('luxury');
            const visibleRooms = document.querySelectorAll('.room-card[style*="display: block"]');
            expect(visibleRooms.length).toBeGreaterThan(0);
        });
    });
});
2. Integration Testing
javascript
describe('Modal Integration', () => {
    test('should open booking modal when button clicked', () => {
        const bookBtn = document.getElementById('navbar-book-btn');
        bookBtn.click();
        
        const modal = document.getElementById('booking-modal');
        expect(modal.classList.contains('active')).toBe(true);
    });
    
    test('should close modal on escape key', () => {
        guestHouse.openBookingModal();
        
        const escEvent = new KeyboardEvent('keydown', { key: 'Escape' });
        document.dispatchEvent(escEvent);
        
        const modal = document.getElementById('booking-modal');
        expect(modal.classList.contains('active')).toBe(false);
    });
});
3. End-to-End Testing
javascript
// Using Cypress or similar E2E framework
describe('Booking Flow', () => {
    it('should complete full booking process', () => {
        cy.visit('/');
        
        // Open booking modal
        cy.get('#navbar-book-btn').click();
        
        // Fill step 1 - dates
        cy.get('#checkin-date').type('2024-06-15');
        cy.get('#checkout-date').type('2024-06-18');
        cy.get('#next-btn').click();
        
        // Fill step 2 - guests
        cy.get('[onclick="updateGuests(\'adults\', 1)"]').click();
        cy.get('#next-btn').click();
        
        // Fill step 3 - details
        cy.get('#guest-name').type('John Doe');
        cy.get('#guest-email').type('john@example.com');
        cy.get('#guest-phone').type('+919876543210');
        cy.get('#next-btn').click();
        
        // Verify success
        cy.get('.notification.success').should('be.visible');
    });
});
Performance Testing
Lighthouse Metrics Targets
Metric	Target Score	Current Score
Performance	95+	97
Accessibility	95+	98
Best Practices	95+	100
SEO	95+	96
Core Web Vitals
javascript
// Performance monitoring
function measureCoreWebVitals() {
    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
    }).observe({ type: 'largest-contentful-paint', buffered: true });
    
    // First Input Delay
    new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
            console.log('FID:', entry.processingStart - entry.startTime);
        });
    }).observe({ type: 'first-input', buffered: true });
    
    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
                clsValue += entry.value;
            }
        }
        console.log('CLS:', clsValue);
    }).observe({ type: 'layout-shift', buffered: true });
}
Accessibility Testing
WCAG 2.1 Compliance
javascript
// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

// Focus management for modals
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
}
Screen Reader Support
xml
<!-- ARIA labels and descriptions -->
<button aria-label="Open booking modal" 
        aria-describedby="booking-help">
    Book Now
</button>
<div id="booking-help" class="sr-only">
    Opens a dialog to start the booking process
</div>

<!-- Live regions for dynamic content -->
<div aria-live="polite" id="status-messages"></div>
<div aria-live="assertive" id="error-messages"></div>
Deployment
Hosting Options
1. Static Site Hosting
text
# Netlify deployment configuration
[build]
  publish = "."
  command = "echo 'No build command needed'"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    
[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
    
[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
2. CDN Configuration
text
# Cloudflare configuration
rules:
  - pattern: "*.css"
    cache_level: "cache_everything"
    edge_cache_ttl: 31536000
    browser_cache_ttl: 31536000
    
  - pattern: "*.js"
    cache_level: "cache_everything"
    edge_cache_ttl: 31536000
    browser_cache_ttl: 31536000
    
  - pattern: "*.jpg"
    cache_level: "cache_everything"
    edge_cache_ttl: 31536000
    browser_cache_ttl: 31536000
3. Server Configuration
text
# Nginx configuration
server {
    listen 80;
    server_name kingsukh-guesthouse.com;
    root /var/www/king-sukh;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    
    # Cache static assets
    location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Handle SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
}
CI/CD Pipeline
GitHub Actions Workflow
text
name: Deploy King Sukh Guest House

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
        
    - name: Install dependencies
      run: npm install
      
    - name: Run tests
      run: npm test
      
    - name: Run Lighthouse CI
      run: lhci autorun
      
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v1.2
      with:
        publish-dir: './dist'
        production-branch: main
        github-token: ${{ secrets.GITHUB_TOKEN }}
        deploy-message: "Deploy from GitHub Actions"
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
Environment Configuration
Production Optimizations
javascript
// Environment-specific configuration
const config = {
    development: {
        apiUrl: 'http://localhost:3000/api',
        debug: true,
        mockData: true
    },
    production: {
        apiUrl: 'https://api.kingsukh-guesthouse.com',
        debug: false,
        mockData: false,
        analytics: {
            googleAnalytics: 'GA-XXXXXX-XX',
            hotjar: 'XXXXXX'
        }
    }
};

const ENV = config[process.env.NODE_ENV || 'development'];
Maintenance
Monitoring & Analytics
Performance Monitoring
javascript
// Performance monitoring setup
function setupMonitoring() {
    // Google Analytics
    gtag('config', 'GA-XXXXXX-XX', {
        page_title: 'King Sukh Guest House',
        page_location: window.location.href
    });
    
    // Custom event tracking
    function trackEvent(action, category, label) {
        gtag('event', action, {
            event_category: category,
            event_label: label,
            value: 1
        });
    }
    
    // Track booking attempts
    document.addEventListener('bookingStarted', () => {
        trackEvent('booking_started', 'booking', 'modal_opened');
    });
    
    // Track form completions
    document.addEventListener('contactFormSubmitted', () => {
        trackEvent('form_submitted', 'contact', 'inquiry');
    });
}
Error Tracking
javascript
// Error monitoring with Sentry (example)
import * as Sentry from "@sentry/browser";

Sentry.init({
    dsn: "YOUR_SENTRY_DSN",
    environment: process.env.NODE_ENV,
    beforeSend(event) {
        // Filter out known issues
        if (event.exception) {
            const error = event.exception.values[0];
            if (error.type === 'NetworkError') {
                return null; // Don't send network errors
            }
        }
        return event;
    }
});

// Custom error boundary
window.addEventListener('error', (event) => {
    Sentry.captureException(event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    Sentry.captureException(event.reason);
});
Content Management
Regular Updates Checklist
 Update room rates and availability

 Refresh gallery images (seasonal content)

 Review and update amenities information

 Update contact information and policies

 Check and update external links

 Review SEO meta tags and descriptions

 Update testimonials and reviews

 Refresh virtual tour content

Security Updates
bash
# Regular security maintenance
# Update dependencies
npm audit fix

# Check for vulnerabilities
npm audit

# Update CDN resources
# Check Font Awesome, Google Fonts versions

# Review and update CSP headers
# Monitor for XSS attempts
# Regular backup verification
Performance Optimization
Monthly Performance Review
javascript
// Performance monitoring script
function generatePerformanceReport() {
    const metrics = {
        pageLoadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
        domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
        firstPaint: performance.getEntriesByType('paint')[0]?.startTime,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0
    };
    
    // Log metrics for analysis
    console.table(metrics);
    
    // Send to analytics
    gtag('event', 'performance_metrics', {
        custom_map: metrics
    });
}

// Run monthly performance audit
setInterval(generatePerformanceReport, 30 * 24 * 60 * 60 * 1000);
Contributing
Development Guidelines
Code Style Standards
javascript
// ESLint configuration
{
  "extends": ["eslint:recommended"],
  "env": {
    "browser": true,
    "es6": true
  },
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-console": "warn",
    "no-unused-vars": "error"
  }
}
CSS Guidelines
css
/* BEM Methodology */
.block {}
.block__element {}
.block--modifier {}

/* Component structure */
.component {
  /* Layout properties */
  display: grid;
  grid-template-columns: 1fr 2fr;
  
  /* Visual properties */
  background: var(--background-light);
  border: 1px solid var(--border-color);
  
  /* Typography */
  font-family: var(--font-primary);
  font-size: var(--text-base);
  
  /* Interactions */
  transition: var(--transition-standard);
}
Git Workflow
bash
# Feature branch workflow
git checkout -b feature/new-room-type
git add .
git commit -m "feat: add garden villa room type

- Add new room category with pricing
- Update room filtering logic
- Add room-specific amenities
- Update gallery with room images"

git push origin feature/new-room-type
# Create pull request
Commit Message Convention
text
feat: add new feature
fix: fix bug
docs: update documentation
style: formatting changes
refactor: code refactoring
test: add tests
chore: maintenance tasks
Pull Request Process
Fork the repository

Create feature branch from main

Make changes following code style guidelines

Add tests for new functionality

Update documentation if needed

Run tests and ensure they pass

Submit pull request with detailed description

PR Template
text
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] Accessibility testing done

## Screenshots
Include screenshots for UI changes.

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
License
MIT License
text
MIT License

Copyright (c) 2024 King Sukh Guest House

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
