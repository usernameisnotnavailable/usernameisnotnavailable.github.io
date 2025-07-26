import Card from "./Card.jsx";

function CardSection() {

    const rentalTitle = "Rental Service";
    const rentalDescription = "Website to host a rental service. " +
        "Provides admin interface to manage products and bookings."
    const rentalTech = "Spring, JPA, JDBC, Spring security, Validation, Thymeleaf, Lombok, Mail API, MySQL";
    const rentalLanguages = "Java, HTML CSS, Javascript"
    const dummyTitle = "Some title";
    const dummyDesc = "Some dummy desc for the project as a placeholder";
    const dummyTech = ["list", "of", "tech", "used", "in", "project"];
    const empty = [];


    return <div id="middle-section">
        <Card title={rentalTitle} description={rentalDescription} tech={rentalTech} languages={rentalLanguages}/>
        <Card title={dummyTitle} description={dummyDesc} tech={dummyTech}/>
        <Card title={dummyTitle} description={dummyDesc} tech={dummyTech}/>
        <Card title={dummyTitle} description={dummyDesc} tech={empty}/>
    </div>
}

export default CardSection;