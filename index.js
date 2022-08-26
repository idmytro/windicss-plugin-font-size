const plugin = require('windicss/plugin');
const {generateFontSize} = require('windicss/utils');

function isNumber(value) {
  const n = parseFloat(value);
  return typeof n === 'number' && isFinite(n) && value === n.toString();
}

const globalValues = ['inherit', 'initial', 'unset'];
const stringValues = ['smaller', 'xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large', 'larger'];

module.exports = plugin(function ({ addDynamic, theme }) {
  addDynamic('font', ({ Utility, Style, Property }) => {
    if (Utility.body.indexOf('size-') === -1) return;

    const amount = Utility.amount;
    const fontSizes = theme('fontSize');

    if (Object.keys(fontSizes).includes(amount)) {
      return new Style(Utility.class, generateFontSize(fontSizes[amount])[0]);
    }

    let value = Utility.handler
      .handleSquareBrackets()
      .handleNxl((number) => `${number}rem`)
      .handleSize()
      .value;

    if (amount.endsWith('%') && isNumber(amount.slice(0, -1))) value = amount;

    if (amount === '0' || globalValues.includes(amount) || stringValues.includes(amount)) value = amount;

    if (Utility.raw.startsWith('font-size-$')) value = Utility.handler.handleVariable().value;

    if (value) return new Style(Utility.class, [ new Property('font-size', value) ]);
  });
});
