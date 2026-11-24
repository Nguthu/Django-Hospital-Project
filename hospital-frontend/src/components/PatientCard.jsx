function PatientCard(props) {
    return(
        <div>
            <h3>{props.name}</h3>
            <h2>{props.age}</h2>
        </div>
    );
}

export default PatientCard;