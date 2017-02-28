# 基于socket.io和child_process模块实现的简单的日志查看系统

`socket.io`是一个为实时应用提供跨平台实时通信的库。`socket.io`旨在使实时应用在每个浏览器和移动设备上成为可能，模糊不同的传输机制之间的差异。`child_process`模块是Node.js的核心模块之一，用于管理外部进程，实现Node.js的多进程。本系统就是通过这两个模块，基于`tail -f`实现实时查看日志。

模块：
- `express`用于搭建Web框架
- `log4js`用来记录日志
- `child_process`模块用于创建子进程，读取日志文件
- `socket.io`模块用于实现`socket`数据通信
- `socket.io-client`模块用于提供客户端`socket.js`文件

`npm install` 安装所需模块依赖

`npm run start`或者直接`node bin/www`启动服务


http://127.0.0.1:3000 访问