/**
 * 配置文件
 */

'use strict';

module.exports = {
  log: {
    nolog         : /\.(js|css|png|jpeg|ico|gif|svg)$/,
    level         : 'AUTO',
    format        : ':remote-addr :method :url :status :response-time ms :user-agent :content-length',
    logFileDir    : 'E:\\raid\\logs\\admin\\',
    needConsole   : true,
    replaceConsole: true
  }
};
