// Profile Picture Preview
const profilePic = document.getElementById("profilePic");
const preview = document.getElementById("preview");

profilePic.addEventListener("change", () => {
  const file = profilePic.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => preview.src = e.target.result;
    reader.readAsDataURL(file);
  }
});

// Form Validation
const form = document.getElementById("registrationForm");

form.addEventListener("submit", e => {
  e.preventDefault();
  let valid = true;

  // Reset errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Required field check
  form.querySelectorAll("input[required], select[required], textarea[required]").forEach(input => {
    if (!input.value.trim()) {
      input.nextElementSibling.textContent = "This field is required";
      valid = false;
    }
  });

  // Password check
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    document.getElementById("confirmPassword").nextElementSibling.textContent = "Passwords do not match";
    valid = false;
  }

  // Password strength
  const strongPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/;
  if (!strongPassword.test(password)) {
    document.getElementById("password").nextElementSibling.textContent = "Weak password (Use A-Z, a-z, 0-9)";
    valid = false;
  }

  // Mobile validation
  const phone = document.getElementById("phone").value;
  if (!/^\d{10}$/.test(phone)) {
    document.getElementById("phone").nextElementSibling.textContent = "Enter valid 10-digit number";
    valid = false;
  }

  if (valid) {
    alert("✅ Registration Successful!");
    form.reset();
    preview.src = "https://via.placeholder.com/120"; // reset photo
  }
});
