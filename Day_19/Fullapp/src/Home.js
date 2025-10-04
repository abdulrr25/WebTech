import React from "react";
import Contact from "./ContactUs";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => {
    // let n = useNavigate();
    return (
        <div style={{ textAlign: "center", maxWidth: "600px" }}>
            <h2 style={{ color: "#2c3e50" }}>All About Ethereum</h2>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                Welcome to the Ethereum information page!
            </p>
            <div>
                <p>
                    **Ethereum** is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH) is the native cryptocurrency of the platform. After **Bitcoin**, it is the second-largest cryptocurrency by market capitalization. Ethereum is the platform of choice for many decentralized applications (dApps) and has been instrumental in the rise of decentralized finance (**DeFi**) and non-fungible tokens (**NFTs**). Its transition to a Proof-of-Stake consensus mechanism (The Merge) has significantly reduced its energy consumption.
                </p>
                <img 
                    src="https://ethereum.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcommunity-hero.89b5ba2f.png&w=1080&q=75" 
                    alt="Ethereum Logo" 
                    height="80%" 
                    width="70%"
                />
            </div>
        </div>
        
    );
};

export default Home;