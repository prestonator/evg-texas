import "@/src/styles/globals.css";
import Layout from "@/src/components/Layout";



export default function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
