import React from 'react';

export class AppErrorBoundary extends React.Component<
  React.PropsWithChildren,
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="mx-auto max-w-3xl px-6 py-24">
          <h1 className="font-display text-4xl">Something went wrong.</h1>
          <p className="mt-4 text-white/60">Please reload the page and try again.</p>
        </main>
      );
    }

    return this.props.children;
  }
}
