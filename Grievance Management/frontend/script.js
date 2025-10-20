function openForm() {
  document.getElementById("formModal").style.display = "flex";
}

function closeForm() {
  document.getElementById("formModal").style.display = "none";
}

function viewGrievances() {
  fetch("http://localhost:3000/grievances")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("list");
      list.innerHTML = "";
      data.forEach((g, i) => {
        const li = document.createElement("li");
        li.textContent = `${i + 1}. ${g.name} - ${g.message}`;
        list.appendChild(li);
      });
      document.getElementById("grievanceList").style.display = "flex";
    });
}

function closeList() {
  document.getElementById("grievanceList").style.display = "none";
}

function submitGrievance() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return;
  }

  fetch("http://localhost:3000/grievances", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  })
    .then(res => res.json())
    .then(() => {
      alert("Grievance submitted successfully!");
      closeForm();
    });
}
