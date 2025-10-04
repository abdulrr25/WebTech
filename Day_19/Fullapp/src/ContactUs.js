export default function Contact() {
    return (
        <>
            <div>
                <h1 style={{ textAlign: "center" }}>Contact Us</h1>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "auto" }}>
                    <label>
                        Enter your Name : 
                        <input type="text" placeholder="Name" />
                    </label>
                    <label>
                        Enter your Email : 
                        <input type="email" placeholder="Email" />
                    </label>
                    <label>
                        Enter your Number : 
                        <input type="tel" placeholder="Phone Number" />
                    </label>
                    <label>
                        Enter your Message : 
                        <textarea placeholder="Message" rows="4" />
                    </label>
                    <button type="Submit">Send Message</button>
                </div>
            </div>
        </>
    );
}
