const guests = ['Диана', 'Ксюша', 'Лера'];

function randomSeat() {
    const shuffledGuests = structuredClone(guests).sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < 3; i++) {
        const seatElement = document.getElementById(`seat${i + 1}`);
        seatElement.textContent = shuffledGuests[i] || '-';
        seatElement.style.backgroundColor = getRandomLightColor();
    }
}

function getRandomLightColor() {
    const colr = Math.floor(Math.random() * 360);
    return `hsl(${colr}, 80%, 90%)`;
}
 