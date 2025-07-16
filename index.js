export default async function handler(req, res) {
  const binId = req.query.bin;
  if (!binId) {
    res.status(400).json({ error: "Missing bin ID" });
    return;
  }

  const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
    headers: {
      "X-Master-Key": "$2a$10$kUW17xI2bsNfU0G3z7qrxuxE0BbGtz8mZ8K7Bf75JWSayMQlimekK"  // pune aici cheia ta reală!
    }
  });

  const data = await response.json();

  // Permite CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  res.status(response.status).json(data);
}
