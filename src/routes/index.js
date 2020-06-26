const router = require("koa-router")();

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!",
  });
});

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
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
