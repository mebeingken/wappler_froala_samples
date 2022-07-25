// JavaScript Document


exports.parse = async function (options) {
    var HTMLParser = require('node-html-parser');

    let html_string = this.parseRequired(options.html_string, 'string', 'parameter html_string is required.');

    var parsed_html = HTMLParser.parse(html_string);
    console.log(JSON.parse(html_string));

};
