<dl class="description">
      <dt>5种书写</dt>
      <dd>camelCase: 首字母小写，但后面所有单词大写
        <pre>//函数, 实例, 对象, 属性, 变量
function thisFuction () {} ,
const thisInstance = new thisFunction() ,
const thisObject = { myProperty : 1 }</pre>
      </dd>
      <dd>hyphen-case: 所有单词都是小写，但单词之间有连字符
        <pre>//url
https://git-scm.com

//文件夹和文件名字 , 仅有一个单词
📂 models
    📂 thing
        📂 action
            📂 achieve-action
            📂 access-action
            📂 consume-action
            📂 ...
            demo-index.js
</pre>
      </dd>
      <dd>lowercase: 所有字母小写
        <pre>//文件夹和文件名字 , 超过一个单词
📂 models
    📂 thing
        📂 action
        📂 creativework
        📂 event
        📂 ...
        index.js
</pre>
      </dd>
      <dd>PascalCase: 所有单词都是小写，但第一个字母是大写
        <pre>//类 , 构造器 , 函数库 , 单例
const ThingSchema = new mongoose.Schema({});
class GoodUser {};</pre>
      </dd>
      <dd>UPPERCASE: 所有字母大写
        <pre>acronym</pre>
      </dd>
      <dt>空格</dt>
      <dd>在不同的语言之间</dd>
      <dd>在数量和单位之间</dd>
      <dt>超文本标记语言</dt>
      <dd>不要使用更低级别来减少标题字体大小：改用 CSS `font-size` 属性</dd>
      <dd>避免跳过标题级别：总是从 `h1` 开始，然后使用 `h2` 等等</dd>
      <dd>避免在页面上多次使用 `h1`</dd>
      <dt>注意</dt>
      <dd>全部单词
        <pre>//错误
function q() {}

//正确
function query() {}</pre>
      </dd>
      <dd>根据官方
        <pre>Android , IOS , iPhone , Google</pre>
      </dd>
      <dd>英语标点符号
        <pre>Hello 世界!</pre>
      </dd>
      <dd>白底黑字</dd>
      <dd>没有尾部或前导下划线</dd>
    </dl>

