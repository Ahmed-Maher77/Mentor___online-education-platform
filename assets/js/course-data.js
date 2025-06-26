// Course Data Management System
// This file contains all course data and functions to update it dynamically

// Course data configuration - easily changeable
const courseData = {
    // Basic course information
    title: "Complete Web Development Bootcamp",
    subtitle: "Master the fundamentals of web development and build modern, responsive websites. This comprehensive course covers everything from HTML basics to advanced JavaScript frameworks.",
    category: "Web Development",
    mainTitle: "Complete Web Development Bootcamp",
    description: "This comprehensive web development course is designed to take you from complete beginner to a confident full-stack developer. You'll learn modern web technologies including HTML5, CSS3, JavaScript, React, Node.js, and more. The course includes hands-on projects, real-world applications, and industry best practices to ensure you're job-ready upon completion.",
    
    // Course details
    trainer: "Antonio Rodriguez",
    price: "$299",
    seats: "25",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    format: "Online & Self-paced",
    
    // Course image
    image: "assets/img/course-details.jpg",
    
    // Tab content
    tabs: {
        overview: {
            title: "Comprehensive Web Development Training",
            subtitle: "Our web development bootcamp is designed to provide you with the skills and knowledge needed to build modern, responsive websites and web applications from scratch.",
            content: "This course covers the complete web development stack, from front-end technologies like HTML, CSS, and JavaScript to back-end development with Node.js and database management. You'll work on real-world projects that will help you build a strong portfolio and gain practical experience. The curriculum is constantly updated to reflect the latest industry standards and best practices."
        },
        curriculum: {
            title: "Structured Learning Path",
            subtitle: "Our curriculum is carefully designed to build your skills progressively, ensuring you master each concept before moving to the next level.",
            content: "<strong>Module 1:</strong> HTML5 Fundamentals - Structure, semantics, and accessibility<br><strong>Module 2:</strong> CSS3 & Responsive Design - Styling, layouts, and mobile-first approach<br><strong>Module 3:</strong> JavaScript Essentials - Variables, functions, DOM manipulation<br><strong>Module 4:</strong> Advanced JavaScript - ES6+, async programming, APIs<br><strong>Module 5:</strong> React.js Framework - Components, state management, hooks<br><strong>Module 6:</strong> Backend Development - Node.js, Express, databases<br><strong>Module 7:</strong> Project Development - Real-world applications and deployment"
        },
        learning: {
            title: "Key Skills You'll Master",
            subtitle: "By the end of this course, you'll have the practical skills and theoretical knowledge to build professional web applications.",
            content: "• Create responsive, mobile-friendly websites using HTML5 and CSS3<br>• Write clean, efficient JavaScript code and understand modern ES6+ features<br>• Build interactive user interfaces with React.js and component-based architecture<br>• Develop server-side applications using Node.js and Express framework<br>• Work with databases (MongoDB, MySQL) and implement CRUD operations<br>• Deploy applications to cloud platforms like Heroku and Vercel<br>• Use Git for version control and collaborate on projects<br>• Implement modern development workflows and best practices"
        },
        requirements: {
            title: "Prerequisites and Setup",
            subtitle: "This course is designed for beginners, but some basic computer skills will help you get started faster.",
            content: "<strong>Technical Requirements:</strong><br>• A computer with Windows, Mac, or Linux operating system<br>• At least 8GB RAM and 10GB free disk space<br>• Stable internet connection for video lessons and downloads<br>• Modern web browser (Chrome, Firefox, Safari, or Edge)<br><br><strong>Software You'll Install:</strong><br>• Visual Studio Code (free code editor)<br>• Node.js and npm (JavaScript runtime)<br>• Git (version control system)<br>• Chrome DevTools (browser developer tools)"
        },
        career: {
            title: "Career Opportunities and Growth",
            subtitle: "Web development skills are in high demand across all industries, offering excellent career prospects and growth opportunities.",
            content: "<strong>Job Roles You Can Pursue:</strong><br>• Frontend Developer - $65,000 - $120,000 annually<br>• Full-Stack Developer - $75,000 - $140,000 annually<br>• Web Developer - $60,000 - $110,000 annually<br>• React Developer - $70,000 - $130,000 annually<br>• Freelance Web Developer - $50 - $150 per hour<br><br><strong>Industries Hiring:</strong><br>• Technology companies and startups<br>• E-commerce and retail businesses<br>• Financial services and banking<br>• Healthcare and education sectors<br>• Government and non-profit organizations"
        }
    }
};

