// pages/contact.tsx
import Head from 'next/head';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact - Xinu Design</title>
        <meta name="description" content="Neem contact met ons op voor meer informatie of een offerte." />
      </Head>
      <main>
        <h1>Contact</h1>
        <form>
          <div>
            <label htmlFor="name">Naam:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Bericht:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Verstuur</button>
        </form>
      </main>
    </div>
  );
}
