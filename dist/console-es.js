var isEmpty = function isEmpty(value) {
  return value === null || value === undefined || value === '';
};

/**
 * 美化输出
 * @param {String} title 标题
 * @param {String} text 文本
 * @param {String} color 颜色
 * */
var prettyPrint = function prettyPrint(title, text, color) {
  console.log("%c ".concat(title, " %c ").concat(text, " %c"), "background:".concat(color, ";border:1px solid ").concat(color, "; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;"), "border:1px solid ".concat(color, "; padding: 1px; border-radius: 0 2px 2px 0; color: ").concat(color, ";"), 'background:transparent');
};

/**
 * 信息类型输出
 * @param {String} textOrTitle 文本或标题
 * @param {String} content 内容
 * @param {String} color 颜色
 * */
var info = function info(textOrTitle) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#909399';
  var title = isEmpty(content) ? 'Info' : textOrTitle;
  var text = isEmpty(content) ? textOrTitle : content;
  prettyPrint(title, text, color);
};
var error = function error(textOrTitle) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#F56C6C';
  var title = isEmpty(content) ? 'Error' : textOrTitle;
  var text = isEmpty(content) ? textOrTitle : content;
  prettyPrint(title, text, color);
};
var warning = function warning(textOrTitle) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#E6A23C';
  var title = isEmpty(content) ? 'Warning' : textOrTitle;
  var text = isEmpty(content) ? textOrTitle : content;
  prettyPrint(title, text, color);
};
var success = function success(textOrTitle) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#67C23A';
  var title = isEmpty(content) ? 'Success ' : textOrTitle;
  var text = isEmpty(content) ? textOrTitle : content;
  prettyPrint(title, text, color);
};
var table = function table() {
  var data = [{
    id: 1,
    name: 'Alice',
    age: 25
  }, {
    id: 2,
    name: 'Bob',
    age: 30
  }, {
    id: 3,
    name: 'Charlie',
    age: 35
  }];
  console.log('%c id%c name%c age', 'color: white; background-color: black; padding: 2px 10px;', 'color: white; background-color: black; padding: 2px 10px;', 'color: white; background-color: black; padding: 2px 10px;');
  data.forEach(function (row) {
    console.log("%c ".concat(row.id, " %c ").concat(row.name, " %c ").concat(row.age, " "), 'color: black; background-color: lightgray; padding: 2px 10px;', 'color: black; background-color: lightgray; padding: 2px 10px;', 'color: black; background-color: lightgray; padding: 2px 10px;');
  });
};
var picture = function picture(url) {
  var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = function () {
    var c = document.createElement('canvas');
    var ctx = c.getContext('2d');
    if (ctx) {
      c.width = img.width;
      c.height = img.height;
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.drawImage(img, 0, 0);
      var dataUri = c.toDataURL('image/png');
      console.log("%c sup?", "font-size: 1px;\n                    padding: ".concat(Math.floor(img.height * scale / 2), "px ").concat(Math.floor(img.width * scale / 2), "px;\n                    background-image: url(").concat(dataUri, ");\n                    background-repeat: no-repeat;\n                    background-size: ").concat(img.width * scale, "px ").concat(img.height * scale, "px;\n                    color: transparent;\n                    "));
    }
  };
  img.src = url;
};

export { error, info, picture, prettyPrint, success, table, warning };
