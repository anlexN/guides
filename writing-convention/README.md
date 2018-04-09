## created reason :
1. writing convention

## Only 5 Case :
* camelCase : first letter lowercase , but after that all words uppercase
* hyphen-case : all words is lowercase , but words have a hyphen to each other
* lowercase : all letters lowercase
* PascalCase : all words is lowercase , but first letter is uppercase
* UPPERCASE : all letters uppercase

take [mongoose-model](https://github.com/anlexN/mongoose-model) for example :

camelCase :
1. function , instance , object , property , variable
   ```javascript
   function thisFuction () {} ,
   const thisInstance = new thisFunction() ,
   const thisObject = {
     myProperty : 1
   }
   ``` 

hyphen-case
1. url
   ```javascript
   https://git-scm.com
   ```

lowercase :
1. folder and file name , only one word
   - :open_file_folder: models
     - :open_file_folder: thing
       - :open_file_folder: action
       - :open_file_folder: creativework
       - :open_file_folder: event
       - :open_file_folder: ...
       - index.js

hyphen-case :
1. folder and file name , more than one word
   - :open_file_folder: models
     - :open_file_folder: thing
       - :open_file_folder: action
         - :open_file_folder: achieve-action
         - :open_file_folder: access-action
         - :open_file_folder: consume-action
         - :open_file_folder: ...
         - demo-index.js

PascalCase :
1. class , constructor , function library , singleton
   ```javascript
   const ThingSchema = new mongoose.Schema({});
   class GoodUser {};
   ```

UPPERCASE :
1. acronym

## Note :
Do :
1. full words
   ```javascript
   //bad
   function q() {}
   
   //good
   function query() {}
   ```
2. according to the official
   ```javascript
   Android , IOS , iPhone , Google
   ```
3. english punctuation
   ```javascript
   Hello 世界 !
   ```

Don't :
1. use trailing or leading underscore

## Space :
1. between different languages
   ```javascript
   Hello 世界
   ···
2. between number and unit
   ```javascript
   1 TB
   ```

## HTML :
1. `h1` – `h6`: The HTML Section Heading elements
   1. do not use lower levels to decrease heading font size: use the CSS `font-size` property instead
   1. avoid skipping heading levels: always start from `h1`, next use `h2` and so on
   1. avoiding using `h1` more than once on a page

### Donate me :
<img src="https://thumbnail10.baidupcs.com/thumbnail/155aab2798d0922de6dcda3770fd00fb?fid=658333416-250528-534574233687267&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-ZISJoj7u0TTBjEcB3NCyGMjZ35k%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2281485403887224143&dp-callid=0&time=1523232000&size=c10000_u10000&quality=90&vuk=658333416&ft=image" height="320" alt="anlex N's Alipay"> <img src="https://thumbnail10.baidupcs.com/thumbnail/5e606d76bb7d6638d373ddc8c55e77c8?fid=658333416-250528-869366971687731&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-rIfVaLtUjlFh1o%2f25Ycznwq0xtE%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2281485403887224143&dp-callid=0&time=1523232000&size=c10000_u10000&quality=90&vuk=658333416&ft=image" height="320" alt="anlex N's WeChatPay">