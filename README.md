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
