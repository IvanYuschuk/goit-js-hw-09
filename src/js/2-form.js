const formData = { email: "", message: "" };
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector(".feedback-form");
function populateFormFields() {
  try {
    const savedDataJSON = localStorage.getItem(STORAGE_KEY);
    if (savedDataJSON) {
      const savedData = JSON.parse(savedDataJSON);
      formData.email = savedData.email || "";
      formData.message = savedData.message || "";
      form.elements.email.value = formData.email;
      form.elements.message.value = formData.message;
    }
  } catch (error) {
    console.error("Error parsing saved data:", error.message);
  }
}
populateFormFields();
form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value;
    try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  } catch (error) {
    console.error("Error saving data to localStorage:", error.message);
  }
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return; 
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = "";
  formData.message = "";
});
