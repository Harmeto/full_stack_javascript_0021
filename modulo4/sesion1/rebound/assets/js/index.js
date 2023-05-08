const calculateMonthlyPayment = (total, interest, months) => {
    const monthlyInterestRate = (interest / 100) / 12;
    const monthlyPayment = (total * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));
    return monthlyPayment.toFixed(2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const total = Number(document.getElementById('total').value);
    const interest = Number(document.getElementById('interest').value);
    const months = Number(document.getElementById('months').value);
    const monthlyPayment = calculateMonthlyPayment(total, interest, months);
    const result = document.getElementById('result');
    result.innerHTML = `<p>El valor de cada cuota es: $${monthlyPayment}</p>`;
  };

  const init = () => {
    const calculatorForm = document.getElementById('calculator-form');
    calculatorForm.addEventListener('submit', handleSubmit);
  };

  init();