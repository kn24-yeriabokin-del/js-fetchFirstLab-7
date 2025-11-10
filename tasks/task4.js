"Ваш код повинен зробити DELETE-запит до вказаного URL, де {userId} – це ID користувача, якого потрібно видалити."
"Поверніть статус відповіді сервера після видалення."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


async function deleteUser(id) {
  try {
    // Робимо DELETE-запит за вказаним ID
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    });

  // Повертаємо сам об'єкт відповіді, щоб тест міг перевірити response.status
  return response;

  } catch (error) {
    console.error(error);
    return null;
  }
}

// Запуск тільки при прямому запуску файлу (не при require в тестах)
if (require.main === module) {
  deleteUser(1)
    .then(status => console.log(status));
}

module.exports = deleteUser;
