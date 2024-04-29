function claim(){
    var first = document.getElementById("First Name").value
    var last = document.getElementById("Last Name").value
    var email = document.getElementById("Email").value
    var pass = document.getElementById("Password").value

    var firstLength = first.length 
    var lastLength = last.length
    var passLength = pass.length

    if (firstLength < 4 || lastLength < 4) {
        document.getElementById("result").textContent="Username must contain atleast 4 characters"

        document.getElementById("First Name").style.borderStyle = "solid"
        document.getElementById("First Name").style.borderColor = "red"
        document.getElementById("First Name").style.borderRadius = "2px"

        document.getElementById("Last Name").style.borderStyle = "solid"
        document.getElementById("Last Name").style.borderColor = "red"
        document.getElementById("Last Name").style.borderRadius = "2px"

        document.getElementById("result").style.color = "red"
    }


    else if (passLength < 6 || passLength > 16) {
        document.getElementById("result").textContent="Password must contain minimum 6 characters and maximum 16 characters"
        
        document.getElementById("Password").style.borderStyle = "solid"
        document.getElementById("Password").style.borderColor = "red"
        document.getElementById("Password").style.borderRadius = "2px"

        document.getElementById("result").style.color = "red"
    }

}