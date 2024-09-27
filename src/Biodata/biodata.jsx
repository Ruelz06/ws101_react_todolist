import './Biodata.css';

function Biodata(props) {
    return (
        <div className ='Biodata'>
            <h1>Activity #2: Biodata using ReactJS</h1>
            <h2>Name: Sarah Mae R. Lavarez</h2>
            <h2>Mobile: 09911528432</h2>
            <h2>Email: sarahmaereyeslavarez@gmail.com</h2>
            <h2>Gender: Female</h2>
            <h2>Birthdate: Decemember 30 2003</h2>
            <h2>Father's name: Michael I. Lavarez</h2>
            <h2>Mother's Name: Eva R. Lavarez</h2>
            <h1>Education:</h1>
            <h2>High School: Quezon National High School</h2>
            <h2>College: Dalubhasaan ng Lungsod ng Lucena</h2>
            <h3>{props.name} {props.lastname}</h3>

        </div>
    )
}

export default Biodata;