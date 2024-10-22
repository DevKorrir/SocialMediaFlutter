
    function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (name == "" || email == "" || message == "") {
            alert("All fields must be filled out");
            return false;
        }
        
        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address");
            return false;
        }
        
        return true;
    }
