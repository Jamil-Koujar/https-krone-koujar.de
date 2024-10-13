document.getElementById('reservation-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    const resultDiv = document.getElementById('reservation-result');
    resultDiv.innerHTML = `<p>Vielen Dank, ${name}! Ihre Reservierung für ${guests} Personen am ${date} um ${time} Uhr wurde bestätigt. Eine Bestätigung wurde an ${email} gesendet.</p>`;
});
