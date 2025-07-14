
// window.onload=()=>{
//   const user= localStorage.getItem("isLogin")
//   if(!user){
//     alert("login fails")
//   }
//   else{
//     location.replace("profile.html")
//   }
// }

window.onload = () => {
  const user = localStorage.getItem("isLogin");
  if (user) {
    location.replace(profile.html);
  }
};


const login = (e) => {
  e.preventDefault();

  try {
    Validation("email", "email-error");
    Validation("password", "password-error");
  } catch (err) {
    return; // stop if validation fails
  }

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const userData = localStorage.getItem(email);

  if (!userData) {
    alert("No user data found.");
    return; 
  }

  const user = JSON.parse(userData);

 if (user.email.toLowerCase() === email.toLowerCase()){
    if (user.password === password) {
      alert("Login successful!");
      // window.location.href = "dashboard.html";

       localStorage.setItem("isLogin", true); // Set login flag
      location.replace("profile.html");    

    } else {
      alert("Incorrect password.");
    }
  } else {
    alert("User not found.");
  }
};




const Validation=(inputId,errorId)=>{
   const input= document.getElementById(inputId)
   const small=document.getElementById(errorId)
   const value=input.value.trim()
   const l=value.length
   if(l==0){
    small.classList.remove("hidden")
    small.innerHTML=`*${input.name}this field is required`
    throw new Error(`*${input.name}this field is required`);
   }
   else{
    small.classList.add("hidden")
   }
}


