import React from "react";
import Contact from "./ContactUs";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={{ 
            textAlign: "center", 
            maxWidth: "750px", 
            margin: "0 auto", 
            padding: "20px",
            boxShadow: "0 4px 12px rgba(44, 62, 80, 0.1)", 
            borderRadius: "10px", 
        }}>
            
            <h2 style={{ color: "#2c3e50", fontSize: "2.5em", marginTop: "0" }}>
                All About <span style={{ color: "#8E44AD" }}>Ethereum</span>
            </h2>
            
            <p style={{ 
                fontSize: "1.2em", 
                fontWeight: "bold", 
                color: "#34495E",
                borderBottom: "2px solid #ECF0F1", // Separator line
                paddingBottom: "10px"
            }}>
                Welcome to the platform powering the next generation of the internet.
            </p>

            <div style={{ marginTop: "20px", textAlign: "left" }}>
                <p style={{ lineHeight: "1.6" }}>
                    **Ethereum** is far more than just a cryptocurrency; it's a **decentralized, global virtual machine**. Launched in 2015, it pioneered the concept of a programmable blockchain, moving beyond simple value transfer to enable the creation of complex logic via **smart contracts**. This innovation allows for trustless, self-executing agreements that form the backbone of Web3.
                </p>

                <h3 style={{ color: "#8E44AD", borderLeft: "3px solid #8E44AD", paddingLeft: "10px" }}>
                    Pillars of the Ethereum Ecosystem
                </h3>
                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                    <li style={{ marginBottom: "10px" }}>
                        **Decentralized Finance (DeFi):** Ethereum is the engine for DeFi, hosting applications that recreate traditional financial services—like lending, borrowing, and trading—without intermediaries.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                        **NFTs & Digital Ownership:** The network provides the secure, immutable ledger necessary for the verifiable ownership and trading of **Non-Fungible Tokens (NFTs)**, revolutionizing digital art and collectibles.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                        **The Merge & Sustainability:** The successful transition to **Proof-of-Stake (PoS)**, known as *The Merge*, drastically reduced Ethereum's energy consumption by approximately **99.95%**, cementing its status as a more sustainable technology.
                    </li>
                </ul>
            </div>

            <div style={{ marginTop: "30px" }}>
                <img 
                    src="https://ethereum.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcommunity-hero.89b5ba2f.png&w=1080&q=75" 
                    alt="Abstract graphic representing the Ethereum network and community" 
                    height="auto"
                    width="90%"
                    style={{ 
                        borderRadius: "8px", 
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)" // Subtle shadow for the image
                    }}
                />
            </div>
        </div>
    );
};

export default Home;