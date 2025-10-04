export default function About() {
    return (
        // Wrapper for centering the content and setting a maximum readable width
        <div style={{ 
            maxWidth: "800px", 
            margin: "0 auto", 
            padding: "20px",
            fontFamily: "'Helvetica Neue', Arial, sans-serif" 
        }}>
            {/* Main Header */}
            <h1 style={{ color: "#2c3e50", borderBottom: "2px solid #ECF0F1", paddingBottom: "10px" }}>
                About ethereum.org and the Ethereum Ecosystem
            </h1>

            {/* Introduction Section */}
            <div style={{ marginBottom: "30px", textAlign: "left" }}>
                <h2 style={{ color: "#8E44AD" }}>About ethereum.org</h2>
                <p style={{ lineHeight: "1.6" }}>
                    **ethereum.org** is a public, **open-source resource** for the Ethereum community that anyone can contribute to. We have a small core team dedicated to maintaining and developing the site with contributions from thousands of community members across the globe.
                </p>
            </div>

            {/* Naming Clarity Section */}
            <div style={{ marginBottom: "30px", textAlign: "left" }}>
                <h2 style={{ color: "#2c3e50" }}>A Note on Names: Clearing the Confusion</h2>
                <p style={{ lineHeight: "1.6", fontStyle: "italic" }}>
                    It's common for people to confuse names within the Ethereum landscape, which can lead to poor mental models about how Ethereum works. Here's a quick explainer to clear things up:
                </p>

                {/* Ethereum Definition */}
                <h3 style={{ color: "#3498DB", marginTop: "20px" }}>Ethereum (The Protocol)</h3>
                <p style={{ lineHeight: "1.6" }}>
                    **Ethereum** is a **public network**, a **blockchain**, and an **open-source protocol** -- operated, governed, managed, and owned by a global community of tens of thousands of developers, node operators, ETH holders, and users.
                </p>
                <a href="https://ethereum.org/what-is-ethereum/" style={{ color: "#8E44AD", textDecoration: "none", fontWeight: "bold" }}>
                    → More About Ethereum
                </a>

                {/* Ether (ETH) Definition */}
                <h3 style={{ color: "#3498DB", marginTop: "20px" }}>Ether (ETH)</h3>
                <p style={{ lineHeight: "1.6" }}>
                    **Ether** (also known by its ticker symbol, **ETH**) is the native currency transacted on Ethereum. ETH is needed to pay for usage of the Ethereum network (in the form of **transaction fees**). ETH is also used to **secure the network with staking**. When people talk about the price of Ethereum, they're referring to ETH the asset.
                </p>
                <a href="https://ethereum.org/eth/" style={{ color: "#8E44AD", textDecoration: "none", fontWeight: "bold" }}>
                    → More about ETH
                </a>

                {/* Ethereum Foundation Definition */}
                <h3 style={{ color: "#3498DB", marginTop: "20px" }}>Ethereum Foundation</h3>
                <p style={{ lineHeight: "1.6" }}>
                    A **non-profit organization**, funded initially by the crowdsale of ETH, dedicated to the support of the Ethereum network and ecosystem.
                </p>
                <a href="https://ethereum.org/foundation/" style={{ color: "#8E44AD", textDecoration: "none", fontWeight: "bold" }}>
                    → More about the Ethereum Foundation
                </a>
            </div>

            {/* Mission Section */}
            <div style={{ marginBottom: "30px", textAlign: "left" }}>
                <h2 style={{ color: "#8E44AD" }}>Our Mission</h2>
                <h3 style={{ color: "#2c3e50", fontWeight: "normal", fontSize: "1.3em" }}>
                    **ethereum.org's mission is to be the best portal for Ethereum's growing community.**
                </h3>
                <p style={{ lineHeight: "1.6" }}>
                    We strive to build an easy-to-understand educational resource for all topics relating to Ethereum, designed to help new users become familiar with Ethereum and its key concepts. We want to:
                </p>
                
                <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
                    <li>Explain Ethereum to anyone new to the technology.</li>
                    <li>Help new users get started with ETH and Ethereum.</li>
                    <li>Help new developers to start building.</li>
                    <li>Cover updates in the Ethereum world.</li>
                    <li>Showcase resources created by the community.</li>
                    <li>Bring Ethereum education to as many languages as possible.</li>
                </ul>
                <p style={{ fontWeight: "bold" }}>
                    To achieve this mission, our team focuses on two primary goals on ethereum.org.
                </p>
            </div>
        </div>
    )
}