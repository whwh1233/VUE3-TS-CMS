const rules = {
  name: [
    {
      required: true,
      message: '用户名是必须要填写的',
      // 什么时候触发  blur / change  失去焦点 / 改变
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必须要填写的',
      // 什么时候触发  blur / change  失去焦点 / 改变
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上的字母或者数字',
      trigger: 'blur'
    }
  ]
}
export default rules
