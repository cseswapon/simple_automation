import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;
  console.log("Attendance data received:", data);

  res.send({ success: true, message: "Attendance data processed" });
});

export default router;
