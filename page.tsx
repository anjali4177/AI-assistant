export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        🚀 AI Assistant
      </h1>

      <p style={{ color: "gray", marginBottom: "30px" }}>
        Multi-tenant Chat + Admin Dashboard
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/chat">
          <button
            style={{
              padding: "12px 20px",
              background: "#22c55e",
              border: "none",
              borderRadius: "8px",
              color: "white",
              cursor: "pointer",
            }}
          >
            Open Chat
          </button>
        </a>

        <a href="/project/test/admin">
          <button
            style={{
              padding: "12px 20px",
              background: "#3b82f6",
              border: "none",
              borderRadius: "8px",
              color: "white",
              cursor: "pointer",
            }}
          >
            Open Admin
          </button>
        </a>
      </div>
    </main>
  );
}