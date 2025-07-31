const express = require("express");
const router = express.Router();

const {
  createFeedback,
  getFeedbacks,
  getFeedbacksByTrainee,
  deleteFeedback,
  updateFeedback,
  markFeedbackAsRead 
} = require("../controllers/feedbackController");
router.get("/", (req, res) => {
  console.log("📥 GET /api/coach/feedback called");
  getFeedbacks(req, res);
});
router.get("/by-trainee", (req, res) => {
  console.log("📥 GET /api/coach/feedback/by-trainee called");
  getFeedbacksByTrainee(req, res);
});
router.post("/", (req, res) => {
  console.log("📝 POST /api/coach/feedback called");
  createFeedback(req, res);
});
router.delete("/:id", (req, res) => {
  console.log("🗑️ DELETE /api/coach/feedback/:id called");
  deleteFeedback(req, res);
});
router.put("/:id", (req, res) => {
  console.log("✏️ PUT /api/coach/feedback/:id called");
  updateFeedback(req, res);
});
router.patch("/:id/mark-read", (req, res) => {
  console.log("📬 PATCH /api/coach/feedback/:id/mark-read called");
  markFeedbackAsRead(req, res); 
});
module.exports = router;
