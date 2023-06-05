const submitButton = document.querySelector('.login-form');
console.log(submitButton);

submitButton.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === '' && password.value === '') {
        return alert('Потрібно заповнити поле');
    }
    console.log(`Email:${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}
