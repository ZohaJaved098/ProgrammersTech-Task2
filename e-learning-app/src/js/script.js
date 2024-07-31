const coursesContainer = document.getElementById('courses-container');
    const courses = [
      {
        title: "Machine Learning",
        description: "Learn about the most effective machine learning techniques, and gain practice implementing them and getting them to work for yourself.",
        url: "https://www.coursera.org/learn/machine-learning"
      },
      {
        title: "Python for Everybody",
        description: "This Specialization builds on the success of the Python for Everybody course and will introduce fundamental programming concepts including data structures, networked application program interfaces, and databases, using the Python programming language.",
        url: "https://www.coursera.org/specializations/python"
      },
      {
        title: "Introduction to Data Science",
        description: "This specialization provides an introduction to data science using the Python programming language. You will learn the basics of data science, and how to use Python to clean, analyze, and visualize data.",
        url: "https://www.coursera.org/specializations/data-science-python"
      }
    ];

    courses.forEach(course => {
      const courseElement = document.createElement('div');
      courseElement.classList.add('course');

      const courseTitle = document.createElement('h3');
      courseTitle.textContent = course.title;

      const courseDescription = document.createElement('p');
      courseDescription.textContent = course.description;

      const courseLink = document.createElement('a');
      courseLink.href = course.url;
      courseLink.textContent = "Learn more";

      courseElement.appendChild(courseTitle);
      courseElement.appendChild(courseDescription);
      courseElement.appendChild(courseLink);

      coursesContainer.appendChild(courseElement);
    });