"Ваша функція повинна робити GET-запит до вказаного URL і отримати дані."
"Поверніть дані користувачів у форматі масиву"
"Дані мають включати такі поля, як id та name."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"

async function fetchUsers() {
  try {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    
    if (!response.ok) {
      throw new Error('Помилка при завантаженні даних');
    }

    
    const data = await response.json();

    
    const users = data.map(user => ({
      id: user.id,
      name: user.name
    }));

    return users;

  } catch (error) {
    console.error(error);
    return [];
  }
}


fetchUsers().then(users => console.log(users));

module.exports = fetchUsers;
