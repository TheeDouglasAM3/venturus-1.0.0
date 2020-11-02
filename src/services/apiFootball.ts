/* eslint-disable camelcase */
interface PlayerResponse {
  player_name: string,
  birth_country: string,
  age: number
}

interface Player {
  name: string,
  nacionality: string,
  age: number
}

const getPlayers = async (name: string): Promise<Player[]> => {
  let playersFormatted: Player[] = []

  const playersResponse = await fetch(`https://v2.api-football.com/players/search/${name}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'v1.baseball.api-sports.io',
      'x-rapidapi-key': `${process.env.REACT_APP_API_FOOTBALL_KEY}`,
    },
  })
  const data = await playersResponse.json()
  const { players } = data.api
  if (players) {
    players.forEach((player: PlayerResponse) => {
      playersFormatted = [...playersFormatted, {
        name: player.player_name,
        nacionality: player.birth_country,
        age: player.age,
      }]
    })
  }
  return playersFormatted
}

export default getPlayers
