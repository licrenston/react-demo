function Simpson (props) {
    console.log(props);
    const {simpson} = props;
    return (
        <div>
            <h2>{simpson.id} - {simpson.name}</h2>
            <p>{simpson.email} - {simpson.phone}</p>
            <img src={simpson.website} alt={simpson.name}/>
        </div>
    );
}
export default Simpson;