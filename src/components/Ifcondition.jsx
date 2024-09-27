function MissedGoal () {
    return <h3> YOU MISSED!</h3>
}

function MadeGoal() {
    return <h3>GOAL !!!</h3>
}

function Goal(props) {
    const isGoal = props.isGoal;

    if(isGoal){
        return <MadeGoal />;
    }
    return <MadeGoal />;
}

export default Goal;