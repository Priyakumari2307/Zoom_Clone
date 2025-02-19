const server = process.env.NODE_ENV === "production" 
    ? "https://zoomclonebackend-wz6f.onrender.com" 
    : "http://localhost:8000";

export default server;