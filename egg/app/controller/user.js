'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      userInfo: {
        username: 'wy',
        token: '1235468324234',
      },
    };
  }
}

module.exports = HomeController;
