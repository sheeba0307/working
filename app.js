
var form = document.getElementById("form")

var user = document.querySelector(".manage_botton1")

var email = document.querySelector(".manage_botton2")

var password = document.querySelector(".manage_botton3")

var cpassword = document.querySelector(".manage_botton4")



form.addEventListener("submit", function (e) {
    e.preventDefault()

    invalidData()
})


function setError1(prentDiv, message) {



    var iconsDiv = prentDiv.querySelector(".icons1")

    // iconsDiv.classList.add("showIcon")

    iconsDiv.style.display = "block";

    iconsDiv.style.color = "red"

    var errorDiv = prentDiv.querySelector(".error")

    errorDiv.innerText = message

    var errorDiv = prentDiv.querySelector(".input1")

    prentDiv.classList.add("additon1")

}

function setError2(prentDiv, message) {


    var iconsDiv = prentDiv.querySelector(".icons2")

    // iconsDiv.classList.add("showIcon")

    iconsDiv.style.display = "block";

    iconsDiv.style.color = "red"

    var errorDiv = prentDiv.querySelector(".error")

    errorDiv.innerText = message

      var errorDiv = prentDiv.querySelector(".input2")

    prentDiv.classList.add("additon2")
}

function setError3(prentDiv, message) {


    var iconsDiv = prentDiv.querySelector(".icons3")

    // iconsDiv.classList.add("showIcon")

    iconsDiv.style.display = "block";

    iconsDiv.style.color = "red"

    var errorDiv = prentDiv.querySelector(".error")

    errorDiv.innerText = message

    var errorDiv = prentDiv.querySelector(".input3")

    prentDiv.classList.add("additon3")
}

function setError4(prentDiv, message) {

    var iconsDiv = prentDiv.querySelector(".icons4")

    // iconsDiv.classList.add("showIcon")

    iconsDiv.style.display = "block";

    iconsDiv.style.color = "red"

    var errorDiv = prentDiv.querySelector(".error")

    errorDiv.innerText = message

    var errorDiv = prentDiv.querySelector(".input4")

    prentDiv.classList.add("additon4")
}


// suceess Full function

function setSuccess1(prentDiv) {
    var errorDiv = prentDiv.querySelector(".error")

    errorDiv.innerText = ""

      var errorDiv = prentDiv.querySelector(".input1")

    prentDiv.classList.remove("additon1")
    prentDiv.classList.add("success")

}

function setSuccess2(prentDiv) {
    var errorDiv = prentDiv.querySelector(".error")

    
    errorDiv.innerText = ""

      var errorDiv = prentDiv.querySelector(".input2")

    prentDiv.classList.remove("additon2")
    prentDiv.classList.add("success")
}

function setSuccess3(prentDiv) {
    var errorDiv = prentDiv.querySelector(".error")

   
    errorDiv.innerText = ""

      var errorDiv = prentDiv.querySelector(".input3")

    prentDiv.classList.remove("additon3")
    prentDiv.classList.add("success")
}

function setSuccess4(prentDiv) {

    // console.log("prentDiv for value ====> " ,  prentDiv)
    var errorDiv = prentDiv.querySelector(".error")
   
    errorDiv.innerText = ""

      var errorDiv = prentDiv.querySelector(".input4")

    prentDiv.classList.remove("additon4")
    prentDiv.classList.add("success")
}


function invalidData() {

    var input1 = user.querySelector("#input1")

    var userValue = input1.value.trim()

    if (userValue === "") {
        setError1(user, "please fill the input")
    } else {
        setSuccess1(user)
    }


     var input2 = email.querySelector("#input2")

    //  console.log("input2 =====>" , input2)

     var emailValue = input2.value.trim()


     if(emailValue === ""){
        setError2(email , "please enter the email")
     }else{
        setSuccess2(email)
     }

    var input3 = password.querySelector("#input3")

    var passwordValue = input3.value.trim()

    if (passwordValue === "") {
        setError3(password, "please enter the password")
    } else if (passwordValue.length < 8) {
        setError3(password, "password length less then eight")
    } else {
        setSuccess3(password)
    }


    var input4 = cpassword.querySelector("#input4")

    var cpasswordValue = input4.value.trim()

    if (cpasswordValue === "") {
        setError4(cpassword, "please enter the password")
    } else if (cpasswordValue !== passwordValue) {
        setError4(cpassword, "password donst match")
    } else {
        setSuccess4(cpassword)
    }

}