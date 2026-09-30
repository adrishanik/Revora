"use client";

import { useEffect } from "react";

export default function DemoPage() {
  useEffect(() => {
    localStorage.setItem("revora_demo", "true");

    localStorage.setItem(
      "revora_demo_user",
      JSON.stringify({
        name: "Demo Agency",
        email: "demo@revora.app",
        plan: "Enterprise Demo",
      })
    );

    window.location.href = "/dashboard";
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background:
          "radial-gradient(circle at 50% 20%, #142c63 0%, #050914 45%, #02040a 100%)",
        color: "white",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: 40,
        }}
      >
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: 16,
            margin: "0 auto 20px",
            display: "grid",
            placeItems: "center",
            background:
              "linear-gradient(135deg,#1683ff,#7b4dff)",
            fontWeight: 800,
            fontSize: 24,
          }}
        >
          R
        </div>

        <h1>Opening your Revora demo...</h1>

        <p
          style={{
            color: "#8c9ab3",
            marginTop: 10,
          }}
        >
          Loading your sample revenue workspace.
        </p>

        <div
          style={{
            width: 220,
            height: 4,
            background: "#162033",
            borderRadius: 20,
            margin: "25px auto",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "65%",
              height: "100%",
              background:
                "linear-gradient(90deg,#1683ff,#8a5cff)",
              animation: "demoLoading 1.2s infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes demoLoading {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(350%);
          }
        }
      `}</style>
    </main>
  );
}
