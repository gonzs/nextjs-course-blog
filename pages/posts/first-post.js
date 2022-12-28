import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>

      <h2>
        <Link href="/">← Back to Home</Link>
      </h2>
    </>
  );
}
