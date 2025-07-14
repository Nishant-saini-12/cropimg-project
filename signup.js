const createUser =(e)=>{
    e.preventDefault()

    //check validation errors
    Validation("fullname","fullname-error")
    Validation("email","email-error")
    Validation("password","password-error")

    // signup code
    const fullname=document.getElementById("fullname").value.trim()
    const email=document.getElementById("email").value.trim()
    const password=document.getElementById("password").value.trim()
    console.log(fullname,email,password)
    
  
    const payload=JSON.stringify({
        fullname:fullname,
        email:email,
        password:password
    })
 // Check if user already exists
  if (localStorage.getItem(email)) {
    Swal.fire("Oops!", "User already exists. Try logging in.", "warning");
    return;
  }

  localStorage.setItem(email, payload);

  Swal.fire("Success!", "Account created successfully!", "success").then(() => {
    window.location.href = "login.html"; // Go to login page after signup
  });
};

const Validation = (inputId, errorId) => {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  const value = input.value.trim();

  if (value.length === 0) {
    error.classList.remove("hidden");
    error.innerHTML = `*${input.name} field is required`;
    throw new Error(`${input.name} field is required`);
  } else {
    error.classList.add("hidden");
  }
};