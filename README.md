Pixels - Modern Blogging Platform  
  
A 🌟 modern, feature-rich blogging platform built with React, Appwrite, and Tailwind CSS.  
<p align="center">
  <img src="/pixel-1.png" alt="Home page" width="100">
</p>
<p align="center">
  <img src="/pixel-2.png" alt="Post page page" width="100">
</p>
  
Features  
🔐 User Authentication - Secure sign-up and login functionality  
📝 Content Management - Create, edit, and delete blog posts  
✨ Rich Text Editor - TinyMCE integration for beautiful content creation  
🎯 Featured Content - Animated carousel showcasing featured posts  
📱 Responsive Design - Fully responsive interface for all devices   
🎨 Elegant UI - Modern, clean design with smooth animations  
🖼️ Image Handling - Upload and manage images for blog posts  
  
Tech Stack  
React.js: Frontend Framework  
Redux Toolkit: State Management  
Appwrite: Backend/Auth  
Tailwind CSS: Styling  
Framer Motion: Animations  
React Hook Form: Form Handling  
TinyMCE: Rich Text Editor  
React Router DOM: Routing  
Tabler Icons: Icons  
  
🚀 Getting Started  
Prerequisites  
  
Node.js 16+  
npm or yarn  
Appwrite instance (cloud or self-hosted)  
  
Installation  
1️⃣ Clone the repository  
bashCopygit clone [https://github.com/Pranav2302/Pixels.git](https://github.com/Pranav2302/Pixels.git)  
cd pixels-blog  
2️⃣ Install dependencies  
bashCopynpm install  
# or  
yarn install  
3️⃣ Create a .env file in the root directory with your Appwrite credentials  
CopyREACT_APP_APPWRITE_ENDPOINT=your-appwrite-endpoint  
REACT_APP_APPWRITE_PROJECT=your-project-id  
4️⃣ Run the development server  
bashCopynpm start  
# or  
yarn start  
📋 Appwrite Setup  
  
Create an Appwrite project
Create a database with the following collections:  
  
posts - to store blog posts with the following attributes:
  
title (string)  
content (string)  
featuredImage (string - file ID)  
status (string - active/inactive)  
userId (string)  
  
  

  
Create a storage bucket for images  
Set appropriate permissions:  
  
Collection permissions:  

Read: ["role:all"] (anyone can read posts)  
Create: ["role:member"] (only logged-in users can create)  
Update/Delete: ["role:member", "document.userId:user.id"] (users can modify their own posts)  
  

Storage permissions:  

Read: ["role:all"] (anyone can view images)  
Write: ["role:member"] (only logged-in users can upload)  

  
  


Key Components  

🔒 Authentication - User signup, login, and session management  
📖 Post Management - Create, edit, view, and delete posts  
📷 Image Upload - Handle image uploads for post featured images  
📝 Rich Content Editing - TinyMCE integration for formatting content  
🎠 Animated Testimonials - Featured post carousel with elegant animations  
    
Responsive Design  
Pixels is built with a mobile-first approach, ensuring a seamless experience across:  
  
📱 Mobile devices  
💻 Tablets  
🖥️ Desktop computers  
  
Contributing  
Contributions are welcome! Please feel free to submit a Pull Request.  
  
Fork the project  
Create your feature branch (git checkout -b feature/amazing-feature)  
Commit your changes (git commit -m 'Add some amazing feature')  
Push to the branch (git push origin feature/amazing-feature)  
Open a Pull Request  
  
License  
This project is licensed under the MIT License - see the LICENSE file for details.  
Acknowledgments  
  
React  
Appwrite  
Tailwind CSS  
Framer Motion  
TinyMCE  
