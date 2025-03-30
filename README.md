# 📌 Todos-List

## 🚀 Live Website
🔗 **[View Live](https://aryavishal1706.github.io/Todos-List/)**

## 📖 About
Todos-List is a simple and interactive React-based To-Do List Application that helps users manage daily tasks efficiently. With this app, users can add, delete, and track their to-do items in an intuitive and responsive interface.

## 📸 Preview
### Home Page
![Home Page](public/home.jpeg)

### About Page
![About Page](public/about.jpeg)

## 📂 Project Structure
```
Todos-List/
│-- src/
│   │-- MyComponents/
│   │   │-- images/
│   │   │   ├── vishal.png
│   │   ├── AddTodo.js
│   │   ├── Todos.js
│   │   ├── TodoItem.js
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── About.js
│   │-- App.js
│   │-- index.js
│-- public/
│   │-- images/
│   │   ├── home.jpeg
│   │   ├── about.jpeg
│-- README.md
│-- package.json
│-- .gitignore
```

## ⚡ Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/aryaVishal1706/Todos-List.git
   cd Todos-List
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Run the Application**
   ```bash
   npm start
   ```
4. **Build for Production**
   ```bash
   npm run build
   ```

## 📡 Deployment on GitHub Pages
1. Install `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add these lines in `package.json`:
   ```json
   "homepage": "https://aryavishal1706.github.io/Todos-List/",
   "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
   }
   ```
3. Deploy the website:
   ```bash
   npm run deploy
   ```

## 🎯 Features
✅ Add & Remove Todos  
✅ Local Storage Support  
✅ Responsive Design  
✅ React Hooks Implementation  

## 👨‍💻 Technologies Used
- **React.js**
- **JavaScript (ES6+)**
- **CSS3**
- **Bootstrap**
- **LocalStorage API**

---
### 🌟 If you like this project, consider giving it a ⭐ on GitHub!
