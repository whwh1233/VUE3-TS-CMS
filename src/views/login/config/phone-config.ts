const rules = {
  phone: [
    {
      required: true,
      message: '手机号是必须要填写的',
      // 什么时候触发  blur / change  失去焦点 / 改变
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '用户名必须是11位数字',
      trigger: 'blur'
    }
  ],
  passKey: [
    // {
    //   required: true,
    //   message: '验证码是必须要填写的',
    //   // 什么时候触发  blur / change  失去焦点 / 改变
    //   trigger: 'blur'
    // },
    {
      pattern: /^[0-9]{3,6}$/,
      message: '密码必须是3-6位的数字',
      trigger: 'blur'
    }
  ]
}
export default rules