// Predefined course templates for easy switching
const courseTemplates = {
    webDevelopment: {
        title: "Complete Web Development Bootcamp",
        subtitle: "Master the fundamentals of web development and build modern, responsive websites. This comprehensive course covers everything from HTML basics to advanced JavaScript frameworks.",
        category: "Web Development",
        mainTitle: "Complete Web Development Bootcamp",
        description: "This comprehensive web development course is designed to take you from complete beginner to a confident full-stack developer. You'll learn modern web technologies including HTML5, CSS3, JavaScript, React, Node.js, and more. The course includes hands-on projects, real-world applications, and industry best practices to ensure you're job-ready upon completion.",
        trainer: "Antonio Rodriguez",
        price: "$299",
        seats: "25",
        duration: "12 weeks",
        level: "Beginner to Advanced",
        format: "Online & Self-paced",
        image: "assets/img/course-details.jpg"
    },
    
    digitalMarketing: {
        title: "Digital Marketing & SEO Mastery",
        subtitle: "Learn comprehensive digital marketing strategies including SEO, social media marketing, content marketing, and analytics. Drive traffic, increase conversions, and grow your online presence effectively.",
        category: "Digital Marketing",
        mainTitle: "Digital Marketing & SEO Mastery",
        description: "Master the art of digital marketing with our comprehensive course covering SEO, social media marketing, content marketing, email campaigns, and analytics. Learn to create effective marketing strategies that drive real results for businesses of all sizes.",
        trainer: "Lana Chen",
        price: "$199",
        seats: "30",
        duration: "8 weeks",
        level: "Beginner to Intermediate",
        format: "Online & Self-paced",
        image: "assets/img/course-2.jpg"
    },
    
    contentCreation: {
        title: "Professional Copywriting & Content Strategy",
        subtitle: "Develop compelling copywriting skills and content strategy expertise. Learn to create engaging content for websites, social media, email campaigns.",
        category: "Content Creation",
        mainTitle: "Professional Copywriting & Content Strategy",
        description: "Transform your writing skills into a profitable career with our comprehensive copywriting and content strategy course. Learn to create compelling content that converts readers into customers across all digital platforms.",
        trainer: "Brandon Williams",
        price: "$149",
        seats: "20",
        duration: "6 weeks",
        level: "All Levels",
        format: "Online & Self-paced",
        image: "assets/img/course-3.jpg"
    }
};

// Function to update course data dynamically
function updateCourseData(newData) {
    // Merge new data with existing data
    Object.assign(courseData, newData);
    
    // Update the page content
    populateCourseData();
}

// Function to load a predefined course template
function loadCourseTemplate(templateName) {
    if (courseTemplates[templateName]) {
        Object.assign(courseData, courseTemplates[templateName]);
        populateCourseData();
        return true;
    }
    return false;
}

// Function to populate course data on the page
function populateCourseData() {
    // Update page title and meta
    document.title = `${courseData.title} - Mentor`;
    
    // Update page elements if they exist
    const elements = {
        'courseTitle': courseData.title,
        'courseSubtitle': courseData.subtitle,
        'breadcrumbCourse': courseData.category,
        'courseMainTitle': courseData.mainTitle,
        'courseDescription': courseData.description,
        'courseTrainer': courseData.trainer,
        'coursePrice': courseData.price,
        'courseSeats': courseData.seats,
        'courseDuration': courseData.duration,
        'courseLevel': courseData.level,
        'courseFormat': courseData.format
    };
    
    // Update each element
    Object.keys(elements).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = elements[id];
        }
    });
    
    // Update course image
    const courseImage = document.getElementById('courseImage');
    if (courseImage) {
        courseImage.src = courseData.image;
        courseImage.alt = courseData.title;
    }
    
    // Update tab content
    updateTabContent();
}

