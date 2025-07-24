import './App.css'
import FrontDisplay from "./components/FrontDisplay.jsx";
import CardSection from "./components/CardSection.jsx";


function App() {

    const projects = [
        {
            name: "Rental Service",
            shortDescription: "It is a project for a rental service. The aim is to provide a website for display current range of products, information about the service. " +
                "On the other hand provide an admin interface to manage the products and the bookings.",
            technologies: [
                "Spring framework", "JPA", "JDBC", "Spring security", "Validation", "thymeleaf", "lombok", "Mail API", "MYSQL", "HTML", "CSS", "Javascript"
            ]

            }
    ];


  return (
    <>
      <FrontDisplay />
        <CardSection />
    </>
  )
}

export default App
