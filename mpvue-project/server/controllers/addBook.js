//新增图书
//获取豆瓣信息
//入库
// https://api.douban.com/v2/book/isbn/
const https = require('https');
module.exports = async(ctx) => {
    const { isbn, openid } = ctx.request.body;
    if (isbn && openid) {
        let url = `https://api.douban.com/v2/book/isbn/${isbn}`;
        const bookInfo = await getJSON(url);
        const rate = bookInfo.rating.average;
        const { title, image, alt, publisher, summary, price } = bookInfo;
        const tags = bookInfo.tags
            .map((item) => {
                return `${item.title} ${item.count}`;
            })
            .join(',');
        const author = bookInfo.author.join(',');
        console.log({
            rate,
            title,
            image,
            alt,
            publisher,
            summary,
            price,
            tags,
            author
        });

    }
};

function getJSON(url) {
    return new Promise((reslove, reject) => {
        https.get(url, (res) => {
            let urlData = '';
            res.on('data', (data) => {
                urlData += data;
            });

            res.on('end', (data) => {
                const bookInfo = JSON.parse(urlData);
                if (bookInfo.title) {
                    reslove(bookInfo);
                }
                reject(bookInfo);
            });
        });
    });
}