// Function to update tab content
function updateTabContent() {
    const tabs = courseData.tabs;
    
    // Update each tab if content exists
    const tabUpdates = [
        { tabId: '#tab-1', data: tabs.overview },
        { tabId: '#tab-2', data: tabs.curriculum },
        { tabId: '#tab-3', data: tabs.learning },
        { tabId: '#tab-4', data: tabs.requirements },
        { tabId: '#tab-5', data: tabs.career }
    ];
    
    tabUpdates.forEach(update => {
        if (update.data) {
            const titleElement = document.querySelector(`${update.tabId} h3`);
            const subtitleElement = document.querySelector(`${update.tabId} .fst-italic`);
            const contentElement = document.querySelector(`${update.tabId} p:last-child`);
            
            if (titleElement) titleElement.textContent = update.data.title;
            if (subtitleElement) subtitleElement.textContent = update.data.subtitle;
            if (contentElement) contentElement.innerHTML = update.data.content;
        }
    });
}

// Function to get current course data
function getCourseData() {
    return { ...courseData };
}

// Function to reset course data to default
function resetCourseData() {
    Object.assign(courseData, courseTemplates.webDevelopment);
    populateCourseData();
}

// Initialize course data when page loads
document.addEventListener('DOMContentLoaded', function() {
    populateCourseData();
});

// Export functions for external use
window.CourseManager = {
    updateCourseData: updateCourseData,
    loadCourseTemplate: loadCourseTemplate,
    getCourseData: getCourseData,
    resetCourseData: resetCourseData,
    populateCourseData: populateCourseData,
    courseTemplates: courseTemplates
};

// Example usage:
// To change to digital marketing course:
// CourseManager.loadCourseTemplate('digitalMarketing');

// To update specific data:
// CourseManager.updateCourseData({
//     title: "Custom Course Title",
//     price: "$399",
//     trainer: "John Doe"
// });

// To get current course data:
// const currentData = CourseManager.getCourseData(); 

