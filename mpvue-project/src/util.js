//工具函数

import config from './config';

export function get(url, data) {
  return request(url, 'GET', data);
}

export function post(url, data) {
  return request(url, 'POST', data);
}

function request(url, method, data, header = {}) {
  return new Promise((reslove, reject) => {
    wx.request({
      data,
      method,
      header,
      url: config.host + url,
      success(res) {
        if (res.data.code === 0) {
          reslove(res.data.data);
        } else {
          showModal('失败', res.data.data.msg);
          reject(res.data);
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

export function showModal(title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  });
}
