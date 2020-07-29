本框架运用Taro+ts+taroUi进行编写

执行npm start开启开发打包，实时编译
执行npm run test开启测试打包
执行npm run build开启正式打包

需要长期保存的数据运用Taro.setStorageSync，请不要滥用，避免微信内存过大
临时型保存数据运用setGlobalData方法进行数据保存，运用getGlobalData进行获取数据

通用SCSS变量请放在static/css/index.scss中，拿到PSD请第一时间分析页面，提取字体颜色，背景色和字体大小，写入变量文件，方便后期皮肤修改，修改此文件需要需要重新编译

建议提炼通用js写入static/js/utils进行统一管理

