/**
 * Created by liuwensa on 2017/2/23.
 */

'use strict';

global.ROOT_PATH = __dirname;

global.Promise = require('bluebird');
global.config  = require('config');

global.logger = require('./logger').getLogger('main');

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// new Date().Format('yyyy-MM-dd hh:mm:ss.S') ==> 2006-07-02 08:09:04.423
// new Date().Format('yyyy-M-d h:m:s.S')      ==> 2006-7-2 8:9:4.18
// new Date().Format('yyyy年MM月dd日');
// new Date().Format('MM/dd/yyyy');
// new Date().Format('yyyyMMdd');
// new Date().Format('yyyy-MM-dd hh:mm:ss');
// eslint-disable-next-line
Date.prototype.Format = function (format) {
  const o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3),
    S   : this.getMilliseconds()
  };

  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  for (const k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr(('' + o[k]).length)));
    }
  }
  return format;
};
