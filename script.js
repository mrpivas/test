document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = {
      surname: document.getElementById("surname").value,
      name: document.getElementById("name").value,
      patronymic: document.getElementById("patronymic").value,
      telegram: document.getElementById("telegram").value,
      email: document.getElementById("email").value,
      university: document.getElementById("university").value,
      teamName: document.getElementById("teamName").value,
      caseName: document.getElementById("caseName").value,
      consent: document.getElementById("consent").checked,
    };
    document.getElementById("message").textContent = "Отправка данных...";
    fetch(
      "https://script.google.com/macros/s/AKfycbycEyOWhLbm6bMcwtRJ86CbwzbAAYnFJwsC2HcI2jpUvSW9wgIvTSLCcaPp861mXeQm/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.text())
      .then((message) => {
        document.getElementById("message").textContent = message;
        document.getElementById("registrationForm").reset();
      })
      .catch((error) => {
        document.getElementById("message").textContent =
          "Произошла ошибка при отправке данных.";
        console.error("Ошибка:", error);
      });
  });
