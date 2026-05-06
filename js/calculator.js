document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("form");
  const resultsDiv = document.getElementById("results");

  const CCtips = document.getElementById("CCtips");
  const cashTips = document.getElementById("cashTips");

  const shift1 = document.getElementById("shift-1");
  const shift2 = document.getElementById("shift-2");
  const shift3 = document.getElementById("shift-3");
  const shift4 = document.getElementById("shift-4");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let s1 = shift1.valueAsNumber || 0;
    let s2 = shift2.valueAsNumber || 0;
    let s3 = shift3.valueAsNumber || 0;
    let s4 = shift4.valueAsNumber || 0;

    let totalHours = s1 + s2 + s3 + s4;

    let cc = parseFloat(CCtips.value) || 0;
    let cash = parseFloat(cashTips.value) || 0;

    // validation
    if (!cc || cc <= 0) {
      resultsDiv.innerHTML = "<p>Please enter CC tips.</p>";
      return;
    }

    if (totalHours === 0) {
      resultsDiv.innerHTML = "<p>Please enter hours worked.</p>";
      return;
    }

    let ccRate = cc / totalHours;
    let cashRate = cash / totalHours;

    function calc(hours, rate) {
      return (hours * rate).toFixed(2);
    }

    resultsDiv.innerHTML = `
      <h2>Results</h2>
      <p><strong>Total Hours:</strong> ${totalHours}</p>
      <hr>

      <p>Person 1: CC $${calc(s1, ccRate)} | Cash $${calc(s1, cashRate)}</p>
      <p>Person 2: CC $${calc(s2, ccRate)} | Cash $${calc(s2, cashRate)}</p>
      <p>Person 3: CC $${calc(s3, ccRate)} | Cash $${calc(s3, cashRate)}</p>
      <p>Person 4: CC $${calc(s4, ccRate)} | Cash $${calc(s4, cashRate)}</p>
    `;
  });

});