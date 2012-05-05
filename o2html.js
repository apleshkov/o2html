/*global define, jQuery */
/*jslint sloppy: true */

(function (define) {

    'use strict';

    var emptyTags = /^(?:br|frame|hr|img|input|link|meta|range|spacer|wbr|area|param|col)/i,

        isArray = Array.isArray || function (v) { return Object.prototype.toString.apply(v) === '[object Array]'; };

    function createHtml(input) {
        var html, i, len, tag, val;
        if (typeof input === 'string') {
            return input;
        }
        if (isArray(input)) {
            html = '';
            for (i = 0, len = input.length; i < len; i += 1) {
                html += createHtml(input[i]);
            }
            return html;
        }
        tag = input.tag;
        html = '<' + tag;
        for (i in input) {
            if (input.hasOwnProperty(i)) {
                val = input[i];
                if (i !== 'tag' && i !== 'children' && i !== 'html') {
                    html += ' ' + (i === 'cls' ? 'class' : i) + '="' + val + '"';
                }
            }
        }
        if (emptyTags.test(tag)) {
            html += '/>';
        } else {
            html += '>';
            if (input.children) {
                html += createHtml(input.children);
            } else if (input.html) {
                html += input.html;
            }
            html += '</' + tag + '>';
        }
        return html;
    }

    if (typeof jQuery === 'function') {
        jQuery.fn.o2html = function (input, returnString) {
            if (returnString === true) {
                return createHtml(input);
            }
            return jQuery(createHtml(input));
        };
        return;
    }

    define(function () {

        return createHtml;

    });

}(typeof define === 'function' ? define : function () {}));