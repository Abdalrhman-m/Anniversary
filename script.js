const anniversaryBaseYear = 2024; // First anniversary year
const anniversaryMonth = 9; // October (0-indexed)
const anniversaryDay = 10;

function getNextAnniversary(now) {
    let year = now.getFullYear();
    let anniversary = new Date(year, anniversaryMonth, anniversaryDay, 0, 0, 0);
    if (now > anniversary) {
        year++;
        anniversary = new Date(year, anniversaryMonth, anniversaryDay, 0, 0, 0);
    }
    return anniversary;
}

function getAnniversaryNumber(now) {
    const nextAnniversary = getNextAnniversary(now);
    return nextAnniversary.getFullYear() - anniversaryBaseYear + 1;
}

function countdown() {
    const now = new Date();
    const nextAnniversary = getNextAnniversary(now);
    const anniversaryNumber = getAnniversaryNumber(now);
    const timeDifference = nextAnniversary.getTime() - now.getTime();
    const anniversaryDateEl = document.getElementById('anniversary-date');

    if (timeDifference <= 0) {
        document.getElementById('countdown').innerHTML = `<div class="celebrate">🎉 Happy ${anniversaryNumber} Anniversary! 🎉</div>`;
        document.getElementById('anniversary-number').innerHTML = `Anniversary #${anniversaryNumber}`;
        if (anniversaryDateEl) {
            anniversaryDateEl.innerHTML = `Hooray! Today is <strong>${formatAnniversaryDate(nextAnniversary)}</strong>.`;
        }
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('anniversary-number').innerHTML = `Anniversary #${anniversaryNumber}`;
    if (anniversaryDateEl) {
        anniversaryDateEl.innerHTML = `Next celebration on <strong>${formatAnniversaryDate(nextAnniversary)}</strong>`;
    }
}

setInterval(countdown, 1000);
countdown();

function formatAnniversaryDate(date) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}
