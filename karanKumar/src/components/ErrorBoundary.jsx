import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Unhandled app error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-dvh flex items-center justify-center px-6 text-center">
          <div className="max-w-xl bg-(--surfaceColor) p-8 rounded-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-clip1 mb-4">
              Something went wrong
            </h1>
            <p className="text-white/90">
              Please refresh the page. If the issue continues, contact me from
              the contact page.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
