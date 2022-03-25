import Head from "next/head";

type Props = {
    title: string,
    description: string
}

const Meta = ({title, description}: Props) => {
    
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content="keywords" />
            <link rel="icon" href="" />
            <link rel="apple-touch-icon" sizes="180x180" href="" />
            <link rel="icon" type="image/png" sizes="32x32" href="" />
            <link rel="icon" type="image/png" sizes="16x16" href="" />
            <link rel="manifest" href="" />
            <link rel="mask-icon" href="g" color="#0c3b2c" />
            <meta name="msapplication-TileColor" content="#0c3b2c" />
            <meta name="theme-color" content="#0c3b2c"></meta>
            <meta name="msapplication-TileColor" content="#0c3b2e" />
            <meta name="theme-color" content="#0c3b2e" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="" />
            <meta property="og:url" content="" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="Twitter:site" content="@crispsaladworks" />
            <meta name="twitter:image" content="" />
            <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0" />
            {/* <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&amp;display=swap" as="style" rel="stylesheet preload" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400&amp;display=swap" as="style" rel="stylesheet preload" /> */}
        </Head>
    );
}

export default Meta;
