# Joel Smith - Personal Website & Resume

A modern, responsive personal website and portfolio built with HTML5, CSS3, and JavaScript. This site showcases my professional experience, projects, and provides an easy way for visitors to get in touch.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Navigation**: Sticky header with smooth scrolling navigation
- **Resume Section**: Tabbed interface displaying experience, education, and certifications
- **Project Portfolio**: Showcase of recent projects with descriptions and links
- **Contact Form**: Working contact form with validation
- **Accessibility**: Built with accessibility best practices in mind
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🚀 Live Demo

You can view the live website at: [Your Website URL]

## 📁 Project Structure

```
Personal-website-Resume/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── assets/             # Static assets
│   ├── images/         # Images and photos
│   ├── fonts/          # Custom fonts (if any)
│   └── icons/          # Icons and favicons
└── README.md          # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern HTML features
- **CSS3**: Flexbox, Grid, CSS Variables, and animations
- **JavaScript**: ES6+ features for interactivity
- **Font Awesome**: Icons throughout the site
- **Google Fonts**: Inter font family for typography

## 🎨 Design Features

### Color Scheme
- Primary: #2563eb (Blue)
- Secondary: #64748b (Slate)
- Accent: #f59e0b (Amber)
- Background: #ffffff (White) / #f8fafc (Light Gray)

### Typography
- Font Family: Inter (Google Fonts)
- Responsive font sizes using rem units
- Proper line height and spacing for readability

### Layout
- CSS Grid and Flexbox for responsive layouts
- Mobile-first approach
- Smooth scrolling between sections
- Sticky navigation header

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## ⚡ Performance Features

- Optimized CSS with custom properties
- Debounced scroll events
- Lazy loading animations
- Minimal external dependencies

## 🔧 Customization

### Personal Information
Update the following in `index.html`:
- Name and title in the hero section
- About me content
- Experience and education details
- Project information
- Contact details

### Styling
Customize colors and fonts in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #64748b;
    /* Add your custom colors */
}
```

### Content Sections
The website includes these main sections:
1. **Hero/Home**: Introduction and call-to-action
2. **About**: Personal information and skills
3. **Resume**: Experience, education, and certifications
4. **Projects**: Portfolio of work
5. **Contact**: Contact form and information

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/Personal-website-Resume.git
   ```

2. **Open the project**:
   ```bash
   cd Personal-website-Resume
   ```

3. **Launch the website**:
   - Open `index.html` in your web browser
   - Or use a local server like Live Server in VS Code

4. **Customize the content**:
   - Update personal information in `index.html`
   - Modify colors and styling in `styles.css`
   - Add your own images to `assets/images/`

## 📝 Content Guidelines

### Adding Projects
To add a new project, copy this structure in the projects section:

```html
<div class="project-card">
    <div class="project-image">
        <div class="image-placeholder">
            <i class="fas fa-project-icon"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span class="tag">Technology</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link">
                <i class="fab fa-github"></i> GitHub
            </a>
        </div>
    </div>
</div>
```

### Updating Resume
The resume section uses tabs. To add content:
1. Add a new tab button
2. Create corresponding tab content
3. Update the JavaScript to handle the new tab

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📞 Contact

**Joel Smith**
- Email: joel.smith@email.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern web design trends

---

**Note**: This is a personal website template. Feel free to customize it according to your needs and personal branding. 
