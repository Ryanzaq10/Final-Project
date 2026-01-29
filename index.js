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
    location.href = `Front-End/dashboard.html?usersession=${result.id}`;
} catch (err) {
    console.error('Error:', err);
}

});
