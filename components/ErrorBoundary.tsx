"use client";

import { Component, ReactNode } from "react";
import Icon from "@mdi/react";
import { mdiCoffeeOutline } from "@mdi/js";

interface Props {
  children: ReactNode;
  /** When true, renders a compact inline fallback instead of the full-page one. */
  compact?: boolean;
}
interface State { hasError: boolean; }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[ErrorBoundary]", error, info);
  }

  private reset = () => this.setState({ hasError: false });

  render() {
    if (this.state.hasError) {
      if (this.props.compact) {
        return (
          <div
            className="flex flex-col items-center justify-center gap-3 py-16 text-center"
            style={{ background: "#ede4d3", borderRadius: "16px", margin: "2rem 0" }}
          >
            <Icon path={mdiCoffeeOutline} size={1.2} color="#7a6555" aria-hidden="true" />
            <p className="text-sm" style={{ color: "#7a6555" }}>This section failed to load.</p>
            <button
              onClick={this.reset}
              className="text-xs underline transition-colors duration-200"
              style={{ color: "#8b5e3c" }}
            >
              Try again
            </button>
          </div>
        );
      }

      return (
        <div
          className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center"
          style={{ background: "#f5ede2" }}
        >
          <Icon path={mdiCoffeeOutline} size={2} color="#7a6555" aria-hidden="true" />
          <h1 className="text-xl font-bold" style={{ color: "#1e1209" }}>
            Something went wrong.
          </h1>
          <p className="text-sm max-w-sm" style={{ color: "#7a6555" }}>
            Please refresh the page or contact us at{" "}
            <a href="mailto:heybrewcafeph@gmail.com" style={{ color: "#8b5e3c" }}>
              heybrewcafeph@gmail.com
            </a>
            .
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <button
              onClick={this.reset}
              className="px-6 py-2.5 text-sm font-semibold transition-colors duration-200"
              style={{ border: "1px solid #ddd0be", color: "#7a6555", borderRadius: "9999px" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#1e1209"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#7a6555"; }}
            >
              Try again
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-7 py-3 text-sm font-semibold transition-colors duration-200"
              style={{ background: "#cfa473", color: "#1e1209", borderRadius: "9999px" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#b8895a"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#cfa473"; }}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
