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
        screenshots: ["/booking_page.jpg", "/calendar_monthly.jpg", "/calendar_weekly.jpg", "/index.png"],
        status: "Data persistence and item management are fully implemented, " +
            "new category manager page added. " +
            "The API is now protected using Spring Security. " +
            "The booking system is operational and supports real-time updates via Server-Sent Events. " +
            "Work is ongoing to refine the dashboard with interactive charts," +
            "designing and adding search features, " +
            "complete the booking workflow, " +
            "backbone of automated e-mail system is created, additional mail types to be added, " +
            "and improve overall design and code quality."
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
