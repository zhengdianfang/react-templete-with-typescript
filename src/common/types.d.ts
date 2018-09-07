import * as React from "react";
import { RouteComponentProps } from "react-router";

export interface Route {
  path?: string;
  name?: string;
  component?:  React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  childRoutes?: Route[];
  isIndex?: boolean;
  exact?: boolean;
  autoIndexRoute?: boolean;
}