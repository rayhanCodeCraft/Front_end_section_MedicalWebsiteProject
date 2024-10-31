const tabs = document.querySelectorAll(".tab-btn");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    // Logic to switch content goes here (if needed)
  });
});

/* ####HomeIndex */
// Example: Form Validation
document.querySelector("form").addEventListener("submit", function (event) {
  const phoneInput = document.getElementById("phone");
  if (!phoneInput.value) {
    alert("Please enter your phone number");
    event.preventDefault();
  }
});


// Scroll to the section smoothly
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.doctor-card button').forEach(button => {
  button.addEventListener('click', function() {
      alert('Appointment request sent for ' + this.parentElement.querySelector('h3').textContent);
  });
});

// Add functionality for filtering hospitals
document.querySelectorAll('select').forEach(select => {
  select.addEventListener('change', function() {
      console.log(`Filter applied: ${this.value}`);
      // Implement filter logic here (e.g., filter hospitals based on location or treatment)
  });
});


