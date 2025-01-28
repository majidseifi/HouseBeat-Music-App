# HouseBeat Music App

A web application developed as part of the WEB222 course at Seneca College. HouseBeat is a music discovery platform focused on house music and electronic artists.

## Project Overview

HouseBeat allows users to:
- Browse featured electronic music artists
- View non-explicit songs from each artist
- Access artist social media links
- Request new artists to be added to the platform
- Subscribe to a newsletter for updates

## Features

- **Artist Discovery**: Browse through a curated list of electronic music artists
- **Song Visualization**: View song details including:
  - Duration
  - Release year
  - Language
  - Album artwork
- **Content Filtering**: Automatic filtering of explicit content
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode Support**: Automatically adapts to system preferences
- **Artist Request System**: Form to submit new artist suggestions
- **Newsletter Subscription**: Stay updated with latest additions

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- REST API Integration
- Water.css for base styling

## Project Structure

```
├── index.html          # Main application page
├── request-artist.html # New artist request form
├── css/
│   ├── water.css      # Base CSS framework
│   └── custom.css     # Custom styling
└── js/
    ├── app.js         # Main application logic
    ├── artists.js     # Artist data
    └── songs.js       # Song data
```

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/majidseifi/housebeat-music-app.git
   ```
2. Open `index.html` in a web browser

## Features Implementation

### Song Display
- Songs are displayed in a responsive grid layout
- Each song card includes:
  - Album artwork
  - Title
  - Duration (formatted as mm:ss)
  - Release year
  - Language

### Form Validation
- Email validation for newsletter subscription
- Required fields validation for artist request form
- Support for multiple social media and song links

## Future Enhancements

1. Add search functionality for artists and songs
2. Implement audio preview functionality
3. Add sorting options for songs (by year, duration, etc.)
4. Integrate with a backend database
5. Add user authentication
6. Implement playlist creation feature

## Academic Integrity

This project was completed for the WEB222 course at Seneca College. All code is original and follows academic integrity policies.

## Author

- **Name:** Majid Seifi Kashani
- **Student ID:** 181487232
- **Date:** Dec 05, 2024

## License

This project is an academic exercise and is not licensed for commercial use.
