import { createElement } from './react/index.js';

const element = ['h1','p','div','img','h2','h3','article','nav','footer','section','header'];
const styled = {};

function buildStyles(strings, dynamicValues, props) {
  let style = strings.slice();
  dynamicValues.forEach((value, index) => {
    style[index] += value(props);
  });
  return style.join('');
}

element.forEach((tag) => {
  styled[tag] = function (strings, ...dynamicValues) {
    return function (props, content) {
      const style = buildStyles(strings, dynamicValues, props);
      return createElement(tag, {...props, style}, content);
    }
  }
});

export default styled