/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer";

export default withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
});
