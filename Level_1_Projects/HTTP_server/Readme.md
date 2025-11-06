# Node.js HTTP Server with URL Routing

A simple Node.js server built using only the built-in **HTTP**, **URL**, and **FS** modules.  
This project demonstrates basic routing, HTML file serving, and error logging without using Express or external packages.

## Features
- Serves **index.html** and **about.html** based on the URL path.
- Logs errors in an `error.log` file if HTML files are missing.
- Returns a **404 - Page Not Found** for unmatched routes.
- Uses only core Node.js modules.

## Routes
| Route | Description |
|--------|--------------|
| `/` | Serves `index.html` or a fallback message if missing |
| `/about` | Serves `about.html` or a fallback message if missing |
| Any other path | Returns 404 error page |

## Tech Stack
Node.js (HTTP, URL, FS, Path modules)
HTML
CSS
