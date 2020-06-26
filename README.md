# Introduce

## ejs

### 变量获取

```html
<%= paramName%>
```

### 条件判断

```html
<% if (isTrue) {%> ... <% } else { %> ... <% } %>
```

### 循环

```html
<ul>
  <% blogList.forEach(blog => { %>
  <li data-id="<%= blog.id %>"><%= blog.title %></li>
  <% }) %>
</ul>
```

### 组件化

定义组件：

```html
<div>
  <% if (isMe) { %>
  <a href="#">@ 提到我的3</a>
  <% } else { %>
  <button>关注</button>
  <% } %>
</div>
```

> 本质上就是一个 html 代码片段

通过 include 引用：

```html
<div>
  <%- include('widget/user-info', { paramName })%>
</div>
```

这里一个是引入模块，一个是传入给模块需要的参数

## 代码规范

JS doc

```javascript
/**
 * redis test
 * @param {string} key
 * @param {string} val
 * @param {number} timeout 过期时间
 */
function set(key, val, timeout = 60 * 60) {}
```

## mysql

### 数据库相关

#### 查询

1.分页查询

```sql
select * from user limit 2 offset 2
```

> 即这里以一页两条，一次查询偏移 2，即第二页

2.排序

```sql
select * from user order by id desc
```

3.计数

```sql
select count(*) from user
```

> 即这里根据 id 倒序查询

### 建表

1.建立外键

2.更新限制&删除级联

3.连表查询

### sequlize

### redis

redis 是一个内存数据库（mysql 是硬盘数据库），数据全部以 key-value 的形式存储

1.启动

```bash
redis-server
```

2.使用 redis-cli 操作 redis
启动 redis-cli

```bash
redis-cli
```

然后通过 get 或者 set 获取或设置值

> 并且，我们可以通过 key 获取已经设置的所有 key

3.在 node 中使用 redis

安装依赖：

```bash
npm i redis -D
```
