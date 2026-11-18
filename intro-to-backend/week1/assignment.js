import express from "express";
const app = express();

app.use(express.json());

const users = [];

app.get("/users", (request, response) => {
  response.send(users);
});

app.post("/users", (request, response) => {
  const name = request.body.name;
  users.push(name);
  response.send("User added: " + name);
});

app.delete("/users/:name", (request, response) => {
  const name = request.params.name;
  const userIndex = users.indexOf(name);

  if (userIndex === -1) {
    response.status(404).send("User not found");
    return;
  }

  users.splice(userIndex, 1);
  response.send("User deleted: " + name);
});

app.get("/user-count", (request, response) => {
  const userCount = users.length;
  response.json({ count: userCount });
});

app.get("/", (request, response) => {
  response.send(`

    <style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f6f8;
    padding: 40px;
  }

  h1 {
    color: #243b53;
  }

  #user-count {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    font-size: 22px;
  }
</style>

    <h1>User Dashboard</h1>
    <p id="user-count">Loading...</p>
    
   <script>
      async function loadUserCount() {

      const response = await fetch("/user-count");
    
      const data = await response.json();
    
      const userCountElement = document.getElementById("user-count");
      userCountElement.textContent = "Total users: " + data.count;

      }

      loadUserCount();
    </script>
    `);
});

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
