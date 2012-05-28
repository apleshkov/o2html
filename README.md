o2html
======

Creating an html element/string from the config object.

Basic usage
-----------

    var el = $.o2tml({
        tag: 'span',
        html: 'My text'
    });

This is similar to

    var el = $('<span>My text</span>');

Thus you can do:

    $.o2html({ tag: 'span', html: 'My text' }).appendTo('body');

Options:
* `tag` - tag name
* `cls` - class name ('my-class' or 'foo bar')
* `html` - content
* `children` - array of similar configs
* any attribute you want: `width`, `height`, `style`, `alt`, `data-foo`, etc.

Examples
--------

Image:

    $.o2html({
        tag: 'img',
        cls: 'foo bar',
        src: '/path/to/image',
        width: 100,
        height: 50,
        alt: 'My text',
        'data-foo': 'foo'
    });

    // similar to

    $('<img class="foo bar" src="/path/to/image" width="100" height="50" alt="My text" data-foo="foo"/>');

Children:

    $.o2html({
        tag: 'div',
        cls: 'foo bar',
        children: [
            {
                tag: 'div',
                style: 'display: block',
                html: '<span>My text</span>' // if you don't want to use another `children` construction
            },
            {
                tag: 'div',
                children: [
                    {
                        tag: 'span',
                        html: 'quux'
                    }
                ]
            }
        ]
    });

Want just a **string**?

    $.o2html({ tag: 'span', html: 'foo' }, true); // <span>foo</span>

License
=======

This project is distributed under the MIT license. Please keep the exisisting headers.