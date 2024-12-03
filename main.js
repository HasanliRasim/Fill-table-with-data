fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    const table = document.getElementById("todoTable");
    data.forEach((todo) => {
      const row = document.createElement("tr");
      const userIdCell = document.createElement("td");
      userIdCell.textContent = todo.userId;
      const idCell = document.createElement("td");
      idCell.textContent = todo.id;
      const titleCell = document.createElement("td");
      titleCell.textContent = todo.title;
      const completedCell = document.createElement("td");
      completedCell.textContent = todo.completed ? "Yes" : "No";
      completedCell.style.backgroundColor = todo.completed
        ? "lightgreen"
        : "lightcoral";

      row.appendChild(userIdCell);
      row.appendChild(idCell);
      row.appendChild(titleCell);
      row.appendChild(completedCell);
      table.appendChild(row);
    });
  });
