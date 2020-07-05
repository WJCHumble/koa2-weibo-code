const router = require("koa-router")();

router.get("/", async (ctx, next) => {
  // 调 render() 方法的本质是将变量传递给页面
  await ctx.render("index", {
    title: "Hello Koa 2!",
    msg: "你好",
    isMe: false,
    blogList: [
      {
        id: 1,
        title: "aaa",
      },
      {
        id: 2,
        title: "bbb",
      },
      {
        id: 2,
        title: "ccc ",
      },
    ],
  });
});

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
  const session = ctx.session
  if (session.viewNum == null) {
    session.viewNum = 0
  }
  session.viewNum++

  ctx.body = {
    title: "koa2 json",
    viewNum: session.viewNum
  };
});

router.get("/profile/:userName", async (ctx, next) => {
  const { userName } = ctx.params;
  ctx.body = {
    title: "this is profile page",
    userName,
  };
});

// 一个获取 JSON 类型数据的 Post 接口
router.post("/login", async (ctx, next) => {
  const { userName, password } = ctx.request.body;
  ctx.body = {
    tag: 100,
    userName,
    password,
  };
});

module.exports = router;
