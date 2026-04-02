# Ring Tech Global - Corporate Website

A modern, high-end corporate website designed for Ring Tech Global, an IT services and digital transformation company. This project prioritizes a premium aesthetic with a clean, multi-page static architecture utilizing pure HTML, CSS, and Vanilla JavaScript.

## 🚀 Features

* **Multi-Page Architecture:** Clean, modular structure with dedicated pages for About, Products, Digital Transformation, Contact, and more.
* **Separation of Concerns:** Global styles and JavaScript logic are extracted into dedicated `assets/css` and `assets/js` folders for easy maintenance.
* **Zero-Setup Environment:** No `npm`, no terminals, and no local servers required to run or edit the site.
* **Dynamic Navigation:** Features a responsive desktop hover-dropdown menu and a tap-to-expand mobile accordion menu.
* **Modern UI/UX:** Corporate styling featuring glassmorphism (frosted glass effects), interactive cards, and a professional dark slate/teal color palette.
* **Fully Responsive:** Seamlessly adapts to desktop, tablet, and mobile screen sizes using Tailwind utility classes.

## 🛠 Tech Stack

* **Core:** HTML5 & CSS3
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via CDN)
* **Icons:** Heroicons / Custom SVG
* **Interactivity:** Vanilla JavaScript (Mobile menu, dropdowns, and logo filtering)

## 💻 Getting Started

### Prerequisites
* A modern web browser (Chrome, Edge, Firefox, Safari).
* A code editor like [VS Code](https://code.visualstudio.com/) for making changes.

### Running the Project
1. Clone or download this repository to your local machine.
2. Navigate to the project folder.
3. **Double-click `index.html`**. 
4. The website will open directly in your default web browser—no local server required!

## 📂 Project Structure

```text
ringtechglobal/
├── assets/                 
│   ├── css/
│   │   └── style.css       # Global custom styles and color variables
│   ├── images/             # Partner logos, gallery placeholders, and photos
│   ├── js/
│   │   └── main.js         # Global logic for mobile menu and active states
│   └── videos/             # Background loop for the hero section
├── index.html              # Main Homepage
├── about.html              # About Us & Company Story
├── products.html           # Hardware & Product Categories
├── DigitalTransformation.html # Core Digital Solutions & Services
├── gallery.html            # Visual Showcase
├── tracking.html           # Shipment Tracking Portal
├── contact.html            # Contact Form & Information
├── privacy.html            # Privacy Policy
├── terms.html              # Terms & Conditions
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation (this file)
