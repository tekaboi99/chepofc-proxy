const SPORT_KEYS = ['soccer_epl','soccer_spain_la_liga','soccer_italy_serie_a','soccer_germany_bundesliga','soccer_france_ligue_one','soccer_uefa_champs_league','soccer_germany_bundesliga2','soccer_norway_eliteserien','soccer_japan_j_league','soccer_denmark_superliga','soccer_sweden_allsvenskan','soccer_turkey_super_league','soccer_usa_mls'];
export default async function handler(req, res) {
  const results = await Promise.all(SPORT_KEYS.map(k =>
    fetch(`https://api.the-odds-api.com/v4/sports/${k}/events?apiKey=${process.env.ODDS_API_KEY}`)
      .then(r => r.ok ? r.json() : [])
      .catch(() => [])
  ));
  res.status(200).json(results.flat());
}
