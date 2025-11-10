"Ваш код повинен зробити POST-запит до вказаного URL."
"Для створення нового користувача, передайте в запит наступні дані:"
"name: ваше ім’я"
"email: ваш email"
"Поверніть відповідь від сервера після створення користувача."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"

async function createUser(user) {
  try {
   
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
      }),
    });

   
    if (!response.ok) {
      throw new Error('Помилка при створенні користувача');
    }

   
    const data = await response.json();

    return data;

  } catch (error) {
    console.error(error);
    return null;
  }
}


createUser({ name: "Sam", email: "fjsnfkjns2342@gmail.com" })
  .then(res => console.log(res));

module.exports = createUser;
