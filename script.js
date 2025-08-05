class KingSukhGuestHouse {
    constructor() {
        this.loadingProgress = 0;
        this.loadingTexts = [
            'PREPARING YOUR ROYAL STAY',
            'LOADING GOLDEN AMENITIES',
            'SETTING UP ROYAL CHAMBERS',
            'PREPARING LUXURY SERVICES',
            'FINALIZING ROYAL BOOKING SYSTEM',
            'WELCOME TO KING SUKH GUEST HOUSE'
        ];
        this.currentStep = 1;
        this.bookingData = {
            adults: 2,
            children: 0,
            infants: 0
        };
        this.mockBookings = this.generateMockBookings();
        this.init();
    }

    init() {
        this.setupLoader();
        this.setupNavigation();
        this.setupGallery();
        this.setupAssistant();
        this.setupScrollAnimations();
        this.setupBookingModal();
        this.setupContactForm();
        this.setupVirtualTour();
        this.setupBookingStatus();
        this.setupFilters();
        this.setupAdvancedAnimations();
        this.setupEventListeners();
    }

    setupLoader() {
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        const loadingStatus = document.getElementById('loading-status');
        const loader = document.getElementById('loader');
        const mainContent = document.getElementById('main-content');
        
        if (!progressFill || !progressText || !loadingStatus || !loader || !mainContent) {
            console.warn('Loading elements not found');
            return;
        }
        
        let textIndex = 0;
        const loadingInterval = setInterval(() => {
            this.loadingProgress += Math.random() * 4 + 2;
            
            if (this.loadingProgress >= 100) {
                this.loadingProgress = 100;
                clearInterval(loadingInterval);
                
                setTimeout(() => {
                    loader.classList.add('fade-out');
                    setTimeout(() => {
                        loader.style.display = 'none';
                        mainContent.classList.remove('hidden');
                        this.startAnimations();
                    }, 1000);
                }, 1000);
            }

            progressFill.style.width = `${this.loadingProgress}%`;
            progressText.textContent = `${Math.round(this.loadingProgress)}%`;

            const newTextIndex = Math.floor((this.loadingProgress / 100) * this.loadingTexts.length);
            if (newTextIndex !== textIndex && newTextIndex < this.loadingTexts.length) {
                textIndex = newTextIndex;
                loadingStatus.textContent = this.loadingTexts[textIndex];
            }
        }, 80);
    }

    setupNavigation() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    if (navMenu && navMenu.classList.contains('active')) {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                    }
                }
            });
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (window.scrollY > 100) {
                    navbar.style.background = 'rgba(255, 248, 220, 0.98)';
                } else {
                    navbar.style.background = 'rgba(255, 248, 220, 0.95)';
                }
            }
        });
    }

    setupEventListeners() {
        // Book Now buttons
        const navbarBookBtn = document.getElementById('navbar-book-btn');
        if (navbarBookBtn) {
            navbarBookBtn.addEventListener('click', () => this.openBookingModal());
        }

        // Hero buttons
        const virtualTourBtn = document.getElementById('virtual-tour-btn');
        if (virtualTourBtn) {
            virtualTourBtn.addEventListener('click', () => this.openVirtualTour());
        }

        const previousStatusBtn = document.getElementById('previous-status-btn');
        if (previousStatusBtn) {
            previousStatusBtn.addEventListener('click', () => this.openBookingStatus());
        }

        // Room booking buttons
        document.querySelectorAll('.book-room-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const roomType = e.target.closest('.book-room-btn').dataset.room;
                this.bookSpecificRoom(roomType);
            });
        });

        // Modal close buttons
        const closeBookingModal = document.getElementById('close-booking-modal');
        if (closeBookingModal) {
            closeBookingModal.addEventListener('click', () => this.closeBookingModal());
        }

        const closeVirtualTour = document.getElementById('close-virtual-tour');
        if (closeVirtualTour) {
            closeVirtualTour.addEventListener('click', () => this.closeVirtualTour());
        }

        const closeBookingStatus = document.getElementById('close-booking-status');
        if (closeBookingStatus) {
            closeBookingStatus.addEventListener('click', () => this.closeBookingStatus());
        }

        const closeBookingResults = document.getElementById('close-booking-results');
        if (closeBookingResults) {
            closeBookingResults.addEventListener('click', () => this.closeBookingResults());
        }

        // Booking form navigation
        const prevBtn = document.getElementById('prev-btn');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousStep());
        }

        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextStep());
        }

        // Booking search
        const searchBookingBtn = document.getElementById('search-booking-btn');
        if (searchBookingBtn) {
            searchBookingBtn.addEventListener('click', () => this.performBookingSearch());
        }

        // Assistant
        const assistantFloat = document.getElementById('assistant-float');
        if (assistantFloat) {
            assistantFloat.addEventListener('click', () => this.toggleAssistant());
        }

        const minimizeAssistant = document.getElementById('minimize-assistant');
        if (minimizeAssistant) {
            minimizeAssistant.addEventListener('click', () => this.toggleAssistant());
        }

        const closeAssistant = document.getElementById('close-assistant');
        if (closeAssistant) {
            closeAssistant.addEventListener('click', () => this.closeAssistant());
        }

        const sendMessageBtn = document.getElementById('send-message-btn');
        if (sendMessageBtn) {
            sendMessageBtn.addEventListener('click', () => this.sendMessage());
        }

        const chatInput = document.getElementById('chat-input');
        if (chatInput) {
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }

        // Quick buttons
        document.querySelectorAll('.quick-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.dataset.message;
                this.sendQuickMessage(message);
            });
        });

        // Modal overlays
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                this.closeAllModals();
            }
        });

        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    setupGallery() {
        // Gallery filter buttons
        const filterButtons = document.querySelectorAll('.gallery-filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                this.filterGallery(filter);
            });
        });

        // Gallery items
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                const imageUrl = item.dataset.image;
                if (imageUrl) {
                    this.openLightbox(imageUrl);
                }
            });

            // Set background image
            if (item.dataset.image) {
                item.style.backgroundImage = `url(${item.dataset.image})`;
            }
        });
    }

    filterGallery(filter) {
        const items = document.querySelectorAll('.gallery-item');
        
        items.forEach(item => {
            const category = item.dataset.category;
            if (filter === 'all' || (category && category.includes(filter))) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease';
            } else {
                item.style.display = 'none';
            }
        });
    }

    openLightbox(imageUrl) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${imageUrl}" alt="Gallery Image">
                <button class="lightbox-close" onclick="this.parentElement.parentElement.remove(); document.body.style.overflow = 'auto';">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        setTimeout(() => lightbox.classList.add('active'), 10);
        document.body.style.overflow = 'hidden';
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.remove();
                document.body.style.overflow = 'auto';
            }
        });
    }

    setupFilters() {
        // Room filters
        const roomFilterBtns = document.querySelectorAll('.filter-btn');
        roomFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                roomFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterRooms(btn.dataset.filter);
            });
        });

        // Amenity category filters
        const categoryBtns = document.querySelectorAll('.category-btn');
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterAmenities(btn.dataset.category);
            });
        });
    }

    filterRooms(filter) {
        const rooms = document.querySelectorAll('.room-card');
        
        rooms.forEach(room => {
            const category = room.dataset.category;
            const price = parseInt(room.dataset.price) || 0;
            
            let show = false;
            if (filter === 'all') {
                show = true;
            } else if (filter === 'luxury' && price >= 7000) {
                show = true;
            } else if (filter === 'family' && category && category.includes('family')) {
                show = true;
            } else if (filter === 'romantic' && category && category.includes('romantic')) {
                show = true;
            } else if (filter === 'premium' && category && category.includes('premium')) {
                show = true;
            }
            
            if (show) {
                room.style.display = 'block';
                room.style.animation = 'fadeIn 0.5s ease';
            } else {
                room.style.display = 'none';
            }
        });
    }

    filterAmenities(category) {
        const amenities = document.querySelectorAll('.amenity-card');
        
        amenities.forEach(amenity => {
            const amenityCategory = amenity.dataset.category;
            if (category === 'all' || amenityCategory === category) {
                amenity.style.display = 'block';
                amenity.style.animation = 'fadeIn 0.5s ease';
            } else {
                amenity.style.display = 'none';
            }
        });
    }

    setupBookingStatus() {
        this.setupStatusTabs();
        this.setupSearchOptions();
        this.populateBookingHistory();
    }

    setupStatusTabs() {
        const tabs = document.querySelectorAll('.status-tab');
        const tabContents = document.querySelectorAll('.status-tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                tab.classList.add('active');
                const targetTab = document.getElementById(`${tab.dataset.tab}-tab`);
                if (targetTab) {
                    targetTab.classList.add('active');
                }
            });
        });
    }

    setupSearchOptions() {
        const searchOptions = document.querySelectorAll('.search-option');
        const searchForms = document.querySelectorAll('.search-form');

        searchOptions.forEach(option => {
            option.addEventListener('click', () => {
                searchOptions.forEach(opt => opt.classList.remove('active'));
                searchForms.forEach(form => form.classList.add('hidden'));
                
                option.classList.add('active');
                const targetForm = document.getElementById(`${option.dataset.method}-form`);
                if (targetForm) {
                    targetForm.classList.remove('hidden');
                }
            });
        });
    }

    generateMockBookings() {
        const bookings = [];
        const statuses = ['confirmed', 'completed', 'pending', 'cancelled'];
        const roomTypes = ['Royal Chambers', 'Family Palace Suites', 'Emperor Suites', 'Honeymoon Haven'];
        
        for (let i = 0; i < 10; i++) {
            const checkIn = new Date();
            checkIn.setDate(checkIn.getDate() + Math.floor(Math.random() * 90) - 30);
            const checkOut = new Date(checkIn);
            checkOut.setDate(checkOut.getDate() + Math.floor(Math.random() * 5) + 1);
            
            bookings.push({
                id: `KSH2024${String(i + 1).padStart(6, '0')}`,
                guestName: `Guest ${i + 1}`,
                email: `guest${i + 1}@example.com`,
                phone: `+91 ${String(Math.floor(Math.random() * 9000000000) + 1000000000)}`,
                roomType: roomTypes[Math.floor(Math.random() * roomTypes.length)],
                checkIn: checkIn.toISOString().split('T')[0],
                checkOut: checkOut.toISOString().split('T')[0],
                guests: Math.floor(Math.random() * 4) + 1,
                status: statuses[Math.floor(Math.random() * statuses.length)],
                totalAmount: (Math.floor(Math.random() * 10000) + 5000),
                bookingDate: new Date(checkIn.getTime() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
            });
        }
        
        return bookings;
    }

    populateBookingHistory() {
        const historyList = document.getElementById('booking-history-list');
        if (!historyList) return;

        const historyHTML = this.mockBookings.map(booking => `
            <div class="history-item">
                <div class="history-item-header">
                    <div class="booking-id">#${booking.id}</div>
                    <div class="status-indicator status-${booking.status}">
                        ${booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </div>
                </div>
                <div class="history-item-content">
                    <div class="booking-info-grid">
                        <div class="info-item">
                            <span class="info-label">Room Type:</span>
                            <span class="info-value">${booking.roomType}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Check-in:</span>
                            <span class="info-value">${booking.checkIn}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Check-out:</span>
                            <span class="info-value">${booking.checkOut}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Total:</span>
                            <span class="info-value">₹${booking.totalAmount.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        historyList.innerHTML = historyHTML;
    }

    performBookingSearch() {
        const searchBtn = document.getElementById('search-booking-btn');
        if (!searchBtn) return;

        const originalText = searchBtn.innerHTML;
        searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
        searchBtn.disabled = true;

        setTimeout(() => {
            const mockBooking = this.mockBookings[0];
            this.showBookingResults(mockBooking);
            this.showNotification('Demo booking found! This is a mock result for demonstration.', 'info');
            
            searchBtn.innerHTML = originalText;
            searchBtn.disabled = false;
        }, 2000);
    }

    showBookingResults(booking) {
        const resultsModal = document.getElementById('booking-results-modal');
        const resultsContent = document.getElementById('booking-results-content');
        
        if (!resultsModal || !resultsContent) return;

        const statusClass = `status-${booking.status}`;
        const statusText = booking.status.charAt(0).toUpperCase() + booking.status.slice(1);
        
        resultsContent.innerHTML = `
            <div class="booking-details-card">
                <div class="status-indicator ${statusClass}">
                    <i class="fas fa-${this.getStatusIcon(booking.status)}"></i>
                    ${statusText}
                </div>
                
                <h3>Booking Details</h3>
                <div class="booking-info-grid">
                    <div class="info-item">
                        <span class="info-label">Booking ID</span>
                        <span class="info-value">#${booking.id}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Guest Name</span>
                        <span class="info-value">${booking.guestName}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Room Type</span>
                        <span class="info-value">${booking.roomType}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Check-in Date</span>
                        <span class="info-value">${new Date(booking.checkIn).toLocaleDateString()}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Check-out Date</span>
                        <span class="info-value">${new Date(booking.checkOut).toLocaleDateString()}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Number of Guests</span>
                        <span class="info-value">${booking.guests}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Total Amount</span>
                        <span class="info-value">₹${booking.totalAmount.toLocaleString()}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Booking Date</span>
                        <span class="info-value">${new Date(booking.bookingDate).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        `;
        
        resultsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.closeBookingStatus();
    }

    getStatusIcon(status) {
        const icons = {
            confirmed: 'check-circle',
            completed: 'flag-checkered',
            pending: 'clock',
            cancelled: 'times-circle'
        };
        return icons[status] || 'info-circle';
    }

    setupVirtualTour() {
        const tourNavBtns = document.querySelectorAll('.tour-nav-btn');
        const tourSections = document.querySelectorAll('.tour-section');

        tourNavBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tourType = btn.dataset.tour;
                
                tourNavBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                tourSections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === `tour-${tourType}`) {
                        section.classList.add('active');
                        const video = section.querySelector('video');
                        if (video) {
                            video.currentTime = 0;
                            video.play().catch(() => {
                                console.log('Autoplay prevented');
                            });
                        }
                    } else {
                        const video = section.querySelector('video');
                        if (video) {
                            video.pause();
                        }
                    }
                });
            });
        });
    }

    setupAssistant() {
        this.assistantResponses = {
            'I want to make a reservation': {
                response: 'I\'d be delighted to help you make a reservation! Let me open our booking system for you.',
                action: 'openBooking'
            },
            'What are your room rates?': {
                response: 'Our room rates start from ₹3,500 for Royal Chambers, ₹6,200 for Family Palace Suites, ₹8,500 for Honeymoon Haven, and ₹12,000 for Emperor Suites. All rates include breakfast and premium amenities.'
            },
            'Tell me about amenities': {
                response: 'We offer world-class amenities including royal dining, golden spa & wellness, recreation center, business facilities, swimming pool, and beautiful gardens. Which amenity would you like to know more about?'
            },
            'How do I reach the property?': {
                response: 'We\'re located in Manpur, Barhanti, West Bengal - just 2.5 hours from Kolkata and 1 hour from Durgapur. We provide complimentary pickup services from major transport hubs.'
            },
            'default': 'Thank you for your inquiry! Our royal concierge team is here to help. You can also call us at +91 9007062180 for immediate assistance.'
        };
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.room-card, .amenity-card, .gallery-item, .contact-method').forEach(el => {
            observer.observe(el);
        });
    }

    setupBookingModal() {
        const today = new Date().toISOString().split('T')[0];
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split('T')[0];
        
        const checkinDate = document.getElementById('checkin-date');
        const checkoutDate = document.getElementById('checkout-date');
        
        if (checkinDate) {
            checkinDate.min = today;
            checkinDate.addEventListener('change', () => {
                const selectedDate = new Date(checkinDate.value);
                selectedDate.setDate(selectedDate.getDate() + 1);
                if (checkoutDate) {
                    checkoutDate.min = selectedDate.toISOString().split('T')[0];
                }
            });
        }
        
        if (checkoutDate) {
            checkoutDate.min = tomorrowStr;
        }
    }

    setupContactForm() {
        const contactForm = document.getElementById('contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactSubmit(contactForm);
            });
        }

        document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(field => {
            field.addEventListener('focus', () => {
                field.parentElement.classList.add('focused');
            });
            
            field.addEventListener('blur', () => {
                field.parentElement.classList.remove('focused');
                if (field.value) {
                    field.parentElement.classList.add('has-value');
                } else {
                    field.parentElement.classList.remove('has-value');
                }
            });
        });
    }

    handleContactSubmit(form) {
        const submitBtn = form.querySelector('.submit-btn');
        if (!submitBtn) return;
        
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            this.showNotification('Message sent successfully! We will contact you soon.', 'success');
            form.reset();
            
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            document.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('focused', 'has-value');
            });
        }, 2000);
    }

    setupAdvancedAnimations() {
        document.querySelectorAll('.btn-primary, .btn-outline, .btn-reserve, .book-room-btn').forEach(btn => {
            btn.addEventListener('click', this.createRipple);
        });

        document.querySelectorAll('.room-card, .amenity-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('floating');
            }, index * 200);
        });
    }

    createRipple(e) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    }

    startAnimations() {
        document.querySelectorAll('.room-card, .amenity-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate-in');
            }, index * 100);
        });

        document.querySelectorAll('.gallery-item').forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0) scale(1)';
            }, index * 50);
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        document.body.appendChild(notification);
        setTimeout(() => notification.classList.add('show'), 100);
        
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    // Modal Functions
    openBookingModal() {
        const modal = document.getElementById('booking-modal');
        if (!modal) return;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.currentStep = 1;
        this.updateBookingStep();
    }

    closeBookingModal() {
        const modal = document.getElementById('booking-modal');
        if (!modal) return;
        
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    openVirtualTour() {
        const modal = document.getElementById('virtual-tour-modal');
        if (!modal) return;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        const firstVideo = document.querySelector('.tour-section.active video');
        if (firstVideo) {
            firstVideo.play().catch(() => {
                console.log('Autoplay prevented');
            });
        }
    }

    closeVirtualTour() {
        const modal = document.getElementById('virtual-tour-modal');
        if (!modal) return;
        
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        document.querySelectorAll('.tour-section video').forEach(video => {
            video.pause();
        });
    }

    openBookingStatus() {
        const modal = document.getElementById('booking-status-modal');
        if (!modal) return;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeBookingStatus() {
        const modal = document.getElementById('booking-status-modal');
        if (!modal) return;
        
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    closeBookingResults() {
        const modal = document.getElementById('booking-results-modal');
        if (!modal) return;
        
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    closeAllModals() {
        document.querySelectorAll('.booking-modal, .virtual-tour-modal, .booking-status-modal, .booking-results-modal').forEach(modal => {
            if (modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        const lightbox = document.querySelector('.lightbox');
        if (lightbox) {
            lightbox.remove();
            document.body.style.overflow = 'auto';
        }
    }

    // Booking Functions
    nextStep() {
        if (this.validateCurrentStep()) {
            this.currentStep++;
            this.updateBookingStep();
            
            if (this.currentStep > 3) {
                this.submitBooking();
            }
        }
    }

    previousStep() {
        this.currentStep--;
        this.updateBookingStep();
    }

    updateBookingStep() {
        document.querySelectorAll('.step').forEach((step, index) => {
            if (index + 1 <= this.currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        document.querySelectorAll('.form-step').forEach((step, index) => {
            if (index + 1 === this.currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        if (prevBtn) {
            if (this.currentStep === 1) {
                prevBtn.style.display = 'none';
            } else {
                prevBtn.style.display = 'flex';
            }
        }

        if (nextBtn) {
            if (this.currentStep === 3) {
                nextBtn.innerHTML = '<i class="fas fa-check"></i> Confirm Booking';
            } else {
                nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
            }
        }
    }

    validateCurrentStep() {
        const currentStepEl = document.querySelector('.form-step.active');
        if (!currentStepEl) return true;
        
        const requiredFields = currentStepEl.querySelectorAll('input[required], select[required]');
        
        for (let field of requiredFields) {
            if (!field.value) {
                field.focus();
                field.parentElement.classList.add('shake');
                setTimeout(() => {
                    field.parentElement.classList.remove('shake');
                }, 500);
                this.showNotification('Please fill in all required fields', 'error');
                return false;
            }
        }
        return true;
    }

    submitBooking() {
        this.showNotification('Booking submitted successfully! We will contact you shortly to confirm your reservation.', 'success');
        this.closeBookingModal();
    }

    updateGuests(type, change) {
        const countEl = document.getElementById(`${type}-count`);
        if (!countEl) return;
        
        let count = parseInt(countEl.textContent);
        count = Math.max(0, count + change);
        
        if (type === 'adults' && count < 1) {
            count = 1;
        }
        
        countEl.textContent = count;
        this.bookingData[type] = count;
    }

    bookSpecificRoom(roomType) {
        this.bookingData.selectedRoom = roomType;
        this.openBookingModal();
        
        setTimeout(() => {
            const roomSelect = document.getElementById('room-type');
            if (roomSelect) {
                roomSelect.value = roomType;
            }
        }, 100);
    }

    // Assistant Functions
    toggleAssistant() {
        const assistantFloat = document.getElementById('assistant-float');
        const assistantContainer = document.getElementById('assistant-container');
        
        if (!assistantContainer || !assistantFloat) return;
        
        if (assistantContainer.classList.contains('hidden')) {
            assistantContainer.classList.remove('hidden');
            assistantFloat.style.display = 'none';
        } else {
            assistantContainer.classList.add('hidden');
            assistantFloat.style.display = 'flex';
        }
    }

    closeAssistant() {
        const assistantFloat = document.getElementById('assistant-float');
        const assistantContainer = document.getElementById('assistant-container');
        
        if (!assistantContainer || !assistantFloat) return;
        
        assistantContainer.classList.add('hidden');
        assistantFloat.style.display = 'flex';
    }

    sendMessage() {
        const chatInput = document.getElementById('chat-input');
        if (!chatInput) return;
        
        const message = chatInput.value.trim();
        
        if (message) {
            this.addMessageToChat(message, 'user');
            chatInput.value = '';
            
            setTimeout(() => {
                const responseData = this.assistantResponses[message] || this.assistantResponses['default'];
                const response = typeof responseData === 'object' ? responseData.response : responseData;
                
                this.addMessageToChat(response, 'assistant');
                
                if (typeof responseData === 'object' && responseData.action === 'openBooking') {
                    setTimeout(() => {
                        this.openBookingModal();
                    }, 1000);
                }
            }, 1000);
        }
    }

    sendQuickMessage(message) {
        this.addMessageToChat(message, 'user');
        
        setTimeout(() => {
            const responseData = this.assistantResponses[message] || this.assistantResponses['default'];
            const response = typeof responseData === 'object' ? responseData.response : responseData;
            
            this.addMessageToChat(response, 'assistant');
            
            if (typeof responseData === 'object' && responseData.action === 'openBooking') {
                setTimeout(() => {
                    this.openBookingModal();
                }, 1000);
            }
        }, 1000);
    }

    addMessageToChat(message, sender) {
        const chatMessages = document.getElementById('chat-messages');
        if (!chatMessages) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        
        const avatar = sender === 'user' ? '👤' : '🤵';
        const avatarClass = sender === 'user' ? 'user-avatar' : 'message-avatar';
        
        messageDiv.innerHTML = `
            <div class="${avatarClass}">
                ${avatar}
            </div>
            <div class="message-content">
                ${message}
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Global functions for backward compatibility
function updateGuests(type, change) {
    if (window.guestHouse) {
        window.guestHouse.updateGuests(type, change);
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    window.guestHouse = new KingSukhGuestHouse();
});

// Handle online/offline status
window.addEventListener('online', function() {
    if (window.guestHouse) {
        window.guestHouse.showNotification('Connection restored!', 'success');
    }
});

window.addEventListener('offline', function() {
    if (window.guestHouse) {
        window.guestHouse.showNotification('You are currently offline', 'error');
    }
});
