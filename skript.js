const guests = ['Диана', 'Ксюша', 'Лера'];

function randomSeat() {
    guests.sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < 3; i++) {
        const seatElement = document.getElementById(`seat${i + 1}`);
        seatElement.textContent = guests[i];
        seatElement.style.backgroundColor = getRandomLightColor();
    }
}

function getRandomLightColor() {
    const colr = Math.floor(Math.random() * 360);
    return `hsl(${colr}, 80%, 90%)`;
}
 