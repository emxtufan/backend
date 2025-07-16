export default async function handler(req, res) {
  const binId = req.query.bin;
  const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
    headers: {
      "X-Master-Key": "$2a$10$kUW17xI2bsNfU0G3z7qrxuxE0BbGtz8mZ8K7Bf75JWSayMQlimekK"
    }
  });

  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*"); // ✅ elimină problema CORS
  res.status(response.status).json(data);
}
