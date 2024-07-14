const daysContainer = document.getElementById('days');
const today = new Date();
const targetYear = 2024;
const targetMonth = 6; // July is 6 because months are 0-indexed

function loadJuly2024Calendar() {
    const firstDay = new Date(targetYear, targetMonth, 1).getDay();
    const lastDate = new Date(targetYear, targetMonth + 1, 0).getDate();

    daysContainer.innerHTML = '';

    for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += `<div></div>`;
    }

    for (let i = 1; i <= lastDate; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;
        if (today.getFullYear() === targetYear && today.getMonth() === targetMonth && today.getDate() === i) {
            dayDiv.classList.add('current-day');
        }
        daysContainer.appendChild(dayDiv);
    }
}

loadJuly2024Calendar();
