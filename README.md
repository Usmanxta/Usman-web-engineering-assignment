# PAF-IAST Website

A one-page website for Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology (PAF-IAST).

## Features

- Responsive one-page design
- Contact form with validation
- Email integration via Formspree
- Social media links
- Modern UI/UX

## Setup Instructions

### 1. Contact Form Setup

The contact form uses Formspree for email handling. To set it up:

1. Go to [Formspree](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Copy the form endpoint URL (looks like: `https://formspree.io/f/xxxxxxxx`)
5. Replace `your-form-id` in the `index.html` file with your actual form ID

**File to edit:** `index.html`
**Line to change:** `<form id="contactForm" action="https://formspree.io/f/your-form-id" method="POST">`

### 2. Images

The website has placeholder areas for images. You need to:

1. Download images from the original PAF-IAST website (paf-iast.edu.pk)
2. Save them in the `images/` folder
3. Update the HTML to use actual image paths instead of placeholders

**Images needed:**
- Hero section image (campus photo)
- About section image (institute photo)
- Any additional images from the original website

### 3. GitHub Upload

1. Create a GitHub account (if you don't have one)
2. Create a new repository named `paf-iast-website`
3. Upload all files from this folder to your GitHub repository
4. Enable GitHub Pages in repository settings
5. Your website will be available at: `https://yourusername.github.io/paf-iast-website/`

## File Structure

```
paf-iast-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript for form validation
├── images/             # Folder for images (create this)
│   └── ...            # Your uploaded images
└── README.md          # This file
```

## Contact Information

- **Address:** Khanpur Road, Mang Haripur, Khyber Pakhtunkhwa
- **Phone:** 0995-111 723 278
- **Fax:** +92-995-645117
- **Email:** info@paf-iast.edu.pk

## Social Media

- **Facebook:** https://www.facebook.com/paf.iast
- **LinkedIn:** https://www.linkedin.com/company/paf-iast
- **Instagram:** https://www.instagram.com/pafiast/

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome (for icons)
- Formspree (for contact form)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes as part of an assignment.