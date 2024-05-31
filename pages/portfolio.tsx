// pages/portfolio.tsx
import Head from 'next/head';

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio - Xinu Design</title>
        <meta name="description" content="Bekijk ons portfolio met eerdere projecten." />
      </Head>
      <main>
        <h1>Portfolio</h1>
        <section>
          <h2>Project 1</h2>
          <p>Beschrijving van Project 1.</p>
        </section>
        <section>
          <h2>Project 2</h2>
          <p>Beschrijving van Project 2.</p>
        </section>
      </main>
    </div>
  );
}
