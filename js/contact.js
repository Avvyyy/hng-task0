const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let valid = true;
  const name = form.name;
  const email = form.email;
  const subject = form.subject;
  const message = form.message;

  // Clear previous errors
  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  if (!name.value.trim()) {
    document.getElementById('error-name').textContent = 'Full name is required.';
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.match(emailPattern)) {
    document.getElementById('error-email').textContent = 'Please enter a valid email.';
    valid = false;
  }

  if (!subject.value.trim()) {
    document.getElementById('error-subject').textContent = 'Subject is required.';
    valid = false;
  }

  if (message.value.trim().length < 10) {
    document.getElementById('error-message').textContent = 'Message must be at least 10 characters.';
    valid = false;
  }

  if (valid) {
    successMsg.hidden = false;
    form.reset();
  }
});
