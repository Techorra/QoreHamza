# Hamza Raja - Portfolio Website Documentation

## Overview
This is the portfolio website for Hamza Raja, a Data Specialist & Developer. The website is built with HTML, CSS, and JavaScript, featuring a modern dark theme design.

---

## Table of Contents
1. [File Structure](#file-structure)
2. [HTML Structure](#html-structure)
3. [CSS Styling](#css-styling)
4. [JavaScript Functionality](#javascript-functionality)
5. [Sections Overview](#sections-overview)
6. [Customization Guide](#customization-guide)

---

## File Structure
```
My Portfolio/
├── index.html      # Main HTML file
├── Style.css       # Main CSS stylesheet
├── Script.js       # JavaScript functionality
├── FavIcon.png     # Website favicon
├── Dark.png        # Dark theme image
├── Light.png       # Light theme image
└── portfolio-documentation.md  # This file
```

---

## HTML Structure

### Head Section
```html
<meta name="title" content="Hamza Raja | Data Specialist" />
<meta name="description" content="Portfolio of Hamza Raja, a creative data technologist specializing in BI, design, and code." />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#000000" />
```

### External Dependencies
- **Font Awesome 6.5.0**: Icons
- **Google Fonts**: Space Grotesk font family

### Sections

#### 1. Header
- Fixed navigation bar
- Logo with name "Hamza Raja"
- Navigation links: Home, Offerings, About, Skills, Contact
- Mobile hamburger menu button

#### 2. Hero Section
- Main headline: "Hi, I'm Hamza Raja"
- Subtitle: "Data Specialist & Developer"
- Two CTA buttons: "View Skills" and "Get in Touch"
- Visual element with geometric shapes and bar chart SVG

#### 3. What I Offer Section
- Section title: "What I Offer"
- Subtitle: "Services tailored to bring your data vision to life"
- 4 service cards in a 2x2 grid:
  - **Data Analytics**: Transforming raw numbers into actionable insights
  - **Data Engineering**: Building robust data pipelines and scalable infrastructure
  - **Visual Design**: Creating impactful visuals for brand identity
  - **Web Development**: Building responsive, interactive websites

#### 4. About Section
- Two-column layout (text + decorative circles)
- Title: "About me" with white divider line
- Text content describing expertise
- Signature: "Hamza Raja" in italic Georgia font

#### 5. Skills Section
- Title: "Skills"
- 6 skill cards with progress bars:
  - Power BI (95% - Expert)
  - SQL (80% - Advanced)
  - Python (90% - Expert)
  - ETL (75% - Advanced)
  - Data Visualization (92% - Expert)
  - Frontend Dev (78% - Advanced)

#### 6. Contact Section
- Title: "Get in Touch"
- Two-column layout:
  - Left: Contact info with email and social links (GitHub, LinkedIn)
  - Right: Contact form with Web3Forms integration

#### 7. Footer
- Copyright: "Hamza Raja • © 2025"

#### 8. Scroll to Top Button
- Fixed button in bottom-right corner

---

## CSS Styling

### Color Palette
| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Background | #000000 | Main background |
| Secondary Background | #050505 | Alternative sections |
| Card Background | #0a0a0a | Cards and containers |
| Border | #151515 | Card borders |
| Text Primary | #ffffff | Main text |
| Text Secondary | rgba(255,255,255,0.5-0.7) | Muted text |
| Accent | #ffffff | Buttons, highlights |

### Typography
- **Font Family**: 'Space Grotesk', sans-serif (Google Fonts)
- **Headings**: Bold (700), varying sizes with clamp()
- **Body Text**: 0.85-1.4rem, line-height 1.6-1.8

### Responsive Breakpoints
- Desktop: > 768px
- Mobile: ≤ 768px

### Key CSS Features
- CSS Grid for layouts
- CSS custom properties (variables)
- Smooth scrolling
- Hover transitions
- Mobile-responsive design

---

## JavaScript Functionality

### 1. Smooth Scroll Navigation
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
```

### 2. Scroll to Top Button
- Shows after scrolling 500px
- Smooth scroll to top on click

### 3. Mobile Menu Toggle
- Opens/closes mobile navigation menu
- Closes on link click

### 4. Typewriter Effect (Optional)
- Animated text cycling through strings
- Configurable typing speed and pause time

---

## Sections Overview

| Section | ID | Description |
|---------|-----|-------------|
| Hero | #home | Main introduction with CTA |
| Offerings | #offerings | 4 service cards |
| About | #about | Two-column with decorative circles |
| Skills | #skills | 6 skills with progress bars |
| Contact | #contact | Contact form and info |

---

## Customization Guide

### Changing Colors
Edit these values in `Style.css`:
```css
body {
    background-color: #000000;  /* Change primary background */
}
.offerings-section, .skills-section {
    background: #050505;  /* Change secondary background */
}
```

### Adding New Skills
Add a new skill card in `index.html`:
```html
<div class="skill-card">
    <div class="skill-header">
        <h3>Skill Name</h3>
        <span class="badge">Level</span>
    </div>
    <p>Description</p>
    <div class="progress-track">
        <div class="progress-fill" style="width: XX%"></div>
    </div>
</div>
```

### Adding New Offerings
Add a new offer card in `index.html`:
```html
<div class="offer-card">
    <div class="offer-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Service Title</h3>
    <p>Service description</p>
</div>
```

### Updating Contact Form
The form uses Web3Forms. To change the access key:
```html
<input type="hidden" name="access_key" value="YOUR_NEW_KEY">
```
Get a free key at https://web3forms.com

### Changing Social Links
Update these links in the contact section:
```html
<a href="https://github.com/YOUR_USERNAME" target="_blank">
<a href="https://www.linkedin.com/in/YOUR_PROFILE" target="_blank">
```

---

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Performance Tips
1. Images should be optimized (WebP format recommended)
2. Use lazy loading for below-the-fold content
3. Minify CSS and JavaScript for production
4. Enable gzip compression on server

---

## Credits
- **Developer**: Hamza Raja
- **Font**: Space Grotesk (Google Fonts)
- **Icons**: Font Awesome 6.5.0
- **Form Service**: Web3Forms

---

## License
© 2025 Hamza Raja. All rights reserved.
