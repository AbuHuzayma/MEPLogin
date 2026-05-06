# MEP Unified Login Platform

##  كود المنصة الوطنية الموحدة لتسجيل الدخول - وزارة الاقتصاد والتخطيط

A unified, bilingual login platform for the Ministry of Economy and Planning (MEP) in the Kingdom of Saudi Arabia, designed in compliance with the Digital Government Authority (DGA) standards and guidelines.

## 📋 Overview

This project implements a secure, accessible, and user-friendly login interface that supports two authentication methods:
- **Username/Password Authentication**: Traditional login with username or national ID
- **Nafath Integration**: National single sign-on through the Nafath app for secure identity verification

## 🌟 Key Features

### 🔐 Authentication Methods
- **Dual Login Options**: Username/password and Nafath authentication
- **Secure Validation**: Client-side form validation with proper error handling
- **Session Management**: Remember me functionality

### 🌍 Internationalization (i18n)
- **Bilingual Support**: Full Arabic (RTL) and English (LTR) support
- **Dynamic Language Switching**: Real-time language toggle without page reload
- **Localized Content**: All UI elements, messages, and placeholders are localized

### ♿ Accessibility
- **WCAG Compliance**: Follows Web Content Accessibility Guidelines
- **Screen Reader Support**: Proper ARIA labels and roles
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements
- **Focus Management**: Visible focus indicators and logical tab order

### 📱 Responsive Design
- **Mobile-First Approach**: Optimized for all device sizes
- **Government Design Standards**: Compliant with Saudi DGA design guidelines
- **Cross-Browser Compatibility**: Works across modern browsers

### 🛡️ Security Features
- **Input Sanitization**: Client-side validation and sanitization
- **CSRF Protection**: Form validation and secure submission
- **Secure Authentication Flow**: Placeholder for backend integration

## 🏗️ Technical Architecture

### Frontend Stack
- **HTML5**: Semantic markup with proper document structure
- **CSS3**: Custom properties, flexbox, and modern CSS features
- **Vanilla JavaScript**: No external dependencies for core functionality

### Project Structure
```
MEPLogin/
├── Index.html          # Main login page
├── scripts.js          # JavaScript functionality
├── styles.css          # Government-compliant styling
└── README.md          # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#006c35` (Saudi Government Green)
- **Secondary**: `#111111` (Dark Text)
- **Background**: `#f8f9fa` (Light Gray)
- **Error**: `#e53e3e` (Red)

### Typography
- **Primary Font**: Cairo (Government-approved Arabic font)
- **Fallback**: Sans-serif for cross-platform compatibility

### Components
- **Unified Header**: Government branding and language toggle
- **Login Card**: Main authentication interface
- **Tabbed Interface**: Clean navigation between login methods
- **Digital Stamp**: Government verification badge

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for testing)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/MEPLogin.git
   cd MEPLogin
   ```

2. Open `Index.html` in your web browser or serve via local server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

3. Navigate to `http://localhost:8000/Index.html`

## 📖 Usage

### Basic Login Flow
1. **Language Selection**: Choose Arabic or English
2. **Authentication Method**: Select username/password or Nafath
3. **Form Submission**: Enter credentials and submit
4. **Validation**: Client-side validation with error messages

### Keyboard Navigation
- `Tab`: Navigate between form fields
- `Enter`: Submit forms
- `Arrow Keys`: Navigate between tabs
- `Space/Enter`: Activate buttons

## 🔧 Development

### Code Quality
- **Semantic HTML**: Proper use of HTML5 semantic elements
- **Clean CSS**: Organized styles with CSS custom properties
- **Modular JavaScript**: Separated concerns and reusable functions
- **Performance**: Optimized for fast loading and smooth interactions

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📋 Compliance & Standards

### Government Standards
- **Digital Government Authority (DGA)**: Compliant with Saudi digital government guidelines
- **Unified Platform Code**: Follows MEP platform design standards
- **Accessibility Standards**: WCAG 2.1 AA compliance

### Security Considerations
- **Input Validation**: Comprehensive client-side validation
- **XSS Prevention**: Proper input sanitization
- **Secure Headers**: Ready for HTTPS deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software developed for the Ministry of Economy and Planning. All rights reserved © 2026.

## 🙏 Acknowledgments

- **Digital Government Authority (DGA)**: For providing design guidelines and standards
- **Ministry of Economy and Planning**: For project requirements and specifications
- **Saudi Government**: For the unified digital transformation initiative

## 📞 Support

For technical support or questions:
- **Internal Support**: Contact the IT department
- **Documentation**: Refer to the DGA design system documentation

## 🔄 Future Enhancements

- [ ] Backend authentication integration
- [ ] Multi-factor authentication (MFA)
- [ ] Biometric authentication
- [ ] Single sign-on (SSO) expansion
- [ ] Progressive Web App (PWA) features
- [ ] Advanced accessibility features

---

**Developed with ❤️ for the digital transformation of Saudi Arabia's government services**