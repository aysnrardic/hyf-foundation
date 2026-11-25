import express from "express";
import knex from "knex";

const app = express();

app.use(express.json());

const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./tasks.sqlite3",
  },
  useNullAsDefault: true,
});

app.get("/users", async (request, response) => {
  try {
    const databaseUsers = await db("user").select(
      "id",
      "name",
      "email",
      "phone",
    );

    response.json(databaseUsers);
  } catch (error) {
    console.error(error);
    response.status(500).send("Failed to get users");
  }
});

app.post("/users", async (request, response) => {
  const name = request.body.name;
  const email = request.body.email;

  if (!name || !email) {
    response.status(400).send("Name and email are required");
    return;
  }

  try {
    await db("user").insert({ name, email });

    response.status(201).send("User added: " + name);
  } catch (error) {
    console.error(error);
    response.status(500).send("Failed to add user");
  }
});

app.delete("/users/:id", async (request, response) => {
  const id = Number(request.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    response.status(400).send("Invalid user ID");
    return;
  }

  try {
    const deletedCount = await db("user").where("id", id).del();

    if (deletedCount === 0) {
      response.status(404).send("User not found");
      return;
    }

    response.send("User deleted successfully");
  } catch (error) {
    console.error(error);
    response.status(500).send("Failed to delete user");
  }
});

app.get("/user-count", async (request, response) => {
  try {
    const result = await db("user").count("* as total");

    const userCount = result[0].total;

    response.json({ count: userCount });
  } catch (error) {
    console.error(error);
    response.status(500).send("Failed to count users");
  }
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
