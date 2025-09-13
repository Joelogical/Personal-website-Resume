# Getting Started with Your Portfolio Website

Welcome to your new portfolio website! This guide will help you understand how everything works and how to customize it for your needs.

## 📁 File Structure

Your website consists of these files:
- `index.html` - The main webpage (what people see)
- `styles.css` - All the visual styling (colors, fonts, layout)
- `script.js` - Interactive features (smooth scrolling, animations)
- `README.md` - Project description
- `GETTING_STARTED.md` - This guide

## 🚀 How to View Your Website

### Option 1: Open Directly in Browser
1. Double-click the `index.html` file
2. It should open in your default web browser

### Option 2: Use Live Server (Recommended)
1. Install VS Code if you haven't already
2. Install the "Live Server" extension
3. Right-click on `index.html` and select "Open with Live Server"
4. This automatically refreshes when you make changes

## ✏️ Customizing Your Website

### Step 1: Update Your Personal Information

Open `index.html` and look for comments that say `TODO:`. These are the sections you need to customize:

**Hero Section (Top of page):**
```html
<!-- Change this line: -->
<p class="hero-description">
    I'm passionate about [YOUR FIELD/INTERESTS]. This website showcases my work, experience, and projects.
</p>
```

**About Me Section:**
- Replace the placeholder text with your actual story
- Add your real photo (see "Adding Images" section below)

**Resume Section:**
- Add your education details
- List your work experience
- Update your skills

**Projects Section:**
- Replace placeholder projects with your actual work
- Add real screenshots and links

**Contact Section:**
- Update with your real email, LinkedIn, and GitHub

### Step 2: Adding Images

**For your profile photo:**
1. Create a folder called `images` in your project
2. Save your photo as `profile.jpg` (or similar)
3. In `index.html`, replace this:
```html
<div class="placeholder-image">
    <p>Your Photo Here</p>
    <small>Replace this with your professional photo</small>
</div>
```

With this:
```html
<img src="images/profile.jpg" alt="Joel Smith" class="profile-photo">
```

4. Add this CSS to `styles.css`:
```css
.profile-photo {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
}
```

**For project screenshots:**
1. Save project images in the `images` folder
2. Replace placeholder divs with actual `<img>` tags

### Step 3: Changing Colors

The website uses a blue color scheme. To change it:

1. Open `styles.css`
2. Find these color variables at the top (you can add them):

```css
/* Add this at the very top of styles.css */
:root {
    --primary-color: #3498db;     /* Main blue color */
    --secondary-color: #2c3e50;   /* Dark blue/gray */
    --accent-color: #e74c3c;      /* Red accent (change this!) */
}
```

3. Replace color codes throughout the file:
   - `#3498db` (blue) - Main buttons and highlights
   - `#2c3e50` (dark blue) - Headers and navbar
   - Choose your own colors from [coolors.co](https://coolors.co)

### Step 4: Adding Your Projects

For each project, copy this template in the projects section:

```html
<div class="project-card">
    <div class="project-image">
        <img src="images/your-project.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Describe what this project does, what technologies you used, and what you learned.</p>
        <div class="project-links">
            <a href="https://your-live-site.com" class="project-link">View Live</a>
            <a href="https://github.com/yourusername/project" class="project-link">View Code</a>
        </div>
    </div>
</div>
```

## 🎨 Styling Tips

### Fonts
To change the font, update this line in `styles.css`:
```css
body {
    font-family: 'Arial', sans-serif; /* Change 'Arial' to your preferred font */
}
```

Popular web-safe fonts:
- `'Helvetica', sans-serif`
- `'Georgia', serif`
- `'Times New Roman', serif`

### Spacing
- Use existing classes like `mb-1`, `mb-2`, `mb-3` for margins
- The number represents rem units (1rem = 16px typically)

### Responsive Design
The website automatically adapts to different screen sizes. Test it by:
1. Opening in browser
2. Press F12 (developer tools)
3. Click the device toggle button
4. Try different screen sizes

## 🔧 Adding New Sections

To add a new section (like "Testimonials" or "Blog"):

1. **Add navigation link** in `index.html`:
```html
<li class="nav-item">
    <a href="#testimonials" class="nav-link">Testimonials</a>
</li>
```

2. **Add the section** before the contact section:
```html
<section id="testimonials" class="testimonials">
    <div class="container">
        <h2>What People Say</h2>
        <!-- Add your content here -->
    </div>
</section>
```

3. **Add styling** in `styles.css`:
```css
.testimonials {
    background-color: #f8f9fa;
    /* Add more styles as needed */
}
```

## 📱 Making It Mobile-Friendly

Your website is already responsive, but here are tips to improve mobile experience:

1. **Test on real devices** - not just browser tools
2. **Keep text readable** - minimum 16px font size
3. **Make buttons finger-friendly** - at least 44px tall
4. **Optimize images** - compress them to load faster

## 🚀 Publishing Your Website

### Option 1: GitHub Pages (Free)
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your main branch as source
4. Your site will be live at `username.github.io/repository-name`

### Option 2: Netlify (Free)
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Get a free subdomain or connect your own domain

### Option 3: Traditional Web Hosting
Upload all files to any web hosting service using FTP/cPanel.

## 🐛 Common Issues and Solutions

### "My changes don't show up"
- **Hard refresh**: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- **Check file paths**: Make sure `styles.css` and `script.js` are in the same folder as `index.html`

### "Images don't load"
- **Check file names**: Are they exactly the same in HTML and your files?
- **Check file extensions**: `.jpg`, `.png`, `.gif` are case-sensitive
- **Use forward slashes**: `images/photo.jpg` not `images\photo.jpg`

### "Layout looks broken"
- **Validate your HTML**: Use [validator.w3.org](https://validator.w3.org)
- **Check CSS syntax**: Missing semicolons and brackets are common issues

## 📚 Next Steps for Learning

1. **Learn more CSS**: 
   - CSS Grid and Flexbox tutorials
   - [CSS-Tricks](https://css-tricks.com) for tips and tricks

2. **Add interactive features**:
   - Contact forms that actually work
   - Image galleries
   - Smooth animations

3. **Performance optimization**:
   - Compress images
   - Minify CSS and JavaScript
   - Add meta tags for SEO

4. **Advanced features**:
   - Dark mode toggle
   - Blog integration
   - Content management system

## 🆘 Getting Help

- **HTML/CSS Questions**: [Mozilla Developer Network (MDN)](https://developer.mozilla.org)
- **Specific Issues**: Google your error message + "stackoverflow"
- **Design Inspiration**: [Dribbble](https://dribbble.com), [Behance](https://behance.net)
- **Free Resources**: [FreeCodeCamp](https://freecodecamp.org)

Remember: **Start small, make one change at a time, and test frequently!**

Good luck with your portfolio! 🎉