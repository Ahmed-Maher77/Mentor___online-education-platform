# Course Data Management Guide

This guide explains how to use the dynamic course data system in the course-details.html page.

## Overview

The course details page now uses a dynamic data management system that allows you to easily change course information without editing HTML directly. All course data is stored in `assets/js/course-data.js` and can be updated programmatically.

## Quick Start

### 1. Change Course Data Programmatically

You can update course data using the `CourseManager` object:

```javascript
// Update specific course information
CourseManager.updateCourseData({
  title: "New Course Title",
  price: "$399",
  trainer: "John Doe",
  seats: "30",
});
```

### 2. Load Predefined Course Templates

The system includes predefined templates for different course types:

```javascript
// Load web development course (default)
CourseManager.loadCourseTemplate("webDevelopment");

// Load digital marketing course
CourseManager.loadCourseTemplate("digitalMarketing");

// Load content creation course
CourseManager.loadCourseTemplate("contentCreation");
```

### 3. Get Current Course Data

```javascript
// Get all current course data
const currentData = CourseManager.getCourseData();
console.log(currentData);
```

## Available Course Templates

### 1. Web Development Course

- **Title**: Complete Web Development Bootcamp
- **Price**: $299
- **Duration**: 12 weeks
- **Trainer**: Antonio Rodriguez
- **Level**: Beginner to Advanced

### 2. Digital Marketing Course

- **Title**: Digital Marketing & SEO Mastery
- **Price**: $199
- **Duration**: 8 weeks
- **Trainer**: Lana Chen
- **Level**: Beginner to Intermediate

### 3. Content Creation Course

- **Title**: Professional Copywriting & Content Strategy
- **Price**: $149
- **Duration**: 6 weeks
- **Trainer**: Brandon Williams
- **Level**: All Levels

## Course Data Structure

The course data object contains the following properties:

```javascript
{
    // Basic information
    title: "Course Title",
    subtitle: "Course subtitle",
    category: "Course Category",
    mainTitle: "Main course title",
    description: "Course description",

    // Course details
    trainer: "Trainer Name",
    price: "$299",
    seats: "25",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    format: "Online & Self-paced",

    // Media
    image: "assets/img/course-details.jpg",

    // Tab content
    tabs: {
        overview: { title, subtitle, content },
        curriculum: { title, subtitle, content },
        learning: { title, subtitle, content },
        requirements: { title, subtitle, content },
        career: { title, subtitle, content }
    }
}
```

## Available Functions

### `CourseManager.updateCourseData(newData)`

Updates course data with new information.

**Parameters:**

- `newData` (object): Object containing new course data

**Example:**

```javascript
CourseManager.updateCourseData({
  title: "Advanced JavaScript Course",
  price: "$399",
  trainer: "Sarah Johnson",
});
```

### `CourseManager.loadCourseTemplate(templateName)`

Loads a predefined course template.

**Parameters:**

- `templateName` (string): Name of the template ('webDevelopment', 'digitalMarketing', 'contentCreation')

**Returns:** `boolean` - true if template loaded successfully

**Example:**

```javascript
CourseManager.loadCourseTemplate("digitalMarketing");
```

### `CourseManager.getCourseData()`

Returns the current course data.

**Returns:** `object` - Current course data

**Example:**

```javascript
const data = CourseManager.getCourseData();
console.log(data.title, data.price);
```

### `CourseManager.resetCourseData()`

Resets course data to the default web development template.

**Example:**

```javascript
CourseManager.resetCourseData();
```

### `CourseManager.populateCourseData()`

Manually triggers the update of all page elements with current course data.

**Example:**

```javascript
CourseManager.populateCourseData();
```

## Adding New Course Templates

To add a new course template, edit `assets/js/course-data.js` and add a new entry to the `courseTemplates` object:

```javascript
const courseTemplates = {
  // ... existing templates ...

  newCourse: {
    title: "New Course Title",
    subtitle: "Course subtitle",
    category: "New Category",
    mainTitle: "Main title",
    description: "Course description",
    trainer: "Trainer Name",
    price: "$199",
    seats: "20",
    duration: "10 weeks",
    level: "Intermediate",
    format: "Online & Self-paced",
    image: "assets/img/new-course.jpg",
  },
};
```

Then you can load it using:

```javascript
CourseManager.loadCourseTemplate("newCourse");
```

## Page Elements Updated

The following page elements are automatically updated when course data changes:

- Page title
- Course title (main heading)
- Course subtitle
- Breadcrumb navigation
- Course main title
- Course description
- Course image
- Trainer name
- Course price
- Available seats
- Course duration
- Course level
- Course format
- All tab content (5 tabs)

## Browser Console Examples

You can test the system directly in your browser's console:

```javascript
// Load digital marketing course
CourseManager.loadCourseTemplate("digitalMarketing");

// Update specific data
CourseManager.updateCourseData({
  price: "$250",
  seats: "15",
});

// Get current data
console.log(CourseManager.getCourseData());

// Reset to default
CourseManager.resetCourseData();
```

## File Structure

```
assets/
├── js/
│   ├── course-data.js          # Course data and functions
│   └── main.js                 # Main site JavaScript
└── ...

course-details.html              # Course details page
COURSE_DATA_GUIDE.md            # This documentation
```

## Notes

- All changes are applied immediately without page refresh
- The system is backward compatible with existing HTML structure
- Course data is stored in a separate file for easy maintenance
- The system automatically handles missing elements gracefully
- All functions are available globally through the `CourseManager` object
