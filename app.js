var daysContainer = document.getElementById('days');
var today = new Date();
var targetYear = 2024;
var targetMonth = 6; 

function loadJuly2024Calendar() {
    var firstDay = new Date(targetYear, targetMonth, 1).getDay();
    var lastDate = new Date(targetYear, targetMonth + 1, 0).getDate();

    daysContainer.innerHTML = '';

    for (var i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += `<div></div>`;
    }

    for (var i = 1; i <= lastDate; i++) {
        var dayDiv = document.createElement('div');
        dayDiv.textContent = i;
        if (today.getFullYear() === targetYear && today.getMonth() === targetMonth && today.getDate() === i) {
            dayDiv.classList.add('current-day');
        }
        daysContainer.appendChild(dayDiv);
    }
}

loadJuly2024Calendar();
