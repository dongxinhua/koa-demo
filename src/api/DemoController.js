class DemoController {
  constructor() {}

  async getDemo(ctx) {
    ctx.body = {
      msg: "hello Demo!!!"
    }
  }
}

export default new DemoController()