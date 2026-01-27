# 宝塔面板部署 Next.js 指南

## 1. 安装 Node.js

在宝塔面板中：
- **软件商店** → 搜索 **Node.js版本管理器** → 安装
- 安装完成后，选择 **Node 20.x LTS** 版本

## 2. 上传代码到服务器

### 方式 A：Git 拉取（推荐）
```bash
cd /www/wwwroot
git clone https://github.com/dexuai/imfu-website.git
cd imfu-website
```

### 方式 B：宝塔文件管理
将本地项目打包上传，解压到 `/www/wwwroot/imfu-website`

## 3. 配置环境变量

在服务器上创建 `.env.local` 文件：

```bash
cd /www/wwwroot/imfu-website
nano .env.local
```

添加内容：
```
NEXT_PUBLIC_SUPABASE_URL=https://rrsisywulkmzvrwutqiu.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_tUJZ6vNJqm2xHHoZR93Dag_f-BxNj0w
```

## 4. 安装依赖并构建

```bash
cd /www/wwwroot/imfu-website
npm install
npm run build
```

## 5. 使用 PM2 守护进程

```bash
# 安装 PM2
npm install -g pm2

# 启动应用
pm2 start npm --name "imfu-website" -- start

# 设置开机自启
pm2 save
pm2 startup
```

## 6. 配置宝塔 Nginx 反向代理

### 在宝塔面板中：
1. **网站** → **添加站点**
2. 域名填写：`imfu.ai`（你的域名）
3. PHP 版本选择：**纯静态**
4. 创建后点击站点 → **配置文件**

### 替换 Nginx 配置：

```nginx
server {
    listen 80;
    server_name imfu.ai www.imfu.ai;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 7. 配置 SSL（可选但推荐）

在宝塔面板：
- 点击站点 → **SSL** → **Let's Encrypt** → 申请证书

## 8. 常用命令

```bash
# 查看应用状态
pm2 status

# 查看日志
pm2 logs imfu-website

# 重启应用
pm2 restart imfu-website

# 更新代码后重新部署
cd /www/wwwroot/imfu-website
git pull
npm install
npm run build
pm2 restart imfu-website
```

## 端口放行

确保阿里云安全组和宝塔防火墙都开放了 **80** 和 **443** 端口。

---

部署完成后访问 `http://你的域名` 即可看到网站！
