document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let celsius = parseFloat(document.getElementById('temperature').value);
    if (isNaN(celsius)) {
        alert('Masukkan angka yang valid untuk suhu Celsius.');
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('conversionResult').innerText = `${celsius} Celsius = ${fahrenheit.toFixed(2)} Fahrenheit`;
});