function Random() {
    let number = Math.floor(Math.random()*100);

    return <h3>Random Number: {number}</h3>
}

export default Random;