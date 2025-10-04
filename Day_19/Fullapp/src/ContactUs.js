export default function Contact() {
    // Define a color palette based on the previous Ethereum-themed components
    const primaryColor = "#8E44AD"; // Ethereum Purple
    const secondaryColor = "#3498DB"; // Blue
    const backgroundColor = "#F9FAFB"; // Light off-white
    const inputBorderColor = "#DCDFE4"; // Light grey border

    const inputStyle = {
        padding: "12px",
        marginTop: "5px",
        marginBottom: "15px",
        border: `1px solid ${inputBorderColor}`,
        borderRadius: "6px",
        width: "100%", // Ensures input takes full width of the container
        boxSizing: "border-box", // Include padding/border in the element's total width/height
    };

    const buttonStyle = {
        padding: "12px 20px",
        backgroundColor: primaryColor,
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "1em",
        fontWeight: "bold",
        marginTop: "10px",
        transition: "background-color 0.3s ease",
        // Adding a hover effect (though inline styles make true hover tricky, this is for demonstration)
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };

    return (
        <div style={{ backgroundColor: backgroundColor, padding: "40px 0" }}>
            <h1 style={{ textAlign: "center", color: primaryColor, marginBottom: "30px", fontSize: "2.5em" }}>
                Connect With Us ✉️
            </h1>
            
            {/* Form Container */}
            <form style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "0", // Gap is now handled by margin on inputStyle
                maxWidth: "450px", 
                margin: "auto",
                padding: "30px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(44, 62, 80, 0.1)", // Prominent shadow
                borderTop: `5px solid ${secondaryColor}`, // Highlight border
            }}>
                
                <label style={{ fontWeight: "600", color: "#34495E" }}>
                    Name:
                    <input type="text" placeholder="Your Full Name" style={inputStyle} required />
                </label>
                
                <label style={{ fontWeight: "600", color: "#34495E" }}>
                    Email Address:
                    <input type="email" placeholder="name@example.com" style={inputStyle} required />
                </label>
                
                <label style={{ fontWeight: "600", color: "#34495E" }}>
                    Phone Number (Optional):
                    <input type="tel" placeholder="(555) 555-5555" style={inputStyle} />
                </label>
                
                <label style={{ fontWeight: "600", color: "#34495E" }}>
                    Your Message:
                    <textarea 
                        placeholder="Tell us about your inquiry..." 
                        rows="5" 
                        style={{ ...inputStyle, resize: "vertical" }} 
                        required 
                    />
                </label>
                
                <button type="Submit" style={buttonStyle}>
                    Send Message
                </button>
            </form>
        </div>
    );
}