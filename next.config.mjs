/*
 * @Author: shiqi liziw2012@gmail.com
 * @Date: 2024-03-26 14:52:21
 * @LastEditors: shiqi liziw2012@gmail.com
 * @LastEditTime: 2024-03-28 14:53:00
 * @FilePath: /next-app/next.config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      
    ],
  },
};

export default nextConfig;
