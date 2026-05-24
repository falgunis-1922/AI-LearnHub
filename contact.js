document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const messageBox = document.getElementById('formMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    messageBox.textContent = "✅ Message sent successfully!";
    messageBox.style.color = "#0f0";
    form.reset();
  });
});
