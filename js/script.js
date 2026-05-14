const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

form.addEventListener("submit", async function(event) {
  event.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const subjectValue = subjectInput.value;
  const messageValue = messageInput.value;

  if (nameValue === "") {
    alert("Please enter your name.");
    return;
  } else if (emailValue === "") {
    alert("Please enter your email.");
    return;
  } else if (subjectValue === "") {
    alert("Please enter a subject.");
    return;
  } else if (messageValue === "") {
    alert("Please enter a message.");
    return;
  }

  const response = await fetch("https://formspree.io/f/mkoylrjg", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: nameValue,
      email: emailValue,
      subject: subjectValue,
      message: messageValue
    })
  });

  if (response.ok) {
    alert("Thank you " + nameValue + "! I will get back to you soon.");
    form.reset();
  } else {
    alert("Something went wrong. Please try again.");
  }
});