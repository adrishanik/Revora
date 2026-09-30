"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {

    e.preventDefault();

    const { error } =
      await supabase().auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      setMsg(error.message);
      return;
    }

    window.location.href = "/dashboard";
  }

  function startDemo() {

    localStorage.setItem(
      "revora_demo",
      "true"
    );

    localStorage.setItem(
      "revora_demo_user",
      JSON.stringify({
        name: "Demo Agency",
        email: "demo@revora.app",
        plan: "Enterprise Demo",
      })
    );

    window.location.href = "/dashboard";
  }

  return (
    <div className="hero">

      <div className="form glass">

        <Logo />

        <h2 style={{ marginTop: 35 }}>
          Welcome Back
        </h2>

        <p className="muted">
          Sign in to your Revora workspace.
        </p>

        <form onSubmit={submit}>

          <label>Email address</label>

          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="you@example.com"
            required
          />

          <label>Password</label>

          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            placeholder="••••••••"
            required
          />

          <button
            className="btn btn-primary"
            style={{
              width: "100%",
            }}
          >
            Sign In
          </button>

          {msg && (
            <p
              style={{
                color: "#ff7180",
                fontSize: 12,
              }}
            >
              {msg}
            </p>
          )}

        </form>

        <div
          className="center muted"
          style={{
            margin: "18px 0",
          }}
        >
          or
        </div>

        <button
          onClick={startDemo}
          className="btn btn-primary"
          style={{
            width: "100%",
            background:
              "linear-gradient(135deg,#7c3aed,#2563eb)",
          }}
        >
          🚀 Try Demo Account
        </button>

        <div
          className="center muted"
          style={{
            margin: "18px 0",
          }}
        >
          or continue with
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
          }}
        >
          <button className="btn btn-ghost">
            Google
          </button>

          <button className="btn btn-ghost">
            Microsoft
          </button>
        </div>

        <p
          className="center muted"
          style={{
            fontSize: 12,
            marginTop: 22,
          }}
        >
          Don't have an account?{" "}
          <Link
            href="/pricing"
            style={{
              color: "#62a0ff",
            }}
          >
            See plans
          </Link>
        </p>

      </div>

    </div>
  );
}
