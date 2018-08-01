//新增图书
//获取豆瓣信息
//入库
// https://api.douban.com/v2/book/isbn/
const https = require('https');
const {
  mysql
} = require('../qcloud');
module.exports = async ctx => {
  //获取前台发来的信息
  const {
    isbn,
    openid
  } = ctx.request.body;
  if (isbn && openid) {
    const findRes = await mysql('books')
      .select()
      .where('isbn', isbn);
    if (findRes.length) {
      ctx.state = {
        code: -1,
        data: {
          msg: '图书已存在'
        }
      };
      return;
    }
    let url = `https://api.douban.com/v2/book/isbn/${isbn}`;
    //向豆瓣的api发送请求
    const bookInfo = await getJSON(url);
    //拿取有用的信息
    const rate = bookInfo.rating.average;
    const {
      title,
      image,
      alt,
      publisher,
      summary,
      price,
      userInfo
    } = bookInfo;
    const tags = bookInfo.tags
      .map(item => {
        return `${item.title} ${item.count}`;
      })
      .join(',');
    const author = bookInfo.author.join(',');
    //向数据库存这些信息
    try {
      await mysql('books').insert({
        isbn,
        openid,
        rate,
        title,
        image,
        alt,
        publisher,
        summary,
        price,
        tags,
        author,
        userInfo
      });
      ctx.state.data = {
        title,
        msg: 'success'
      };
      ctx.response.data = {
        title,
        msg: 'success'
      };
    } catch (err) {
      ctx.state = {
        code: -1,
        data: {
          msg: '添加失败：' + err.sqlMessage
        }
      };
    }
  }
};
//封装一个发送https请求的函数
function getJSON(url) {
  return new Promise((reslove, reject) => {
    https.get(url, res => {
      let urlData = '';
      res.on('data', data => {
        urlData += data;
      });

      res.on('end', data => {
        const bookInfo = JSON.parse(urlData);
        if (bookInfo.title) {
          reslove(bookInfo);
        }
        reject(bookInfo);
      });
    });
  });
}
