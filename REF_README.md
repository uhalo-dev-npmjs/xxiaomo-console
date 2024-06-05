## 备注信息


### 1. 发布注意事项

- 1.1 发布前需要先登录npm
- 1.2 发布前需要先修改package.json中的版本号
- 1.3 先检查 registry 地址是否正确（ https://registry.npmjs.org/）

### 2. 相关指令

```bash
# 查看当前npm源
npm config get registry 

# 修改npm源
npm config set registry https://registry.npmjs.org/

# 登录npm
npm login

# 发布npm包
npm publish 

#发布公共的npm包  (携带用户名的方式 需要加的参数)
npm publish --access=public 

```

### 3. 实际配置的指令
```bash
 
# 修复bug,兼容老版本
npm run puhlish-patch

# 新增功能,兼容老版本
npm run puhlish-minor

# 新的架构调整,不兼容老版本
npm run puhlish-major

```
