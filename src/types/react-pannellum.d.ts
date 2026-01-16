declare module "react-pannellum" {
  import * as React from "react";

  export interface PannellumProps {
    id?: string;
    width?: string | number;
    height?: string | number;
    image: string;
    pitch?: number;
    yaw?: number;
    hfov?: number;
    autoLoad?: boolean;
    showZoomCtrl?: boolean;
    showFullscreenCtrl?: boolean;
    hotspotDebug?: boolean;
    compass?: boolean;
    onLoad?: () => void;
    hotspots?: any[];
  }

  export const Pannellum: React.FC<PannellumProps>;

  export function addScene(
    id: string,
    config: Record<string, any>
  ): void;

  export function loadScene(
    id: string
  ): void;
}
