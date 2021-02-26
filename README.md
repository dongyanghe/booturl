
## 开发
    运行npm run dev
## 发布
    运行npm run prod
## 测试
### 测试目标
1.生成各种边界数据（最大、最小、中间值、0、负数、空字符串、null、1——3位小数刚好四舍五入两种值、整数、空数组、一个长度数组、多个长度数组、最大长度数组、超出长度数组...）
2.证明数据位置是否与名称对应，顺序是否正确
3.模拟后端数据推送的频率
4.截图保留界面结果
### 插件工具
#### Karma

#### jasmine
    测试框架
#### protractor
    基于Jasmine的测试工具

#### webdriver-manager
    测试服务器
    先下载文件：webdriver-manager update
    在命令行控制台启动服务器：webdriver-manager start
    默认情况下，Selenium测试服务器接入地址为：http://localhost:4444/wd/hub

#### protractor-jasmine2-html-reporter
    输出html报告插件

#### jasmine-reporters
    输出junit格式的xml报告

## 发布
    1. 修改src\common\CONFIG.ts的serviceType和version值
    2. 搜索"@defect"、"@test"解决遗留问题注释测试代码
    3. 检查svn代码与上一版本各个文件的改动
    4. 提交svn
    5. 运行npm run prod
    6. 打开编译后的网页检查

## 字体
font.zip压缩包有完整字体
assets\styles\font\font.html用于指定压缩后需要保留的文字
[字体格式转换](https://www.fontke.com/tool/fontface/)
[字体压缩](http://everyfont.enjoyfe.com/)


## 2.1.0版本
### BUG：
------
- [x] 字体压缩
- [x] 数字动效高度控制
- [x] 数字动效加速
- [x] 滚动条增加问题
- [x] 退出框
- [x] 兼容提示框
- [x] 尺寸提示框
- [x] 单位位置计算
- [x] 圆点触发
- [x] 折线聚集阴影
- [x] 实时投递滚动
- [x] 位置和间隙调整
- [x] Y轴单位控制
- [x] 排名动态宽度
- [x] 蜘蛛图字体颜色
- [x] 滚动条放大隐藏
- [x] 单位四舍五入
- [x] Echart滚动只有2个
- [x] Echart的Y轴单位
- [x] UC浏览器颜色兼容问题
- [x] UC浏览器Flex兼容问题
- [x] 地图弹窗内容高度问题
- [ ] ~~Y轴长度加长~~
- [x] css分离
- [x] 环保金滚动提示混乱
- [ ] @media媒体查询没有针对不同分辨率的屏幕
- [ ] 字体图片登录页预加载
- [ ] 图片去文字