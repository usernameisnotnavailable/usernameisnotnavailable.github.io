export const projects = [
    {
        id: "rental",
        title: "Rental Service",
        description: "Upgrade the static website (www.berbemindent.hu), to create a webapp with functions like admin interface, so a non-programmer can also upload and edit items on the page. Booking tracker, and a booking system with automated mails.",
        tech: [
            "Backend: Spring Boot 3.3 (Spring Web, Security, Validation, Data JPA/JDBC), Java 17",
            "View layer: Thymeleaf templates",
            "Database: MySQL",
            "Email: JavaMail",
            "Dev: Maven, Spring Boot DevTools, Lombok",
            "Frontend: Vanilla JS and CSS",
            "Visual: Chart.js"],
        repoLink: null,
        demoVideo: "/rental-video.mp4",
        screenshots: ["/booking.png", "/index.png"],
        status: "Data persistence and item management system complete. " +
            "Endpoints are secured by Spring security. Internal booking management completed. " +
            "Ongoing development: Polishing dashboard with charts and metrics. Item search, Dynamic category display. Complete booking system. Auto email system.",
    },
    {
        id: "dummy",
        title: "Dummy Project",
        description: "Some placeholder project description.",
        tech: "React, Node.js",
        languages: "JavaScript, HTML, CSS",
        repoLink: null,
        demoVideo: null,
        screenshots: ["/img/dummy1.png"],
        status: "Prototype",
        learnings: ["React state management", "CSS grid & flexbox"]
    }
];
