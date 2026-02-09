export default async function handler(req, res) {
  try {
    // Fear & Greed Index van Alternative.me
    const response = await fetch('https://api.alternative.me/fng/?limit=1');
    const data = await response.json();

    const fng = data.data[0];

    res.status(200).json({
      value: fng.value,
      classification: fng.value_classification,
      timestamp: fng.timestamp,
      last_update: fng.time_until_update
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Kon Fear & Greed data niet ophalen' });
  }
}
