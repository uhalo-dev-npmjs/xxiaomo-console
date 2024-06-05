# 美化网站控制台输出

## 1、介绍

### 1.1 支持的方法如下：

| 名称          | 说明 | 参数                                                |
|:------------|:---|:--------------------------------------------------|
| info        | 基本信息输出 | `title`：标题,`context`：内容, `color`：颜色，默认值 `#909399` |
| success     | 成功信息输出 | `title`：标题,`context`：内容, `color`：颜色，默认值 `#67C23A` |
| error       | 错误信息输出 | `title`：标题,`context`：内容, `color`：颜色，默认值 `#F56C6C` |
| warning     | 警告信息输出 | `title`：标题,`context`：内容, `color`：颜色，默认值 `#E6A23C` |
| prettyPrint | 信息输出基础函数 | `title`：标题,`context`：内容, `color`：颜色               |
 

## 2、使用

### 2.1 安装

```bash
npm i @xxiaomo/console
```

### 2.2 使用

```javascript
// 引入
import * as xc from '@xxiaomo/console'

// 信息
xc.info('info', 'info', 'green')

// 成功
xc.success('success', 'success', 'green')

// 错误
xc.error('error', 'error', 'red')

// 警告
xc.warning('warning', 'warning', 'yellow')

// 信息输出基础函数
xc.prettyPrint('prettyPrint', 'prettyPrint', 'blue')
```
