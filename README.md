# 🔎 DevFinder

### A GitHub profile finder built with JavaScript.

Search for GitHub users by their username and explore their profiles, repositories, followers, and other publicly available information using the GitHub API.

**Live Demo:** [DevFinder](https://suprio-dev.github.io/DevFinder/)

---

## ✨ Features

- Search GitHub users by username
- Display GitHub profile information
- View profile avatar, name, and bio
- Display location, company, website, and social links when available
- Show public repository count
- Display follower and following counts
- View public gist count
- Handle missing profile information with fallback values
- Fetch user data dynamically using the GitHub API
- Handle unavailable users and missing data

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling & UI design |
| JavaScript | Application logic & DOM manipulation |
| GitHub REST API | Fetching GitHub profile data |
| Fetch API | Asynchronous API requests |

---

## 🔄 How It Works

```text
Enter GitHub Username
         ↓
    Submit Search
         ↓
  JavaScript Fetch API
         ↓
     GitHub API
         ↓
  Receive Profile Data
         ↓
  Process JSON Response
         ↓
 Display User Information
```

DevFinder sends a request to the GitHub API using the entered username. The returned JSON data is processed with JavaScript and displayed dynamically on the page.

---

## 🌐 API Integration

DevFinder uses the **GitHub REST API** to retrieve publicly available user profile information.

```js
const response = await fetch(
  `https://api.github.com/users/${username}`
);

const data = await response.json();
```

The application uses the API response to display relevant profile details and handles unavailable information with fallback values.

---

## 🎯 Why I Built It

This project was built to practice working with:

- DOM manipulation
- Event listeners and form submission
- User input and validation
- Fetch API and asynchronous JavaScript
- `async/await`
- Working with JSON data
- REST API integration
- Dynamic DOM updates
- Conditional rendering and fallback values
- Error handling
- Displaying data from external APIs

---

## 🚀 Run Locally

```bash
git clone https://github.com/suprio-dev/DevFinder.git
cd DevFinder
```

Open `index.html` using VS Code Live Server.

No build tools or package installation are required if the project uses plain HTML, CSS, and JavaScript.

---

## 📌 Project Status

**Completed — v1.0**

Built as a hands-on project to strengthen my JavaScript fundamentals and learn how to work with REST APIs, asynchronous requests, and dynamic data rendering.

More features may be added as the project evolves.
