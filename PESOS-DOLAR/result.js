document.getElementById('conversionForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var amountInPesos = parseFloat(document.getElementById('Pesos').value);
    var exchangeRate = parseFloat(document.getElementById('Dolar').value);
  
    var amountInDollars = amountInPesos / exchangeRate;
  
    document.getElementById('result').value = amountInDollars.toFixed(2);
  });