export default async function handler(req, res) {
  try {
    // Mock data voor top 30 whales
    const whales = [
      {name: "Wallet 1", coin: "BTC", amount: 1200},
      {name: "Wallet 2", coin: "ETH", amount: 4500},
      {name: "Wallet 3", coin: "USDT", amount: 1000000},
      {name: "Wallet 4", coin: "ADA", amount: 750000},
      {name: "Wallet 5", coin: "BNB", amount: 3000},
      // ... je kan uitbreiden tot 30 entries
    ];

    res.status(200).json(whales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Kon whale data niet ophalen' });
  }
}
