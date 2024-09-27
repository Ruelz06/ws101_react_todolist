function HandlingFunction() {

    const handlingfunctions = () => {console.log("Hello There")}
    
    return (
        <>
            <h1>This is how to handle events in Functional Componements</h1>
            <button onClick={handlingfunctions}>Click Me!</button>
        </>
    )
}
export default HandlingFunction