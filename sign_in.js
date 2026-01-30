// Toggle Pasword
    let passwordParam = document.getElementById("password");
    console.log(passwordParam);
    const eyeShow = document.querySelector(".fa-eye");
    console.log(eyeShow)
    eyeShow.addEventListener('click', function() {
        if (passwordParam.type === "password") {
            passwordParam.type = "text";
            eyeShow.classList.remove("fa-eye");
            eyeShow.classList.add("fa-eye-slash");
        }       
        else {
            passwordParam.type = "password";
            eyeShow.classList.remove("fa-eye-slash");
            eyeShow.classList.add("fa-eye");
        };
    } );  

const form = document.getElementById('form-el');
form.addEventListener('submit', async(e) => {
    e.preventDefault()
    const formData = new FormData(form);
const userData = Object.fromEntries(formData);
try {
    const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const result = await response.json();
    console.log('Success:', result);
    // alert('Sign In Successful!. You will be redirected to your dashboard.');
    location.href = `Front-End/dashboard.html?usersession=${result.id}`;
} catch (err) {
    console.error('Error:', err);
}

});
