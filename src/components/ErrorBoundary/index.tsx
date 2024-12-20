import React, { Component, ReactNode } from "react";
import { SomethingWentWrongPage } from "pages/SomethingWentWrongPage";

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null; // To store the error object
  errorInfo: React.ErrorInfo | null; // To store the error details
}

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
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

    if (errorInfo) {
      // Render fallback UI when an error is caught
      return <SomethingWentWrongPage />;
    }

    return children;
  }
}
