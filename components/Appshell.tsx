"use client";

import Sidebar from "./Sidebar";
import { Bell, Search, FlaskConical } from "lucide-react";
import { useEffect, useState } from "react";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {

  const [demo, setDemo] = useState(false);

  useEffect(() => {
    setDemo(
      localStorage.getItem("revora_demo") === "true"
    );
  }, []);

  function exitDemo() {

    localStorage.removeItem("revora_demo");
    localStorage.removeItem("revora_demo_user");

    window.location.href = "/";
  }

  return (
    <div className="shell">

      <Sidebar />

      <main className="main">

        <header className="topbar">

          <div className="search">

            <Search
              size={14}
              style={{
                verticalAlign: "middle",
                marginRight: 7,
              }}
            />

            Search anything...

          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
            }}
          >

            {demo && (
              <button
                onClick={exitDemo}
                style={{
                  border: "1px solid rgba(85,125,255,.25)",
                  background:
                    "rgba(66,101,255,.08)",
                  color: "#6d9cff",
                  borderRadius: 8,
                  padding: "7px 10px",
                  cursor: "pointer",
                  fontSize: 11,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <FlaskConical size={13} />
                Demo Mode
              </button>
            )}

            <span
              className="muted"
              style={{
                fontSize: 12,
              }}
            >
              Sep 29, 2026
            </span>

            <Bell size={17} />

          </div>

        </header>

        {demo && (
          <div
            style={{
              margin: "12px 20px 0",
              padding: "10px 14px",
              borderRadius: 10,
              background:
                "linear-gradient(90deg,rgba(36,94,255,.1),rgba(124,58,237,.08))",
              border:
                "1px solid rgba(85,125,255,.16)",
              color: "#6e8dca",
              fontSize: 11,
            }}
          >
            You're exploring Revora with sample data.
            No real customer data or payments are connected.
          </div>
        )}

        {children}

      </main>

    </div>
  );
}
