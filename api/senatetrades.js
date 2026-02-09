export default async function handler(req, res) {
  try {
    // Mock data voor Senaat trades (kan later echte API gebruiken)
    const data = [
      {name: "Senator Smith", ticker: "AAPL", action: "Buy", amount: "$50,000", date: "2026-02-08"},
      {name: "Senator Johnson", ticker: "GOOGL", action: "Buy", amount: "$25,000", date: "2026-02-07"},
      {name: "Senator Lee", ticker: "TSLA", action: "Sell", amount: "$75,000", date: "2026-02-06"},
      {name: "Senator Brown", ticker: "AMZN", action: "Buy", amount: "$100,000", date: "2026-02-05"}
    ];

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Kon senaat trades niet ophalen' });
  }
}
