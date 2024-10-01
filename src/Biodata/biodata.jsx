import './Biodata.css';

function Biodata(props) {
    return (
        <div className ='Biodata'>
            <h1>Activity #2: Biodata using ReactJS</h1>
            <h2>Name: Ruel zoleta</h2>
            <h2>Mobile: 09918604221</h2>
            <h2>Email: aprilrosezoleta@gmail.com</h2>
            <h2>Gender: Lesbian</h2>
            <h2>Birthdate: April 27 200*</h2>
            <h2>Father's name: Fernando Zoleta</h2>
            <h2>Mother's Name: Elma Zoleta</h2>
            <h1>Education:</h1>
            <h2>High School: Quezon National High School</h2>
            <h2>College: Dalubhasaan ng Lungsod ng Lucena</h2>
            <h3>{props.name} {props.lastname}</h3>

        </div>
    )
}

export default Biodata;