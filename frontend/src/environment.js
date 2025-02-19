const server = process.env.NODE_ENV === "production" 
    ? "https://zoom-clonebackend-lzr8.onrender.com" 
    : "http://localhost:8000";

export default server;
