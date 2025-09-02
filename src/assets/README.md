# Assets Folder

This folder contains all static assets like images, icons, and other media files for the User Management System.

## 📁 Folder Structure

```
src/assets/
├── images/
│   ├── index.js          # Export all images
│   ├── login-bg.jpg      # Login page background
│   ├── signup-bg.jpg     # Signup page background
│   ├── profile-bg.jpg    # Profile page background
│   ├── logo.png          # Application logo
│   └── avatar.png        # Default avatar image
└── README.md             # This file
```

## 🖼️ How to Add Images

### 1. Add Your Image Files
Place your image files in the `src/assets/images/` folder:
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.svg`, `.webp`
- Recommended sizes:
  - Background images: 1200x800px or similar aspect ratio
  - Logos: 200x200px or similar
  - Avatars: 400x400px or similar

### 2. Update the Index File
Add your new image to `src/assets/images/index.js`:

```javascript
// Import your new image
import myNewImage from './my-new-image.jpg';

// Export it
export {
  loginBg,
  signupBg,
  profileBg,
  logo,
  avatar,
  myNewImage  // Add your new image here
};
```

### 3. Use in Components
Import and use your image in any component:

```javascript
import { myNewImage } from '../../assets/images';

// Use in JSX
<Box sx={{ backgroundImage: `url(${myNewImage})` }}>
  {/* Your content */}
</Box>
```

## 📋 Current Images

| Image | File | Usage |
|-------|------|-------|
| `loginBg` | `login-bg.jpg` | Login page left side background |
| `signupBg` | `signup-bg.jpg` | Signup page left side background |
| `profileBg` | `profile-bg.jpg` | Profile page background |
| `logo` | `logo.png` | Application logo |
| `avatar` | `avatar.png` | Default user avatar |

## 🎨 Image Guidelines

### Background Images
- **Size**: 1200x800px or 16:9 aspect ratio
- **Format**: JPG for photos, PNG for graphics with transparency
- **Quality**: Optimize for web (max 500KB)
- **Content**: Professional office/workplace scenes

### Icons and Logos
- **Size**: 200x200px or square aspect ratio
- **Format**: PNG with transparency
- **Style**: Consistent with Material-UI design system

### Avatars
- **Size**: 400x400px or square aspect ratio
- **Format**: PNG or JPG
- **Style**: Professional headshots or placeholder avatars

## 🔧 Best Practices

1. **Optimize Images**: Compress images for web use
2. **Use Descriptive Names**: Name files clearly (e.g., `login-background.jpg`)
3. **Consistent Sizing**: Use recommended sizes for better performance
4. **Update Index**: Always update `index.js` when adding new images
5. **Test Responsiveness**: Ensure images look good on all screen sizes

## 🚀 Quick Start

1. Add your image file to `src/assets/images/`
2. Update `src/assets/images/index.js` to export it
3. Import and use in your component
4. Test on different screen sizes

## 📱 Responsive Images

For responsive images, use CSS properties:
```javascript
sx={{
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}}
```
