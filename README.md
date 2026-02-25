# LocalLoop - Community Event Discovery Platform

## Project Overview
LocalLoop is a React-based web aplication designed to simplify community event discovery. The platform allows users to explore local events, view detailed information, and create new events through a dynamic form interface.

This project demonstrates modern frontend architecture using React, React Router, Context API, and Tailwind CSS, while applying structured Git workflow and progressive development practices.

## Problem Statement
Many local communities lack a centralized platform for discovering and sharing upcoming events. Information is often fragmented across social media platforms or informal communication channels, making it difficult for users to stay informed.

The goal of LocalLoop is to provide a lightweight, structured event listing system that enables:
- Easy event exploration
- Detailed event viewing
- Seamless event creation

## Solution Approach
The solution was implemented using a component-based architecture in React.

Key architectural decisions:
- **React Router** for dynamic navigation and URL-based routing.
- **Context API** for global state management of events.
- **Controlled components** for reliable form handling.
- **Tailwind CSS** for utility-first responsive styling.
- Modular folder structure separating components, pages, data, and state management.

The application maintains a clean separation of concerns between:
- UI components
- Page views
- Global state
- Static data

## Tech Stack
- React (Vite)
- React Router
- Context API (Global State Management)
- Tailwind CSS
- JavaScript (ES6+)
- Git & Github

## Features Implemented (Part 3)
### Core functionality
- Project initialized using Vite + React
- Tailwind CSS integration
- Structured folder architecture
- Routing configuration with React Router
- Explore page displaying list of events
- Dynamic EventDetails page using URL parameters
- Global state management using Context API
- Add Event form with controlled inputs
- Programmatic navigation after form submission
- Clean structured Git commit history

## Folder Structure
```
src/
    components/
        events/
    pages/
        Explore.jsx
        EventDetails.jsx
        AddEvent.jsx
    store/
        EventsContext.jsx
    data/
        events.js
```
## Screenshots
Screenshots will be added in Part 4 after final UI enhancements and Figma refinements.

## Installation and Setup
```
git clone https://github.com/KolobetsoPatji/localloop-capstone-project.git
cd localloop-capstone-project
npm install
npm run dev
```
## Future Improvements
The next phase of development will focus on:
- Enhanced UI/UX polish
- Improved form validation and error handling
- Empty state handling for event listings
- Edit and delete event functionality
- Responsive design refinements
- Performance optimizations
- Deployment to production environment

## Development Phases
```
Part 3: Core build implementation (routing, state management, event creation).
Part 4: Feature enhancements, UI improvements, and application refinement.
```
