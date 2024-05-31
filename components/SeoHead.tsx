import Head from 'next/head';

interface SeoHeadProps {
  title: string;
  description: string;
}

const SeoHead: React.FC<SeoHeadProps> = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <link rel="canonical" href="https://www.xinudesign.be" />
  </Head>
);

export default SeoHead;
