// 1. How do you set up SQLite in a React Native project?
// npm install react-native-sqlite-storage

// 2. How do you create a database using SQLite in React Native?
// You can create a database using SQLite's openDatabase method. If the database doesn't exist,
// it will be created.

import SQLite from "react-native-sqlite-storage";
SQLite.enablePromise(true);
async function createDatabase() {
  const db = await SQLite.openDatabase({
    name: "myDatabase.db",
    location: "default",
  });
  console.log("Database created");
  return db;
}

// 3. How do you open an existing SQLite database in React Native?
// You open an existing database using the same openDatabase method. If the database exists, it will be opened.
async function openDatabase() {
  const db = await SQLite.openDatabase({
    name: "myDatabase.db",
    location: "default",
  });
  console.log("Database opened");
  return db;
}

// 4. How do you create a table in SQLite in React Native?
// Use executeSql to create a table.

async function createTable() {
  const db = await openDatabase();
  await db.executeSql(
    "CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)"
  );
  console.log("Table created");
}

// 5. What is the syntax to insert data into a table in SQLite using React Native?
// To insert data, use executeSql with INSERT statements.

async function insertUser(name, age) {
  const db = await openDatabase();
  const result = await db.executeSql(
    "INSERT INTO Users (name, age) VALUES (?, ?)",
    [name, age]
  );
  console.log("User inserted");
}

