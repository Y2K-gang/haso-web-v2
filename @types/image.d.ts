declare module "*.svg" {
  import React from "react";
  const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default Component;
}


declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
