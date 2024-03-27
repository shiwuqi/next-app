/*
 * @Author: shiqi liziw2012@gmail.com
 * @Date: 2024-03-27 16:52:29
 * @LastEditors: shiqi liziw2012@gmail.com
 * @LastEditTime: 2024-03-27 17:21:46
 * @FilePath: /next-app/ecosystem.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  apps: [
    {
      name: "next-app",
      script: ".next/server/server.js",
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};