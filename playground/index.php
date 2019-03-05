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

    <textarea id="editor">adadada
    adadaggg
    Daniel er træls...</textarea>

    <script src="/assets/js/editor.js" ></script>
    <script>
        var editor = new muds({
            selector: 'editor',
            height: '542px',
            theme: "light",
            resize: true,
            keybindings: true,
            menuStyle: 'full',
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