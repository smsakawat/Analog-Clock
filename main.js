setInterval(() => {
    day = new Date();
    hour = day.getHours();
    minute = day.getMinutes();
    second = day.getSeconds();
    hRotation = 30 * hour + minute / 2;
    mRotation = 6 * minute;
    sRotation = 6 * second;
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');
    hourHand.style.transform = `rotate(${hRotation}deg)`;
    minuteHand.style.transform = `rotate(${mRotation}deg)`;
    secondHand.style.transform = `rotate(${sRotation}deg)`;


}, 1000)