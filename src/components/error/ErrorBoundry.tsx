import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  children: any
}

interface IState {
  hasError?: boolean;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    // It will update the state so the next render shows the fallback UI.
    return { hasError: true };
  }
  componentDidCatch() {
    // It will catch error in any component below. We can also log the error to an error reporting service.
    console.log("error : ");
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="heading" style={{ textAlign: "center" }}>
            <h1>Oops , Something is wrong ...</h1>
            <h3>Please Refresh</h3>
          </div>
          <div className="content">
            <Link to="/">
              <Button type="primary">Go back</Button>
            </Link>
          </div>
        </>
      );
    }
    return this.props.children;
  }
}
