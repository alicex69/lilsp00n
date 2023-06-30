setInterval(() => {
    document.getElementById("date").innerHTML = Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long', timeZone: 'America/Chicago' }).format(Date.now());
}, 1000);
