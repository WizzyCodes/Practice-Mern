import { Router } from "express";
const userRouter = Router();
import user from "../model/user.mjs";

// Create a new user
userRouter.post("/", async (req, res) => {
  const User = new user({
    name: req.body.name,
    email: req.body.email,
  });

  try {
    await User.save();
    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Get all users
userRouter.get("/get-all-user", async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get user by ID
userRouter.get("/:id", async (req, res) => {
  try {
    const user = await user.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// Update user
userRouter.patch("/:id", async (req, res) => {
  try {
    const User = await findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(User);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete user

userRouter.delete("/delete/:id", async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export default userRouter;

// Explanation:

// 1. We create API routes for CRUD operations.
// 2. We handle errors and validation.

// Step 3: Test API Routes

// Open Postman or cURL and test the API routes:

// 1. Create a new user: POST /users
// 2. Get all users: GET /users
// 3. Get user by ID: GET /users/:id
// 4. Update user: PATCH /users/:id
// 5. Delete user: DELETE /users/:id

// Output:

// You should see the API responses in JSON format.

// Next Steps:

// We'll cover the following topics in the next sessions:

// 1. Building React frontend.
// 2. Connecting React to Express backend.
// 3. Implementing authentication.

// Let's build the React frontend together.

// Would you like to:

// A) Build a simple React app
// B) Use a React template
// C) Learn React fundamentals first

// Please respond with A, B, or C.
