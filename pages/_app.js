import '../styles/globals.css';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

import Layout from '../components/Layout.jsx';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head></Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
