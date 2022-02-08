import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Rent Me</title>
        </Head>
        <div className="flex flex-col h-screen justify-between">
            <header>
                <Navbar />
            </header>
            <main className="max-w-screen-2xl m-auto p-4 md:p-8">
                {children}
            </main>
            <Footer />
        </div>
    </>
);

export default Layout;