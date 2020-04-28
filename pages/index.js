import React from "react";
import Link from "next/link";
import Header from "components/header";
import Layout from "components/layout";
import Portfolio from "components/portfolio";
import Footer from "components/footer";
import "./index.css";

function Home() {
  return (
    <div id="home-page">
      <Header />
      <Layout>
        <h1 className="section-title">Work</h1>
        <p className="section-description">
          Personal programs, hackathon projects and much more
        </p>
        <Portfolio />
        <Link href="/work">
          <p className="more-link">More</p>
        </Link>
        <div className="links">
          <a href="https://github.com/KevinBoxuGao" className="github-link">
            <p>More on Github</p>
          </a>
          <a href="https://devpost.com/KevinBoxuGao" className="devpost-link">
            <p>Devpost</p>
          </a>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}

export default Home;
