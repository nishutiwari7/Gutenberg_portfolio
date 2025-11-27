# 🚀 My Portfolio Blocks - Ultimate Gutenberg Blocks Plugin

[![WordPress](https://img.shields.io/badge/WordPress-6.5+-blue.svg)](https://wordpress.org/)
[![Gutenberg](https://img.shields.io/badge/Gutenberg-Blocks-00a0d2.svg)](https://wordpress.org/gutenberg/)
[![React](https://img.shields.io/badge/Built%20with-React-61dafb.svg)](https://reactjs.org/)
[![ACF](https://img.shields.io/badge/ACF-Repeater-00d3aa.svg)](https://www.advancedcustomfields.com/)
[![License](https://img.shields.io/badge/License-GPL%20v2-orange.svg)](https://www.gnu.org/licenses/gpl-2.0.html)

> **✨ The All-in-One Portfolio Solution That Gets You Hired Fast! ✨**

Transform your WordPress site with this powerful collection of custom Gutenberg blocks designed specifically for modern portfolios, agencies, and creative professionals. Built with the latest WordPress Block API and Full Site Editing (FSE) standards.

![My Portfolio Blocks Demo](https://via.placeholder.com/1200x600/007cba/ffffff?text=My+Portfolio+Blocks+-+Professional+Gutenberg+Blocks)

## 🎯 Why This Plugin Gets You Hired

**Recruiters are actively looking for developers who understand:**
- ✅ Modern Block API with `block.json`
- ✅ React-based block development
- ✅ ACF integration with repeaters
- ✅ Full Site Editing (FSE) readiness
- ✅ WordPress scripting with `@wordpress/scripts`

**This plugin demonstrates ALL of these skills in one impressive package!**

## 🚀 Featured Blocks

### 🎪 Hero Section
Create stunning hero sections with background images, overlays, and customizable call-to-action buttons.

**Features:**
- Background image upload with preview
- Color picker for overlay and text colors
- Opacity controls for overlay effects
- Full-width and wide alignment support
- Mobile-responsive design

![Hero Block](https://via.placeholder.com/600x400/005a87/ffffff?text=Hero+Section+Block)

### 💬 Testimonial Carousel
Showcase client testimonials with a pure CSS/JS carousel (no jQuery dependency!).

**Features:**
- Pure CSS transitions and animations
- Auto-advancing slides with pause on hover
- Navigation arrows and dot indicators
- Mobile-optimized touch gestures
- Easy testimonial management

### 💰 Pricing Table (ACF Powered)
Dynamic pricing tables with Advanced Custom Fields repeater functionality.

**Features:**
- ACF repeater field integration
- Featured plan highlighting
- Custom pricing periods
- Feature lists with line breaks
- Call-to-action buttons per plan

### 👥 Team Member Grid
Display your team in a beautiful, responsive grid layout.

**Features:**
- Customizable columns (1-4)
- Social media links
- Image upload with cropping
- Position and bio fields
- Hover effects and animations

### ❓ FAQ Accordion
Interactive FAQ section with smooth accordion functionality.

**Features:**
- Pure CSS accordion transitions
- Keyboard accessible
- Mobile-friendly design
- Easy content management
- SEO-friendly markup

## 🛠 Technical Stack

| Technology | Purpose |
|------------|---------|
| **React** | Modern block editing interface |
| **@wordpress/scripts** | Build tool and development environment |
| **block.json** | Block configuration and metadata |
| **ACF PRO** | Repeater fields for complex data |
| **Sass/SCSS** | Advanced styling capabilities |
| **ES6+ JavaScript** | Modern frontend interactions |

## 📦 Installation

### Method 1: WordPress Admin (Recommended)
1. Download the latest release from GitHub
2. Go to WordPress Admin → Plugins → Add New
3. Click "Upload Plugin" and select the ZIP file
4. Activate the plugin

### Method 2: Manual Installation
```bash
# Clone the repository
git clone https://github.com/your-username/my-portfolio-blocks.git

# Install dependencies
cd my-portfolio-blocks
npm install

# Build for production
npm run build

# Upload to /wp-content/plugins/
```

### Method 3: Development Setup
```bash
# Clone and setup
git clone https://github.com/your-username/my-portfolio-blocks.git
cd my-portfolio-blocks

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🎮 Quick Start

### 1. Add a Hero Section
```js
// In your WordPress editor:
// 1. Click the "+" button
// 2. Search for "Hero Section"
// 3. Add background image and customize text
// 4. Adjust overlay and text colors
```

### 2. Create a Pricing Table
```php
// The plugin automatically creates ACF fields
// Just add the block and start filling in your pricing plans!
```

### 3. Build a Testimonial Carousel
```js
// Add the testimonial carousel block
// Use the sidebar to add multiple testimonials
// Customize automatically appears on frontend!
```

## 🔧 Configuration

### Required Plugins
- **Advanced Custom Fields PRO** (for Pricing Table block)
- **WordPress 5.8+** (for block.json support)

### Block Patterns
The plugin includes pre-designed block patterns for common portfolio layouts:

```php
// Coming in v2.0:
// - Portfolio Grid Pattern
// - Service Showcase Pattern  
// - Contact Section Pattern
```

## 💡 Advanced Usage

### Custom CSS Variables
```css
.hero-section {
    --hero-min-height: 500px;
    --hero-padding: 40px 20px;
    --overlay-opacity: 0.5;
}

.team-grid {
    --team-columns: 3;
    --team-gap: 30px;
}
```

### Hooks and Filters
```php
// Modify block output
add_filter('my_portfolio_blocks/hero_content', function($content, $attributes) {
    // Custom logic here
    return $content;
}, 10, 2);

// Add custom block styles
add_theme_support('wp-block-styles');
```

## 🎨 Customization Examples

### Change Color Scheme
```scss
// In your theme's style.css
.wp-block-my-portfolio-blocks-hero-section {
    .hero-button {
        background-color: your-brand-color;
    }
}
```

### Modify Grid Layout
```css
.team-grid {
    --team-columns: 4;
    gap: 20px;
}
```

## 📱 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 70+ | ✅ Full |
| Firefox | 65+ | ✅ Full |
| Safari | 12+ | ✅ Full |
| Edge | 79+ | ✅ Full |

## 🚀 Performance

- **Zero jQuery dependency** - Pure modern JavaScript
- **CSS-only animations** where possible
- **Optimized image loading** with lazy loading ready
- **Minified production builds** with tree shaking

## 🔄 Version History

| Version | Date | Features |
|---------|------|----------|
| v1.0.0 | 2024 | Initial release with 5 core blocks |
| v1.1.0 | Coming Soon | Block patterns and more customization |
| v2.0.0 | Roadmap | FSE templates and global styles |

## 🤝 Contributing

We love contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin amazing-feature`
5. **Open** a Pull Request

### Development Guidelines
```bash
# Code standards
npm run lint:js
npm run lint:css
npm run format

# Building
npm run build
npm run plugin-zip
```

## 📋 To-Do List

- [ ] Add block patterns
- [ ] Global style variations
- [ ] More social media icons
- [ ] Animation options
- [ ] Block templates
- [ ] Internationalization (i18n)

## 🐛 Troubleshooting

### Common Issues

**Block not appearing?**
- Ensure Gutenberg is active
- Check for console errors
- Verify ACF PRO is installed for Pricing Table

**Styles not loading?**
- Clear cache and hard reload
- Check `wp_enqueue_scripts` priority
- Verify build process completed

### Debug Mode
```php
// Add to wp-config.php
define('WP_DEBUG', true);
define('SCRIPT_DEBUG', true);
```

## 📞 Support

- **Documentation**: [GitHub Wiki](https://github.com/your-username/my-portfolio-blocks/wiki)
- **Issues**: [GitHub Issues](https://github.com/your-username/my-portfolio-blocks/issues)
- **Email**: your-email@domain.com

## 🏆 Showcase

**Built something amazing?** We'd love to see it! Share your creations:

1. Tweet with #MyPortfolioBlocks
2. Submit a pull request to our showcase
3. Share on WordPress.org

## 📜 License

This project is licensed under the GPL v2 License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- WordPress Core Team for the Block API
- ACF Team for amazing custom fields
- React Team for the fantastic framework
- Gutenberg contributors for pushing WordPress forward

---

## 💼 Ready to Impress Recruiters?

**This plugin demonstrates:**

- ✅ Modern WordPress development practices
- ✅ Block API mastery
- ✅ React integration skills
- ✅ ACF proficiency
- ✅ Build tool expertise
- ✅ Full Site Editing readiness

**Add this to your portfolio and watch the job offers roll in!**

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Happy coding!** 🎉

[WordPress](https://wordpress.org) • [Gutenberg](https://wordpress.org/gutenberg/) • [React](https://reactjs.org/) • [ACF](https://www.advancedcustomfields.com/)

</div>

## 🚀 Quick Deployment

### Deploy to WordPress Site
```bash
# Build and deploy
npm run build
zip -r my-portfolio-blocks.zip . -x "*.git*" "node_modules/*" "*.DS_Store"
```

### Add to Your Theme
```php
// Include in your theme's functions.php
require_once get_template_directory() . '/plugins/my-portfolio-blocks/my-portfolio-blocks.php';
```

---

**⭐ Pro Tip:** Fork this repository and customize the blocks for your specific needs. Recruiters love seeing personalized versions of popular plugins!

---

<div align="center">

**Built with ❤️ for the WordPress Community**

![WordPress](https://img.shields.io/badge/Made%20for-WordPress-0073aa.svg)
![Gutenberg](https://img.shields.io/badge/Gutenberg-Ready-00a0d2.svg)
![React](https://img.shields.io/badge/Powered%20by-React-61dafb.svg)

</div>