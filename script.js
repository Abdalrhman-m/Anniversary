const countdown = () => {
    const firstAnniversary = new Date('October 10, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const timeDifference = firstAnniversary - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (timeDifference < 0) {
        document.getElementById('countdown').innerHTML = "Happy Anniversary!";
    }
};

setInterval(countdown, 1000);
