const { DingTalk } = require('../dist')
// import { DingTalk } from '../dist'

const dingTalk = new DingTalk('token')
dingTalk.text({
  // atAll: true,
  text: '通知测试 text',
})


// dingTalk.link({
//   title: '通知测试 link',
//   text: '测试文案',
//   msgUrl: 'http://www.baidu.com',
//   picUrl: 'https://images.pexels.com/photos/11369622/pexels-photo-11369622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
// })

// dingTalk.markDown({
//   atAll: true,
//   title: '通知测试 markDown',
//   mdText: `
//   # 测试 markdown
//   ## 测试用例
//   ## 测软件
//   `,
// })

// dingTalk.feedCard({
//   links: [
//     {
//       title: '通知测试 feedCard',
//       msgUrl: 'http://www.baidu.com',
//       picUrl:
//         'https://images.pexels.com/photos/11369622/pexels-photo-11369622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//     },
//   ],
// })

// dingTalk.aloneAction({
//   title: '通知测试 aloneAction',
//   mdText: '# 测试 markdown',
//   btns: [
//     { title: '测试按钮 1', url: 'http://www.baidu.com' },
//     { title: '测试按钮 2', url: 'http://www.baidu.com' },
//   ],
//   sort: 'horizontal',
//   hideAvatar: false,
// })

dingTalk.wholeAction({
  title: '通知测试 wholeAction',
  mdText: '# 测试 markdown, 钉钉目前发送消息需要添加消息关键词哦！',
  singleTitle: '测试 single 标题',
  singleUrl: 'http://www.baidu.com',
  sort: 'vertical',
  hideAvatar: false,
})