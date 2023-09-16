document.getElementById('login-form').addEventListener('submit', function(e)
{
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    function checkLogin(username, password, callback) 
    {
        if (username === 'admin' && password === '12345') 
        {
            callback(true);
        } else 
        {
            callback(false);
        }
    }
    function handleLoginResult(isValid) 
    {
        if (isValid) 
        {
            redirectToMainPage();
        } else
        {
            alert('Invalid credentials. Please try again.');
        }
    }

    
    function redirectToMainPage() 
    {
        window.location.href = 'todolist.html';
    }

    
    checkLogin(username, password, handleLoginResult);
});