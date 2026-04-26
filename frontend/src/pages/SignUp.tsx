import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";


const SignUp: React.FC = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
    const navigate = useNavigate();

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
                navigate("/map");
            } else {
                const { error } = await supabase.auth.signUp({ email, password });
                if (error) throw error;
                setMessage({ type: "success", text: "Check your email for the confirmation link!" });
            }
        } catch (error: any) {
            setMessage({ type: "error", text: error.message || "An error occurred" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-split">
                <div className="auth-visual">
                    <div className="auth-visual-content">
                        <h1 className="editorial-title">Data Lorry.</h1>
                        <p className="editorial-subtitle">The pulse of the nation, mapped.</p>
                        <div className="editorial-accent"></div>
                    </div>
                    <div className="auth-visual-noise"></div>
                </div>

                <div className="auth-form-side">
                    <div className="auth-card">
                        <div className="auth-header">
                            <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
                            <p>{isLogin ? "Enter your credentials to continue" : "Join the community of state mapping"}</p>
                        </div>

                        <form onSubmit={handleAuth} className="auth-form">
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {message && (
                                <div className={`auth-message ${message.type}`}>
                                    {message.text}
                                </div>
                            )}

                            <button type="submit" className="auth-submit-btn" disabled={loading}>
                                {loading ? "Processing..." : isLogin ? "Sign In" : "Sign Up"}
                            </button>
                        </form>

                        <div className="auth-footer">
                            <span>{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
                            <button
                                type="button"
                                className="auth-toggle-btn"
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {isLogin ? "Sign Up" : "Sign In"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;