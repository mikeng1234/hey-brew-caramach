"use client";

import { Component, ReactNode } from "react";

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[ErrorBoundary]", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center"
          style={{ background: "#000000" }}
        >
          <p className="text-4xl">☕</p>
          <h1 className="text-xl font-bold" style={{ color: "#ffffff" }}>
            Something went wrong.
          </h1>
          <p className="text-sm max-w-sm" style={{ color: "#888888" }}>
            Please refresh the page or contact us at{" "}
            <a href="mailto:heybrewcafeph@gmail.com" style={{ color: "#cfa473" }}>
              heybrewcafeph@gmail.com
            </a>
            .
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-7 py-3 text-sm font-semibold transition-colors duration-200"
            style={{ background: "#cfa473", color: "#000000", borderRadius: "9999px" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#b8895a"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#cfa473"; }}
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
