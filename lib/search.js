export async function searchFetcher(url) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
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
