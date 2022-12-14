export default function (tag, options) {
    return Object.assign(document.createElement(tag), options);
  }