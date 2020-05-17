// const { MessageType } = require('wechaty-puppet');

const message = bot => {
  return async msg => {
    // 判断消息来源  人/群
    const room = msg.room();
    // 个人帮助
    if (!room) {
      const msgText = msg.text();
      if (/^帮助$/i.test(msgText)) {
        msg.say(`你好，你已成功添加雪蜜儿化妆品机器人小助手！
          回复“帮助”查看菜单
          回复1001加群
          回复1002XXX
        `);
      } else if (/^1001$/i.test(msgText)) {
        // 需要加入的群名称
        const thisRoom = await bot.Room.find({topic: /^xxx$/i});
        const contact = await bot.Contact.find({name: 'Kylin'}) 
        thisRoom.add(contact);
      }
    }
  
  
    // 12306群撤回监控
    // 
    // if (room) {
    //   const topic = await room.topic();
    //   if (topic.includes('12306打假热线')) {
    //     if (msg.type() === MessageType.Recalled) {
    //       const recalledMessage = await msg.toRecalled();
    //       msg.say(`撤回的消息为：${recalledMessage}`);
    //     }
    //   }
    // }
  
    if (/^link$/i.test(msg.text())) {
      const linkPayload = new UrlLink ({
        description : 'WeChat Bot SDK for Individual Account, Powered by TypeScript, Docker, and Love',
        thumbnailUrl: 'https://avatars0.githubusercontent.com/u/25162437?s=200&v=4',
        title       : 'Welcome to Wechaty',
        url         : 'https://github.com/wechaty/wechaty',
      })
      await msg.say(linkPayload)
      const message = await msg.say(linkPayload) // only supported by puppet-padplus
    }
  };
}

module.exports = message;