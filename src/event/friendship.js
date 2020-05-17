const { Friendship, Message } = require('wechaty');

const friendship = async friendship => {

  const friendType = friendship.type();
  if (friendType === Friendship.Type.Receive) { // 1. receive new friendship request from new contact
    // 自动接受好友请求 && 发送消息
    await friendship.accept();
    const contact = friendship.contact()
    const name = contact.name();
    console.log('name', name);
    const msg = friendship.msg;
    msg.say(`你好，你已成功添加雪蜜儿化妆品机器人小助手！
      回复“帮助”查看菜单
      回复1001加群
      回复1002XXX
    `);
  }
};

module.exports = friendship;