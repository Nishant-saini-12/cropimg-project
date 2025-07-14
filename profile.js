var cropper=false

window.onload=()=>{
  const user=localStorage.getItem("isLogin")
  if(!user){
    location.replace("login.html")

  }

}

const logout=()=>{
    alert()
    localStorage.removeItem("isLogin")
    location.replace("login.html ")
}

const uploadImage=()=>{
       const input=document.getElementById("fileinput")
       const picture=document.getElementById("picture")
       const file=input.files[0]
       const url= URL.createObjectURL(file)
        picture.src=url;

          picture.classList.remove("hidden");
    }

    const loadcropper=()=>{
        const downloadButton=document.getElementById("downloadbutton")
        if(!cropper){
        const picture=document.getElementById("picture")
         cropper=new Cropper(picture,{
            // aspectRatio:1,
            viewMode: 1
        })
        downloadButton.classList.remove("hidden")
        }
        else{
            cropper.destroy()
            cropper=null
            downloadButton.classList.add("hidden")
        }
       
    }

// const downloadimg=()=>{
//    const canvas=cropper.getCroppedCanvas()
//      const url= canvas.toDataURL('image/png')
//    console.log(url)

// }

// const downloadimg = () => {
//   console.log("downloadimg function called ✅");  // check if function is triggered
//   const canvas = cropper.getCroppedCanvas();
//   const url = canvas.toDataURL('image/png');
//   console.log(url);
// };


const downloadimg = () => {
  console.log("Trying to download...");
  if (!cropper) {
    console.log("Cropper not initialized ❌");
    return;
  }

  const canvas = cropper.getCroppedCanvas();
  if (!canvas) {
    console.log("Canvas could not be generated ❌");
    return;
  }    

  const url = canvas.toDataURL('image/png');
  // console.log("Image URL:", url);
  const a =document.createElement("a")
  a.href = url
  a.download="sample.png"
  a.click()
  a.remove()
};


