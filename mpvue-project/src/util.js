//工具函数

import config from './config';

export function get(url, data) {
  request(url, 'GET', data);
}

export function post(url, data) {
  request(url, 'POST', data);
}

function request(url, method, data) {
  return new Promise((reslove, reject) => {
    wx.request({
      data,
      method,
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
