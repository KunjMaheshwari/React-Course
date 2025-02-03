

function Button(){

    let count = 0;

    const handleClick = (e) => {
        e.target.textContent = "Ouh!";
    }

    return (
        <button onClick = {(e) => handleClick(e)}>Click me</button>
    )
}

export default Button;