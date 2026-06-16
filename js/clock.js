function updateClock(){

    const now = new Date();

    const time =
        now.toLocaleTimeString(
            [],
            {
                hour:'2-digit',
                minute:'2-digit',
                second:'2-digit'
            }
        );

    const date =
        now.toLocaleDateString(
            [],
            {
                weekday:'long',
                day:'numeric',
                month:'long',
                year:'numeric'
            }
        );

    document.getElementById("time").innerText = time;

    document.getElementById("date").innerText = date;
}

setInterval(updateClock,1000);

updateClock();