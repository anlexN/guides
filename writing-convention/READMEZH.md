## 创建原因 :
1. 书写规范

##仅 5 种写法：
* camelCase : 首字母小写，但后面所有单词大写
* hyphen-case : 所有单词都是小写，但单词之间有连字符
* lowercase : 所有字母小写
* PascalCase : 所有单词都是小写，但第一个字母是大写
* UPPERCASE : 所有字母大写

举 [mongoose-model](https://github.com/anlexN/mongoose-model) 为例子

camelCase :
1. 函数 , 实例 , 对象 , 属性 , 变量
   ```javascript
   function thisFuction () {} ,
   const thisInstance = new thisFunction() ,
   const thisObject = {
     myProperty : 1
   }
   ``` 

hyphen-case
1. 链接
   ```javascript
   https://git-scm.com
   ```

lowercase :
1. 文件夹和文件名字 , 仅有一个单词
   - :open_file_folder: models
     - :open_file_folder: thing
       - :open_file_folder: action
       - :open_file_folder: creativework
       - :open_file_folder: event
       - :open_file_folder: ...
       - index.js

hyphen-case :
1. 文件夹和文件名字 , 超过一个单词
   - :open_file_folder: models
     - :open_file_folder: thing
       - :open_file_folder: action
         - :open_file_folder: achieve-action
         - :open_file_folder: access-action
         - :open_file_folder: consume-action
         - :open_file_folder: ...
         - demo-index.js

PascalCase :
1. 类 , 构造器 , 函数库 , 单例
   ```javascript
   const ThingSchema = new mongoose.Schema({});
   class GoodUser {};
   ```

UPPERCASE :
1. 缩略语

## Note :
建议 :
1. 全部单词
   ```javascript
   //bad
   function q() {}
   
   //good
   function query() {}
   ```
2. 根据官方
   ```javascript
   Android , IOS , iPhone , Google
   ```
3. 英语标点符号
   ```javascript
   Hello 世界 !
   ```

禁止 :
1. 尾部或前导下划线

## 空格 :
1. 在不同的语言之间
   ```javascript
   Hello 世界
   ···
2. 在数量和单位之间
   ```javascript
   1 TB
   ```

## HTML :
1. `h1` – `h6` : HTML部分标题元素
   1. 不要使用更低级别来减少标题字体大小：改用 CSS `font-size` 属性
   1. 避免跳过标题级别：总是从 `h1` 开始，然后使用 `h2` 等等
   1. 避免在页面上多次使用 `h1`

### 赞助我 :
<img src="https://thumbnail10.baidupcs.com/thumbnail/155aab2798d0922de6dcda3770fd00fb?fid=658333416-250528-534574233687267&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-ZISJoj7u0TTBjEcB3NCyGMjZ35k%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2281485403887224143&dp-callid=0&time=1523232000&size=c10000_u10000&quality=90&vuk=658333416&ft=image" height="320" alt="anlex N's Alipay">
<img src="https://thumbnail10.baidupcs.com/thumbnail/5e606d76bb7d6638d373ddc8c55e77c8?fid=658333416-250528-869366971687731&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-rIfVaLtUjlFh1o%2f25Ycznwq0xtE%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2281485403887224143&dp-callid=0&time=1523232000&size=c10000_u10000&quality=90&vuk=658333416&ft=image" height="320" alt="anlex N's WeChatPay">
