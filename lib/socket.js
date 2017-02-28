/**
 * Created by liuwensa on 2017/2/23.
 */

'use strict';

const cp       = require('child_process');
const socketio = require('socket.io');
const path     = require('path');

exports.io = function (server) {
  const io = socketio(server);

  // 创建一个监控系统日志的房间
  const system = io.of('/socket/log/system');

  // 连接对象
  system.on('connection', function (socket) {
    // 日志文件的绝对路径
    const fielName = `log-${new Date().Format('yyyyMMdd')}`;
    const filePath = path.join(config.log.logFileDir, 'main', fielName);

    // 使用子进程模块执行linux的tail命令
    const child = cp.spawn('tail', ['-f', filePath]);

    // 打印子进程的输出数据
    child.stdout.on('data', function (data) {
      // console.log(data);
      socket.emit('data', data.toString());
    });

    // 监听子进程的错误流数据
    child.stderr.on('data', function (data) {
      logger.info('stderr: ' + data.toString());
      socket.emit('err', data.toString());
    });

    // 监听子进程的退出事件
    child.on('close', function (code) {
      logger.info('子进程退出，code：' + code);
      socket.emit('err', '子进程退出，code：' + code);
    });

    // 连接断开处理
    socket.on('disconnect', function () {
      logger.info('disconnect, 连接断开处理');
    });
  });
};
