export default async function handler(req, res) {
  const r = await fetch('https://api.football-data.org/v4/matches?status=LIVE', {
    headers: { 'X-Auth-Token': process.env.FOOTBALL_DATA_KEY }
  });
  res.status(200).json(await r.json());
}