export const projects = [
    {
        id: "rental",
        title: "Rental Service",
        description: "A website to host a rental service. Provides an admin interface to manage products and bookings.",
        tech: [
            "Backend: Spring Boot 3.3 (Spring Web, Security, Validation, Data JPA/JDBC), Java 17",
            "View layer: Thymeleaf templates",
            "Database: MySQL",
            "Email: JavaMail",
            "Dev: Maven, Spring Boot DevTools, Lombok",
            "Frontend assets: Vanilla JS and CSS"],
        languages: "Java, HTML, CSS, JavaScript",
        repoLink: "https://github.com/yourusername/rental-service",
        demoVideo: "/videos/rental-demo.mp4",
        screenshots: ["/img/rental1.png", "/img/rental2.png"],
        status: "In progress (core features working, needs polishing)",
        learnings: [
            "Learned authentication/authorization with Spring Security",
            "Worked with relational data in JPA",
            "Improved understanding of MVC pattern in web apps"
        ]
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
