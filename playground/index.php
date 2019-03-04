<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/assets/css/editor.css">
    <title>Playground</title>
    <style>
        body {
            padding: 0 10%;
        }
    </style>
</head>
<body>

    <div id="editor"></div>

    <script src="/assets/js/editor.js" ></script>
    <script>
        var editor = new muds({
            selector: 'editor',
            height: '342px',
            content: '<h1>Try the MUDS editor today</h1><p>No matter what you\'re building, <a href="#0">MUDS has you covered</a>. From content management to email marketing, here are our customers\' most common uses:</p><ul><li>Content Management Systems</li><li>Learning Management Systems</li><li>Customer Relationship Management and marketing automation</li></ul><blockquote>Our team is hard at work, creating and adding new features to take the Javascript web WYSIWYG editing capabilities to the next level.</blockquote><br><h2>Initialize the MUDS editor</h2><pre> var editor = new muds({selector: "editor"});</pre>',
            theme: "light",
            resize: true,
            keybindings: true,
            menuStyle: 'custom',
            tooltips: true,
            menuCustom: [
                'code',
                'header',
                'fonts',
                'underline',
                'strikeThrough',
                'bold',
                'italic',
                'link',
                'blockquote',
                'changeColor',
                'image',
                'undo',
                'redo',
                'justification',
                'unorderedList',
                'orderedList',
                'selectAll',
                'copy',
                'cut',
                'delete',
                'justifyLeft',
                'justifyCenter',
                'justifyRight',
                'indent',
                'outdent',
                'print',
                'showHTML',
                'showText',
                'fullScreen'
            ]
        });
    </script>
</body>
</html>