const form = document.getElementById("contactForm");
const successDiv = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const errors = {};

  if (!name) errors.name = "Full name is required.";
  if (!email) errors.email = "Email is required.";
  else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Enter a valid email.";
  if (!subject) errors.subject = "Subject is required.";
  if (!message) errors.message = "Message is required.";
  else if (message.length < 10)
    errors.message = "Message must be at least 10 characters.";

  ["name", "email", "subject", "message"].forEach((id) => {
    const errorDiv = document.getElementById("error-" + id);
    if (errors[id]) {
      errorDiv.textContent = errors[id];
      errorDiv.classList.add("visible-error");
    } else {
      errorDiv.textContent = "";
      errorDiv.classList.remove("visible-error");
    }
  });

  if (Object.keys(errors).length === 0) {
    successDiv.style.display = "block";
    setTimeout(() => (successDiv.style.display = "none"), 3000);
    form.reset();
  } else {
    successDiv.style.display = "none";
  }
});
