import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ status: "All services are operational" });
});

export default router;
