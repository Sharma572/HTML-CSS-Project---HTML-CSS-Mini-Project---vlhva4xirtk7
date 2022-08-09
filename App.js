


/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }



  //  form validate
  function validate(){
    let name = document.querySelector("Name").value;
    if(name == null || name == ""){
      alert("Enter Your Name");
    }
    
    
      
    }
    
    
  