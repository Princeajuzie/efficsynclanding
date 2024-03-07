import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Efficsync </title>
        <meta
          name="description"
          content="Welcome to Efficsync – your ultimate task management solution! Efficsync is here to revolutionize the way you work, offering a comprehensive platform designed to streamline your workflows, boost productivity, and empower your team. With advanced AI technology, seamless collaboration features, and personalized task management solutions, Efficsync ensures that you stay organized, focused, and ahead of the game. Join us today and unlock the full potential of your productivity journey with Efficsync."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
