# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## 项目概述

HaloLight Azure Static Web Apps 部署版本，集成 Azure Functions、Azure AD B2C、Cosmos DB。

## 技术栈

- **框架**: Next.js 15 + React 19 + TypeScript
- **样式**: Tailwind CSS 4、shadcn/ui
- **部署**: Azure Static Web Apps
- **后端**: Azure Functions
- **认证**: Azure AD B2C
- **数据库**: Cosmos DB

## 常用命令

```bash
pnpm dev          # 本地开发
pnpm build        # 生产构建
swa start         # SWA CLI 本地模拟
swa deploy        # 部署到 Azure
```

## Azure 服务配置

### SWA CLI 本地开发

```bash
swa start http://localhost:3000 --api-location ./api
```

### Azure Functions 结构

```
api/
├── hello/
│   ├── function.json    # 函数配置
│   └── index.ts         # 函数代码
├── host.json            # 主机配置
└── local.settings.json  # 本地设置
```

### 认证配置

Azure Static Web Apps 内置认证提供程序：
- `/.auth/login/aad` - Azure AD
- `/.auth/login/github` - GitHub
- `/.auth/login/twitter` - Twitter

## 环境变量

通过 Azure Portal → Static Web Apps → Configuration 配置。
