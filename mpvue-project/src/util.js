//工具函数

import config from './config';

export function get(url) {
  return new Promise((reslove, reject) => {
    wx.request({
      url: config.host + url,
      success(res) {
        if (res.data.code === 0) {
          reslove(res.data.data);
        } else {
          reslove(res.data);
        }
      }
    });
  });
}

export function showSuccess(text) {
  wx.showToast({
    title: text,
    icon: 'success'
  });
}
