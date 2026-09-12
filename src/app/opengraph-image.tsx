import { ImageResponse } from "next/og";
import { SocialImageContent } from "../lib/social-image";
import { ORG_NAME } from "../lib/site-config";

export const alt = ORG_NAME;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<SocialImageContent />, { ...size });
}
