export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    message: "🐺 Wolf of Freedom backend is live on Vercel"
  });
}
