import Card from "./Card.jsx";

function CardSection() {


    const rentalTitle = "Rental Service";
    const rentalDescription = "Website to host a rental service. " +
        "Provides admin interface to manage products and bookings."
    const rentalTech = "Spring, JPA, JDBC, Spring security, Validation, Thymeleaf, Lombok, Mail API, MySQL";
    const rentalLanguages = "Java, HTML CSS, Javascript"
    const rentalLink = "rental";
    const dummyTitle = "Some title";
    const dummyDesc = "Some dummy desc for the project as a placeholder";
    const dummyTech = ["list", "of", "tech", "used", "in", "project"];
    const dummyLink = ["list", "of", "tech", "used", "in", "project"];


    return <div id="middle-section">
        <Card title={rentalTitle} description={rentalDescription} tech={rentalTech} languages={rentalLanguages} to={"/project/rental"}/>
         <Card title={dummyTitle} description={dummyDesc} tech={dummyTech} to={dummyLink}/>
    </div>
}

export default CardSection;