# HaloLight Azure

[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![Azure](https://img.shields.io/badge/Azure-Static%20Web%20Apps-0078D4.svg?logo=microsoftazure)](https://halolight-azure.h7ml.cn)
[![Next.js](https://img.shields.io/badge/Next.js-15-%23000000.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-%233178C6.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-%2361DAFB.svg)](https://react.dev/)

HaloLight 后台管理系统的 **Azure Static Web Apps 部署版本**，集成 Azure Functions、Azure AD B2C、Cosmos DB 等 Azure 服务。

- 在线预览：<https://halolight-azure.h7ml.cn>
- GitHub：<https://github.com/halolight/halolight-azure>

## 功能亮点

- **Azure Static Web Apps**：全球 CDN + 自动 HTTPS
- **Azure Functions**：无服务器后端 API
- **Azure AD B2C**：企业级身份认证
- **Cosmos DB**：全球分布式数据库
- **Blob Storage**：对象存储
- **GitHub Actions**：自动 CI/CD

## 快速开始

```bash
# 克隆仓库
git clone https://github.com/halolight/halolight-azure.git
cd halolight-azure

# 安装依赖
pnpm install

# 安装 Azure CLI 和 SWA CLI
brew install azure-cli
pnpm add -g @azure/static-web-apps-cli

# 本地开发
pnpm dev

# 使用 SWA CLI 模拟 Azure 环境
swa start
```

## 部署到 Azure

### 方式一：GitHub Actions（推荐）

1. 在 Azure Portal 创建 Static Web App
2. 连接 GitHub 仓库
3. Azure 自动生成 GitHub Actions 工作流

### 方式二：Azure CLI

```bash
az login
az staticwebapp create \
  --name halolight-azure \
  --resource-group myResourceGroup \
  --source https://github.com/halolight/halolight-azure \
  --branch main \
  --app-location "/" \
  --output-location ".next"
```

## Azure 配置

### staticwebapp.config.json

```json
{
  "navigationFallback": {
    "rewrite": "/index.html"
  },
  "routes": [
    {
      "route": "/api/*",
      "allowedRoles": ["authenticated"]
    }
  ],
  "responseOverrides": {
    "401": {
      "redirect": "/.auth/login/aad"
    }
  }
}
```

### Azure Functions

```typescript
// api/hello/index.ts
import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async (context: Context, req: HttpRequest) => {
  context.res = { body: "Hello from Azure Functions!" };
};

export default httpTrigger;
```

## 环境变量

| 变量名 | 说明 |
|--------|------|
| `AZURE_AD_B2C_TENANT_NAME` | Azure AD B2C 租户名 |
| `AZURE_AD_B2C_CLIENT_ID` | 客户端 ID |
| `COSMOS_DB_ENDPOINT` | Cosmos DB 端点 |

## 目录结构

```
halolight-azure/
├── api/                        # Azure Functions
│   ├── hello/
│   └── host.json
├── src/
│   └── app/                    # Next.js 页面
├── staticwebapp.config.json    # SWA 配置
└── .github/workflows/          # CI/CD 工作流
```

## 相关链接

- [HaloLight 文档](https://halolight.docs.h7ml.cn)
- [Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/)
- [Azure Functions](https://docs.microsoft.com/azure/azure-functions/)

## 许可证

[MIT](LICENSE)
