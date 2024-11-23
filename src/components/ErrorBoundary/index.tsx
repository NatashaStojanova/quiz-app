import React, { Component, ReactNode } from "react";
import { SomethingWentWrongPage } from "pages/SomethingWentWrongPage";

interface ErrorBoundaryProps {
  children: ReactNode; // Children components that the ErrorBoundary wraps
}

interface ErrorBoundaryState {
  error: Error | null; // To store the error object
  errorInfo: React.ErrorInfo | null; // To store the error details
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Catch errors in child components and update state
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { errorInfo } = this.state;
    const { children } = this.props;
    console.log("error bound", errorInfo);

    if (errorInfo) {
      // Render fallback UI when an error is caught
      return <SomethingWentWrongPage />;
    }

    // Normally render children
    return children;
  }
}

export default ErrorBoundary;