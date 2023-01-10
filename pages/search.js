import React from "react";
import useSWR from "swr";
import { searchFetcher, getFetcherUrl } from "../lib/search";
import { useRouter } from "next/router";
import utilStyles from "../styles/utils.module.css";
import TweetEmbed from "react-tweet-embed";

export default function Search() {
  const { query } = useRouter();
  const { data, loading, error } = useSWR(
    getFetcherUrl(query?.q),
    searchFetcher
  );

  if (error) return <div>{error}</div>;

  if (loading) return <div>Loading...</div>;

  const tweets = data ? Object.keys(data) : [];

  return (
    <div className={utilStyles.twitterContainer}>
      {tweets.map(id => (
        <div className={utilStyles.tweetContainer}>
          <TweetEmbed key={id} tweetId={id} options={{ cards: "hidden" }} />
        </div>
      ))}
    </div>
  );
}
