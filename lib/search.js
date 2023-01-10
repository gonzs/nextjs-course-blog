export async function searchFetcher(url) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "61a69ca1d1msh265b49833db1441p1aa71ajsnaf6f05ecae26",
      "X-RapidAPI-Host": "twitter135.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const { globalObjects } = await response.json();
    return globalObjects.tweets;
  } catch (err) {
    console.error(err);
  }
}

export const getFetcherUrl = q =>
  `https://twitter135.p.rapidapi.com/Search/?q=${q}&count=20`;
