import Card from "./Card.jsx";

function CardSection() {


    const rentalTitle = "Rental Service";
    const rentalDescription = "Website to host a rental service. " +
        "Provides admin interface to manage products and bookings."
    const rentalTech = "Spring, JPA, JDBC, Spring security, Validation, Thymeleaf, Lombok, Mail API, MySQL";
    const rentalLanguages = "Java, HTML CSS, Javascript"


    return <div id="middle-section">
        <Card title={rentalTitle} description={rentalDescription} tech={rentalTech} languages={rentalLanguages} to={"/project/rental"}/>

    </div>
}

export default CardSection;