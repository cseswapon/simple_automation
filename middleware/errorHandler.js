export default function errorHandler(err, req, res, next) {
  console.error("Error:", err.message);
  res.status(500).send({ error: "An unexpected error occurred" });
}