// 6. How do you handle asynchronous database queries in React Native using SQLite?
// SQLite queries are asynchronous, and you can handle them with async/await or promises.
async function fetchData() {
  try {
    const db = await openDatabase();
    const result = await db.executeSql("SELECT * FROM Users");
    const users = result[0].rows.raw(); // get all rows
    console.log(users);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// 7. How do you query data from a table in SQLite in React Native?
// You can query data using SELECT statements.
async function getUsers() {
  const db = await openDatabase();
  const result = await db.executeSql("SELECT * FROM Users");
  const users = result[0].rows.raw(); // returns all rows as an array
  return users;
}

// 8. What is the method to retrieve all rows from a result set after executing a SELECT query?
// After executing the query, you can access rows like this:
const rows = result[0].rows.raw(); // Fetch all rows as an array

// 9. How do you update data in a SQLite table in React Native?
// To update data, you use an UPDATE query.
async function updateUser(id, name, age) {
  const db = await openDatabase();
  await db.executeSql("UPDATE Users SET name = ?, age = ? WHERE id = ?", [
    name,
    age,
    id,
  ]);
  console.log("User updated");
}

// 10. What is the syntax to delete data from a table in SQLite in React Native?
// To delete data, you use a DELETE query.

async function deleteUser(id) {
  const db = await openDatabase();
  await db.executeSql("DELETE FROM Users WHERE id = ?", [id]);
  console.log("User deleted");
}
// 11. How do you perform a JOIN operation in SQLite in React Native?
// Use JOIN to retrieve data from multiple tables.

async function getUsersWithOrders() {
  const db = await openDatabase();
  const result = await db.executeSql(`
    SELECT Users.name, Orders.order_id 
    FROM Users 
    JOIN Orders ON Users.id = Orders.user_id
  `);
  const data = result[0].rows.raw();
  return data;
}

// 12. How do you execute complex SQL queries (like aggregation, GROUP BY, etc.) in SQLite in React Native?
// Here's an example using GROUP BY:

async function getUserCountByAge() {
  const db = await openDatabase();
  const result = await db.executeSql(
    "SELECT age, COUNT(*) FROM Users GROUP BY age"
  );
  const counts = result[0].rows.raw();
  return counts;
}
// 13. How do you handle errors when performing SQLite queries in React Native?
// Wrap queries in try-catch blocks to handle errors.

async function safeQuery() {
  try {
    const db = await openDatabase();
    const result = await db.executeSql("SELECT * FROM Users");
    console.log(result);
  } catch (error) {
    console.error("Database query failed", error);
  }
}
// 14. How can you optimize SQLite queries for performance in React Native, especially with large datasets?
// Use indexes and limit the number of rows with LIMIT.

async function getLimitedUsers(limit = 10) {
  const db = await openDatabase();
  const result = await db.executeSql("SELECT * FROM Users LIMIT ?", [limit]);
  const users = result[0].rows.raw();
  return users;
}
// 15. How do you perform bulk insertions of data in SQLite in React Native?
// You can insert multiple records inside a transaction for performance.

async function insertMultipleUsers(users) {
  const db = await openDatabase();
  await db.transaction(async (tx) => {
    for (const user of users) {
      await tx.executeSql("INSERT INTO Users (name, age) VALUES (?, ?)", [
        user.name,
        user.age,
      ]);
    }
  });
  console.log("Users inserted");
}
// 16. What are the best practices for handling database migrations in SQLite within a React Native project?
// Database migrations can be handled by checking the schema version on app startup and applying migrations
// as necessary.

async function applyMigrations() {
  const db = await openDatabase();
  // Add new columns, modify tables here
  await db.executeSql("ALTER TABLE Users ADD COLUMN email TEXT");
}
// 17. How do you ensure data consistency and prevent race conditions when multiple components
// access SQLite in React Native?
// Use transactions to ensure atomic operations.

async function updateUserInTransaction(id, name, age) {
  const db = await openDatabase();
  await db.transaction(async (tx) => {
    await tx.executeSql("UPDATE Users SET name = ?, age = ? WHERE id = ?", [
      name,
      age,
      id,
    ]);
  });
  console.log("User updated in transaction");
}
// 18. How do you use SQLite transactions to ensure atomic operations in React Native?
// Wrap operations inside a transaction:

async function updateMultipleUsers(users) {
  const db = await openDatabase();
  await db.transaction(async (tx) => {
    users.forEach((user) => {
      tx.executeSql("UPDATE Users SET name = ? WHERE id = ?", [
        user.name,
        user.id,
      ]);
    });
  });
  console.log("Users updated");
}
// 19. How do you check if a table exists in SQLite before creating it in React Native?
// Use the SELECT query to check for a table.

async function checkTableExists(tableName) {
  const db = await openDatabase();
  const result = await db.executeSql(
    `SELECT name FROM sqlite_master WHERE type='table' AND name='${tableName}'`
  );
  return result[0].rows.length > 0;
}
// 20. How do you handle versioning of your SQLite database in React Native?
// You can check the database version and apply migrations if needed.

async function handleDbVersion() {
  const db = await openDatabase();
  const version = await db.getVersion();
  if (version < 2) {
    // Apply migration
  }
}
// 21. How do you retrieve a single row from a table in SQLite using React Native?
// You can retrieve a single row by using the WHERE clause.

async function getUserById(id) {
  const db = await openDatabase();
  const result = await db.executeSql("SELECT * FROM Users WHERE id = ?", [id]);
  const user = result[0].rows.item(0); // Get the first row
  return user;
}
// 22. How do you insert data into a SQLite table with parameters using prepared statements in React Native?
// Prepared statements prevent SQL injection.

async function insertUserWithPreparedStatement(name, age) {
  const db = await openDatabase();
  const result = await db.executeSql(
    "INSERT INTO Users (name, age) VALUES (?, ?)",
    [name, age]
  );
  console.log("User inserted");
}
// 23. How do you perform a SELECT query with conditions (WHERE clause) in SQLite in React Native?
// Use WHERE to filter data.

async function getUserByName(name) {
  const db = await openDatabase();
  const result = await db.executeSql("SELECT * FROM Users WHERE name = ?", [
    name,
  ]);
  const users = result[0].rows.raw();
  return users;
}
// 24. How do you fetch data asynchronously and render it in a FlatList component in React Native after querying SQLite?
// After querying SQLite, you can pass the data to a FlatList.

async function fetchAndDisplayUsers() {
  const users = await getUsers();
  setUsers(users); // state for FlatList
}

<FlatList data={users} renderItem={({ item }) => <Text>{item.name}</Text>} />;
// 25. How do you migrate data from one SQLite version to another in React Native
// (e.g., adding new columns or modifying data)?
// You can apply schema changes manually when opening the database or on app startup.

async function migrateDatabase() {
  const db = await openDatabase();
  await db.executeSql("ALTER TABLE Users ADD COLUMN email TEXT");
  console.log("Database migration applied");
}

// ========================== database migration to production ==========================
import SQLite from "react-native-sqlite-storage";

SQLite.enablePromise(true);

// Database versioning
const CURRENT_DB_VERSION = 2; // Increment this whenever there's a schema update

// Open the database
async function openDatabase() {
  const db = await SQLite.openDatabase({
    name: "myDatabase.db",
    location: "default",
  });
  console.log("Database opened");
  return db;
}

// Check the current version of the database
async function getDbVersion(db) {
  const result = await db.executeSql(
    'SELECT value FROM AppVersion WHERE key = "db_version"'
  );
  if (result[0].rows.length === 0) {
    // If version is not found, set it to 1 or the current version
    await db.executeSql("INSERT INTO AppVersion (key, value) VALUES (?, ?)", [
      "db_version",
      CURRENT_DB_VERSION,
    ]);
    return 1; // default version
  }
  return parseInt(result[0].rows.item(0).value, 10);
}

// Update the database version in the AppVersion table
async function updateDbVersion(db, newVersion) {
  await db.executeSql(
    'UPDATE AppVersion SET value = ? WHERE key = "db_version"',
    [newVersion]
  );
}

// Migrate the database schema if needed
async function migrateDatabase() {
  const db = await openDatabase();
  const currentVersion = await getDbVersion(db);

  if (currentVersion < CURRENT_DB_VERSION) {
    console.log(
      `Migrating database from version ${currentVersion} to ${CURRENT_DB_VERSION}`
    );
    await applyMigrations(db, currentVersion);
    await updateDbVersion(db, CURRENT_DB_VERSION);
  }
}

// =====================  Apply necessary migrations based on the version =====================
async function applyMigrations(db, currentVersion) {
  if (currentVersion < 2) {
    // Migration logic from version 1 to version 2
    await db.executeSql("ALTER TABLE Users ADD COLUMN email TEXT");
    console.log("Applied migration from version 1 to 2");
  }

  // You can add more migrations if there are more versions
  if (currentVersion < 3) {
    // Migration logic from version 2 to version 3
    // Add new tables, columns, etc.
    console.log("Applied migration from version 2 to 3");
  }
}

//  ================== database migration ==================

// 1. Basic SQLite Knowledge
// What is SQLite, and why would you use it in a React Native application?

// How do you initialize a SQLite database in React Native, and what are the essential steps?

// Can you explain how to perform CRUD (Create, Read, Update, Delete) operations in SQLite using React Native?

// 2. Database Versioning
// How do you handle SQLite database versioning in a React Native app?

// What problems can occur if the database schema is not properly versioned, and how would you prevent these issues?

// Explain how you would implement a version check for a SQLite database when a user updates the app. How would you ensure the schema is updated appropriately?

// 3. Database Migration
// What is database migration, and why is it necessary in mobile applications?

// How would you implement migrations in React Native SQLite when pushing an app update to the Play Store?

// Can you describe how to handle breaking changes in the database schema (such as adding or removing columns) during an app update?

// How do you make sure that a database migration only occurs when necessary and avoid running it multiple times?

// 4. SQLite Schema Changes
// If you need to add a new column to an existing table in SQLite, how would you handle this in React Native?

// How would you go about removing a column from an existing SQLite table in React Native? Is there a direct way to do this in SQLite, and if not, what would you do?

// How would you handle renaming a table or column in SQLite while preserving the existing data?

// 5. App Version vs. Database Version
// How do you compare the app version with the SQLite database version after an update? How would you ensure compatibility between the app version and the database version?

// What challenges might arise when managing app and database versions, and how would you solve them?

// If a user installs an update to the app, how would you make sure that the database schema gets updated without data loss?

// 6. Performance Considerations
// How do you ensure that database migrations do not negatively affect app performance, especially for large datasets?

// What strategies can be used to optimize SQLite queries and migrations in React Native?

// 7. Handling Errors and Rollbacks
// How would you handle errors during a migration process in SQLite? What strategy would you use to avoid corrupting the database?

// If a migration fails, how would you roll back changes and revert the database to its previous state?

// 8. SQLite in React Native
// Can you explain how to use react-native-sqlite-storage for managing SQLite databases in React Native? What are its key features?

// What is the difference between react-native-sqlite-storage and react-native-sqlite-2? Which one would you prefer to use and why?

// How do you open and close a SQLite database connection in React Native? Why is managing the database connection important?

// 9. Using getVersion and setVersion
// How do you manage the database version using getVersion and setVersion methods in SQLite? Can you give an example?

// What is the purpose of storing the database version in a separate table (like AppVersion), and how would you implement it?

// 10. Handling Data Migration Between App Versions
// Describe how you would approach migrating data when you add a new feature that requires additional database tables or columns.

// Can you provide an example of how you would write a migration to transfer old data from one table to a new table in SQLite?

// 11. Handling Multiple Versions
// How would you manage multiple versions of a React Native app and ensure each version gets the correct database migration?

// If a user installs an app update after several versions of migrations have been applied, how would you handle the migration process to update the database to the latest version?

// 12. Database Integrity and Backup
// How would you back up and restore an SQLite database in React Native? Why is this important, especially when handling migrations?

// Can you explain how to ensure data integrity during database migrations? What strategies can you use to validate data before and after the migration?

// 13. Handling Schema Changes with Real-Time Data
// When updating the SQLite schema in React Native, how do you ensure that users who are actively using the app (with real-time data) don’t experience issues during schema updates?

// 14. Database Testing and Rollback Strategies
// How would you test the SQLite migration process before rolling out an app update?

// If the migration fails in production, how can you implement a rollback mechanism to restore the previous database state?

// 15. Best Practices and Optimization
// What are some best practices for maintaining a clean and optimized SQLite database in React Native apps?

// How would you optimize SQLite queries to ensure fast performance, especially when dealing with large amounts of data?
