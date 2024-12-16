const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const urlEncodedString = new URLSearchParams(formData).toString();
  const result = document.getElementById("result");

  result.innerHTML = `
                <h1>Data Formulir</h1>
                <p><strong>Nama:</strong> ${formData.get("nama")}</p>
                <p><strong>Email:</strong> ${formData.get("email")}</p>
                <p><strong>Telepon:</strong> ${formData.get("telepon")}</p>
                <h2>URL Encoded:</h2>
                <pre>${urlEncodedString}</pre>
            `;
});

const submitButton = document.getElementById("submitButton2");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const formData = {
    nama: document.getElementById("name2").value,
    email: document.getElementById("email2").value,
    pekerjaan: document.getElementById("job2").value,
    telepon: document.getElementById("phone2").value,
  };
  const urlEncodedData = new URLSearchParams(formData).toString();
  const jsonString = JSON.stringify(formData, null, 2);
  const resultDiv = document.getElementById("result2");

  resultDiv.innerHTML = `
                <h1>Data yang Disubmit</h1>
                <h4>Object JSON:</h4>
                <pre>${jsonString}</pre>
                <h4>URL Encoded String:</h4>
                <p>${urlEncodedData}</p>
            `;
});
