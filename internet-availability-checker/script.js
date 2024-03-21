function connection() {
  var status = document.getElementById("status");
  var body = document.body;
  if (navigator.onLine) {
    status.textContent = "You are connected to the internet.👍";
    body.style.backgroundColor = "#9EFFB8";
  } else {
    status.textContent = "You are not connected to the internet.👎";
    body.style.backgroundColor = "#FF0000";
  }
}

function refreshconnection() {
  connection();
}

window.addEventListener("online", connection);
window.addEventListener("offline", connection);

// Initial check when the page loads
connection();