// Course Data Management System
const CourseManager = {
  // Course data storage
  courses: {
    webDevelopment: {
      id: 'webDevelopment',
      title: 'Complete Web Development Bootcamp',
      subtitle: 'Master the fundamentals of web development and build modern, responsive websites. This comprehensive course covers everything from HTML basics to advanced JavaScript frameworks.',
      category: 'Web Development',
      price: '$299',
      trainer: 'Ahmed Maher',
      seats: '25',
      duration: '12 weeks',
      level: 'Beginner to Advanced',
      format: 'Online & Self-paced',
      image: 'assets/img/course-1.jpg',
      description: 'This comprehensive web development course is designed to take you from complete beginner to a confident full-stack developer. You\'ll learn modern web technologies including HTML5, CSS3, JavaScript, React, Node.js, and more. The course includes hands-on projects, real-world applications, and industry best practices to ensure you\'re job-ready upon completion.',
      tabs: {
        overview: {
          title: 'Comprehensive Web Development Training',
          subtitle: 'Our web development bootcamp is designed to provide you with the skills and knowledge needed to build modern, responsive websites and web applications from scratch.',
          content: 'This course covers the complete web development stack, from front-end technologies like HTML, CSS, and JavaScript to back-end development with Node.js and database management. You\'ll work on real-world projects that will help you build a strong portfolio and gain practical experience. The curriculum is constantly updated to reflect the latest industry standards and best practices.',
          image: 'assets/img/tabs/tab-1.png'
        },
        curriculum: {
          title: 'Structured Learning Path',
          subtitle: 'Our curriculum is carefully designed to build your skills progressively, ensuring you master each concept before moving to the next level.',
          content: '<strong>Module 1:</strong> HTML5 Fundamentals - Structure, semantics, and accessibility<br><strong>Module 2:</strong> CSS3 & Responsive Design - Styling, layouts, and mobile-first approach<br><strong>Module 3:</strong> JavaScript Essentials - Variables, functions, DOM manipulation<br><strong>Module 4:</strong> Advanced JavaScript - ES6+, async programming, APIs<br><strong>Module 5:</strong> React.js Framework - Components, state management, hooks<br><strong>Module 6:</strong> Backend Development - Node.js, Express, databases<br><strong>Module 7:</strong> Project Development - Real-world applications and deployment',
          image: 'assets/img/tabs/tab-2.png'
        },
        learning: {
          title: 'Key Skills You\'ll Master',
          subtitle: 'By the end of this course, you\'ll have the practical skills and theoretical knowledge to build professional web applications.',
          content: '• Create responsive, mobile-friendly websites using HTML5 and CSS3<br>• Write clean, efficient JavaScript code and understand modern ES6+ features<br>• Build interactive user interfaces with React.js and component-based architecture<br>• Develop server-side applications using Node.js and Express framework<br>• Work with databases (MongoDB, MySQL) and implement CRUD operations<br>• Deploy applications to cloud platforms like Heroku and Vercel<br>• Use Git for version control and collaborate on projects<br>• Implement modern development workflows and best practices',
          image: 'assets/img/tabs/tab-3.png'
        },
        requirements: {
          title: 'Prerequisites and Setup',
          subtitle: 'This course is designed for beginners, but some basic computer skills will help you get started faster.',
          content: '<strong>Technical Requirements:</strong><br>• A computer with Windows, Mac, or Linux operating system<br>• At least 8GB RAM and 10GB free disk space<br>• Stable internet connection for video lessons and downloads<br>• Modern web browser (Chrome, Firefox, Safari, or Edge)<br><br><strong>Software You\'ll Install:</strong><br>• Visual Studio Code (free code editor)<br>• Node.js and npm (JavaScript runtime)<br>• Git (version control system)<br>• Chrome DevTools (browser developer tools)',
          image: 'assets/img/tabs/tab-4.png'
        },
        career: {
          title: 'Career Opportunities and Growth',
          subtitle: 'Web development skills are in high demand across all industries, offering excellent career prospects and growth opportunities.',
          content: '<strong>Job Roles You Can Pursue:</strong><br>• Frontend Developer - $65,000 - $120,000 annually<br>• Full-Stack Developer - $75,000 - $140,000 annually<br>• Web Developer - $60,000 - $110,000 annually<br>• React Developer - $70,000 - $130,000 annually<br>• Freelance Web Developer - $50 - $150 per hour<br><br><strong>Industries Hiring:</strong><br>• Technology companies and startups<br>• E-commerce and retail businesses<br>• Financial services and banking<br>• Healthcare and education sectors<br>• Government and non-profit organizations',
          image: 'assets/img/tabs/tab-5.png'
        }
      }
    },
    digitalMarketing: {
      id: 'digitalMarketing',
      title: 'Digital Marketing Masterclass',
      subtitle: 'Learn comprehensive digital marketing strategies to grow businesses online. Master SEO, social media, content marketing, and analytics to drive real results.',
      category: 'Digital Marketing',
      price: '$250',
      trainer: 'Sarah Johnson',
      seats: '20',
      duration: '10 weeks',
      level: 'Beginner to Intermediate',
      format: 'Online & Self-paced',
      image: 'assets/img/course-2.jpg',
      description: 'Transform your career with our comprehensive digital marketing course. Learn proven strategies for SEO, social media marketing, content creation, email marketing, and analytics. You\'ll develop real campaigns, analyze data, and understand how to drive measurable business results through digital channels.',
      tabs: {
        overview: {
          title: 'Comprehensive Digital Marketing Training',
          subtitle: 'Master the art of digital marketing with our comprehensive course designed to teach you modern marketing strategies and tools.',
          content: 'This course covers all aspects of digital marketing including search engine optimization, social media marketing, content strategy, email marketing, and analytics. You\'ll learn how to create effective marketing campaigns, analyze performance data, and optimize for better results. The curriculum includes real-world case studies and hands-on projects.',
          image: 'assets/img/tabs/tab-1.png'
        },
        curriculum: {
          title: 'Strategic Marketing Curriculum',
          subtitle: 'Our curriculum is designed to build your marketing expertise systematically, from fundamentals to advanced strategies.',
          content: '<strong>Module 1:</strong> Digital Marketing Fundamentals - Overview, trends, and strategy<br><strong>Module 2:</strong> Search Engine Optimization (SEO) - Keywords, on-page, technical SEO<br><strong>Module 3:</strong> Social Media Marketing - Platforms, content, engagement<br><strong>Module 4:</strong> Content Marketing - Strategy, creation, distribution<br><strong>Module 5:</strong> Email Marketing - Campaigns, automation, analytics<br><strong>Module 6:</strong> Google Ads & PPC - Campaign setup, optimization<br><strong>Module 7:</strong> Analytics & Reporting - Data analysis, insights, optimization',
          image: 'assets/img/tabs/tab-2.png'
        },
        learning: {
          title: 'Marketing Skills You\'ll Master',
          subtitle: 'Develop the skills needed to create and execute successful digital marketing campaigns.',
          content: '• Conduct keyword research and implement SEO strategies<br>• Create engaging social media content and manage campaigns<br>• Develop content marketing strategies and editorial calendars<br>• Design effective email marketing campaigns and automation<br>• Set up and optimize Google Ads and PPC campaigns<br>• Analyze marketing data using Google Analytics and other tools<br>• Create comprehensive marketing reports and presentations<br>• Implement conversion optimization and A/B testing',
          image: 'assets/img/tabs/tab-3.png'
        },
        requirements: {
          title: 'Prerequisites and Setup',
          subtitle: 'This course is suitable for beginners, but basic computer skills and internet familiarity are helpful.',
          content: '<strong>Technical Requirements:</strong><br>• Computer with internet access<br>• Google account for analytics and ads<br>• Social media accounts (Facebook, Instagram, LinkedIn)<br>• Email marketing platform access (Mailchimp, etc.)<br><br><strong>Recommended Tools:</strong><br>• Google Analytics (free)<br>• Google Search Console (free)<br>• Canva for graphic design (free tier)<br>• Buffer or Hootsuite for social media management',
          image: 'assets/img/tabs/tab-4.png'
        },
        career: {
          title: 'Marketing Career Opportunities',
          subtitle: 'Digital marketing skills are in high demand, offering diverse career paths and excellent growth potential.',
          content: '<strong>Job Roles You Can Pursue:</strong><br>• Digital Marketing Specialist - $45,000 - $85,000 annually<br>• SEO Specialist - $50,000 - $90,000 annually<br>• Social Media Manager - $40,000 - $75,000 annually<br>• Content Marketing Manager - $55,000 - $95,000 annually<br>• Marketing Consultant - $60 - $150 per hour<br><br><strong>Industries Hiring:</strong><br>• Marketing agencies and consultancies<br>• E-commerce and retail companies<br>• Technology and SaaS companies<br>• Healthcare and education sectors<br>• Non-profit and government organizations',
          image: 'assets/img/tabs/tab-5.png'
        }
      }
    },
    contentCreation: {
      id: 'contentCreation',
      title: 'Content Creation & Branding',
      subtitle: 'Master the art of creating compelling content that builds brands and engages audiences. Learn storytelling, video production, and content strategy.',
      category: 'Content Creation',
      price: '$180',
      trainer: 'Michael Chen',
      seats: '15',
      duration: '8 weeks',
      level: 'Beginner to Intermediate',
      format: 'Online & Self-paced',
      image: 'assets/img/course-3.jpg',
      description: 'Learn to create compelling content that builds brands and engages audiences across multiple platforms. This course covers storytelling, video production, graphic design, and content strategy. You\'ll develop a strong portfolio and understand how to create content that drives engagement and business results.',
      tabs: {
        overview: {
          title: 'Comprehensive Content Creation Training',
          subtitle: 'Master the art of creating compelling content that builds brands and engages audiences across all digital platforms.',
          content: 'This course teaches you how to create engaging content for various platforms including social media, websites, blogs, and video platforms. You\'ll learn storytelling techniques, visual design principles, video production, and content strategy. The curriculum includes hands-on projects to build your portfolio.',
          image: 'assets/img/tabs/tab-1.png'
        },
        curriculum: {
          title: 'Creative Content Curriculum',
          subtitle: 'Our curriculum builds your creative and technical skills progressively, from fundamentals to advanced content creation.',
          content: '<strong>Module 1:</strong> Content Strategy - Planning, audience research, brand voice<br><strong>Module 2:</strong> Storytelling & Copywriting - Narrative techniques, persuasive writing<br><strong>Module 3:</strong> Visual Design - Graphic design principles, tools, branding<br><strong>Module 4:</strong> Video Production - Scripting, filming, editing<br><strong>Module 5:</strong> Social Media Content - Platform-specific strategies<br><strong>Module 6:</strong> Content Distribution - SEO, promotion, analytics<br><strong>Module 7:</strong> Portfolio Development - Showcase your best work',
          image: 'assets/img/tabs/tab-2.png'
        },
        learning: {
          title: 'Content Creation Skills You\'ll Master',
          subtitle: 'Develop the creative and technical skills needed to produce compelling content across all platforms.',
          content: '• Develop content strategies aligned with business goals<br>• Create engaging written content and compelling copy<br>• Design visually appealing graphics and brand materials<br>• Produce and edit professional videos and animations<br>• Optimize content for different social media platforms<br>• Use analytics to measure content performance<br>• Build and manage content calendars<br>• Create content that drives engagement and conversions',
          image: 'assets/img/tabs/tab-3.png'
        },
        requirements: {
          title: 'Prerequisites and Setup',
          subtitle: 'This course welcomes beginners with a passion for creativity and storytelling.',
          content: '<strong>Technical Requirements:</strong><br>• Computer with internet access<br>• Smartphone with camera for video content<br>• Basic photo and video editing software<br>• Social media accounts for practice<br><br><strong>Recommended Tools:</strong><br>• Canva for graphic design (free)<br>• Adobe Creative Suite (subscription)<br>• CapCut or iMovie for video editing<br>• Grammarly for writing assistance',
          image: 'assets/img/tabs/tab-4.png'
        },
        career: {
          title: 'Content Creation Career Paths',
          subtitle: 'Content creation skills open doors to diverse creative careers with excellent growth potential.',
          content: '<strong>Job Roles You Can Pursue:</strong><br>• Content Creator - $35,000 - $70,000 annually<br>• Social Media Manager - $40,000 - $75,000 annually<br>• Video Producer - $45,000 - $85,000 annually<br>• Graphic Designer - $40,000 - $80,000 annually<br>• Freelance Content Creator - $30 - $100 per hour<br><br><strong>Industries Hiring:</strong><br>• Marketing and advertising agencies<br>• Media and entertainment companies<br>• E-commerce and retail brands<br>• Technology and startup companies<br>• Educational institutions and non-profits',
          image: 'assets/img/tabs/tab-5.png'
        }
      }
    }
  },

  // Current course being displayed
  currentCourse: null,

  // Load course template
  loadCourseTemplate: function(courseId) {
    const course = this.courses[courseId];
    if (!course) {
      console.error('Course not found:', courseId);
      return;
    }

    this.currentCourse = course;
    this.updateCourseData(course);
  },

  // Update course data on the page
  updateCourseData: function(courseData) {
    // Update page title and meta
    document.title = `${courseData.title} - Mentor`;
    
    // Update main course information
    document.getElementById('courseTitle').textContent = courseData.title;
    document.getElementById('courseSubtitle').textContent = courseData.subtitle;
    document.getElementById('breadcrumbCourse').textContent = courseData.category;
    document.getElementById('courseImage').src = courseData.image;
    document.getElementById('courseImage').alt = courseData.title;
    document.getElementById('courseMainTitle').textContent = courseData.title;
    document.getElementById('courseDescription').textContent = courseData.description;
    
    // Update course info sidebar
    document.getElementById('courseTrainer').textContent = courseData.trainer;
    document.getElementById('coursePrice').textContent = courseData.price;
    document.getElementById('courseSeats').textContent = courseData.seats;
    document.getElementById('courseDuration').textContent = courseData.duration;
    document.getElementById('courseLevel').textContent = courseData.level;
    document.getElementById('courseFormat').textContent = courseData.format;

    // Update tab content
    this.updateTabContent(courseData.tabs);
  },

  // Update tab content
  updateTabContent: function(tabs) {
    // Update tab 1 - Overview
    const tab1 = document.querySelector('#tab-1');
    if (tab1) {
      tab1.querySelector('h3').textContent = tabs.overview.title;
      tab1.querySelector('.fst-italic').textContent = tabs.overview.subtitle;
      tab1.querySelector('.details p:last-child').innerHTML = tabs.overview.content;
      tab1.querySelector('img').src = tabs.overview.image;
    }

    // Update tab 2 - Curriculum
    const tab2 = document.querySelector('#tab-2');
    if (tab2) {
      tab2.querySelector('h3').textContent = tabs.curriculum.title;
      tab2.querySelector('.fst-italic').textContent = tabs.curriculum.subtitle;
      tab2.querySelector('.details p:last-child').innerHTML = tabs.curriculum.content;
      tab2.querySelector('img').src = tabs.curriculum.image;
    }

    // Update tab 3 - Learning
    const tab3 = document.querySelector('#tab-3');
    if (tab3) {
      tab3.querySelector('h3').textContent = tabs.learning.title;
      tab3.querySelector('.fst-italic').textContent = tabs.learning.subtitle;
      tab3.querySelector('.details p:last-child').innerHTML = tabs.learning.content;
      tab3.querySelector('img').src = tabs.learning.image;
    }

    // Update tab 4 - Requirements
    const tab4 = document.querySelector('#tab-4');
    if (tab4) {
      tab4.querySelector('h3').textContent = tabs.requirements.title;
      tab4.querySelector('.fst-italic').textContent = tabs.requirements.subtitle;
      tab4.querySelector('.details p:last-child').innerHTML = tabs.requirements.content;
      tab4.querySelector('img').src = tabs.requirements.image;
    }

    // Update tab 5 - Career
    const tab5 = document.querySelector('#tab-5');
    if (tab5) {
      tab5.querySelector('h3').textContent = tabs.career.title;
      tab5.querySelector('.fst-italic').textContent = tabs.career.subtitle;
      tab5.querySelector('.details p:last-child').innerHTML = tabs.career.content;
      tab5.querySelector('img').src = tabs.career.image;
    }
  },

  // Get course from URL parameter
  getCourseFromURL: function() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course');
    return courseId || 'webDevelopment'; // Default to web development
  },

  // Initialize course details page
  initCourseDetails: function() {
    const courseId = this.getCourseFromURL();
    this.loadCourseTemplate(courseId);
  }
};

// Auto-initialize if on course details page
if (document.querySelector('.course-details-page')) {
  document.addEventListener('DOMContentLoaded', function() {
    CourseManager.initCourseDetails();
  });
} 