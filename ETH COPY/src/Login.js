import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Define styles for a modern look
    const primaryColor = "#8E44AD"; // Ethereum Purple for branding
    const secondaryColor = "#3498DB"; // Blue for accents
    const inputBorderColor = "#DCDFE4";
    const highlightColor = "#F0F0F0";

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Full viewport height for centering
        backgroundColor: highlightColor,
        padding: "20px",
    };

    const formWrapperStyle = {
        padding: "40px",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        maxWidth: "400px",
        width: "100%",
        borderTop: `4px solid ${primaryColor}`,
    };

    const inputStyle = {
        padding: "12px",
        marginBottom: "20px",
        border: `1px solid ${inputBorderColor}`,
        borderRadius: "8px",
        width: "100%",
        boxSizing: "border-box",
        fontSize: "1em",
        transition: "border-color 0.3s",
    };

    const labelStyle = {
        display: "block",
        marginBottom: "8px",
        marginTop: "10px",
        fontWeight: "600",
        color: "#34495E",
        textAlign: "left",
    };

    const buttonStyle = {
        padding: "12px 20px",
        backgroundColor: primaryColor,
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "1.1em",
        fontWeight: "bold",
        width: "100%",
        marginTop: "20px",
        boxShadow: "0 4px 10px rgba(142, 68, 173, 0.4)",
        transition: "background-color 0.3s ease",
    };

    // Note: The button needs to be inside the form or wrapped in a proper submission handler for production, 
    // but we'll keep the button placement for visual styling as per the original component structure.

    return (
        <div style={containerStyle}>
            <div style={formWrapperStyle}>
                <h1 style={{ textAlign: "center", color: primaryColor, fontSize: "2em", marginBottom: "30px" }}>
                    Welcome Back!
                </h1>

                <form>
                    {/* Username Field */}
                    <label style={labelStyle}>
                        Enter Your User Name
                    </label>
                    <input
                        type="Text"
                        placeholder="User Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={inputStyle}
                        required
                    />

                    {/* Password Field */}
                    <label style={labelStyle}>
                        Enter Your Password
                    </label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={inputStyle}
                        required
                    />
                    
                    {/* Using an anchor tag for a "Forgot Password" link for realism */}
                    <p style={{ textAlign: "right", fontSize: "0.9em", marginTop: "-10px" }}>
                        <a href="#" style={{ color: secondaryColor, textDecoration: "none" }}>Forgot Password?</a>
                    </p>

                    {/* Login Button */}
                    <button type="submit" style={buttonStyle}>
                        Login 
                    </button>
                </form>
            </div>
        </div>
    );
}