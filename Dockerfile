FROM library/node:18-alpine

LABEL author="shiqi"

WORKDIR /app

COPY . .

EXPOSE 3008

RUN npm cache clean --force
RUN npm config set strict-ssl false
RUN npm i pnpm -g --registry=https://registry.npm.taobao.org
RUN pnpm i
RUN pnpm build

# 设置环境变量
ENV NODE_ENV=production

# 运行应用程序
CMD ["pnpm", "start"]