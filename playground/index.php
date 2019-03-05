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

    <textarea id="editor">
        <h1>adadada</h1>
        adadaggg
        <ul>
            <li>Daniel er træls...</li>
            <li>Daniel er MEGA træls...</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque cupiditate, facere fugiat illum laboriosam libero magni nisi porro praesentium quaerat quas ratione reiciendis soluta tenetur voluptatem voluptatibus. Mollitia, totam.</p>
        <h3>This is a test</h3>
        <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque cupiditate, facere fugiat illum laboriosam libero magni nisi porro praesentium quaerat quas ratione reiciendis soluta tenetur voluptatem voluptatibus. Mollitia, totam.</blockquote>
    </textarea>

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