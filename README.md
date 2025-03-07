Pixels - Modern Blogging Platform
<p align="center"> <img src="/public/Logo3.png" alt="Pixels Logo" width="100"> </p>
Pixels is a modern, feature-rich blogging platform built with React, Appwrite, and Tailwind CSS. It allows users to create, manage, and explore beautiful content with an intuitive user interface.

🌟 Features
User Authentication - Secure sign-up and login functionality
Content Management - Create, edit, and delete blog posts
Rich Text Editor - TinyMCE integration for beautiful content creation
Featured Content - Animated carousel showcasing featured posts
Responsive Design - Fully responsive interface for all devices
Elegant UI - Modern, clean design with smooth animations
Image Handling - Upload and manage images for blog posts
🛠️ Technologies Used
Frontend Framework: React.js
State Management: Redux Toolkit
Backend/Auth: Appwrite
Styling: Tailwind CSS
Animations: Framer Motion
Form Handling: React Hook Form
Rich Text Editor: TinyMCE
Routing: React Router DOM
Icons: Tabler Icons
🚀 Getting Started
Prerequisites
Node.js 16+
npm or yarn
Appwrite instance (cloud or self-hosted)
Installation
Clone the repository
Install dependencies
Create a .env file in the root directory with your Appwrite credentials:
Run the development server
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
🏗️ Project Structure
🔍 Key Components
Authentication - User signup, login, and session management
Post Management - Create, edit, view, and delete posts
Image Upload - Handle image uploads for post featured images
Rich Content Editing - TinyMCE integration for formatting content
Animated Testimonials - Featured post carousel with elegant animations
📱 Responsive Design
Pixels is built with a mobile-first approach, ensuring a seamless experience across:

Mobile devices
Tablets
Desktop computers
🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the project
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
React
Appwrite
Tailwind CSS
Framer Motion
TinyMCE
