import Head from "next/head";

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Rent Me</title>
        </Head>
        <div className="max-w-screen-2xl m-auto p-4 md:p-8">
            <header>
                Navbar
            </header>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </div>
    </>
);

export default Layout;