<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/assets/css/editor.css">
    <title>Playground</title>
</head>
<body>

    <div id="editor"></div>

    <br>

    <div class="muds-toolbar">
        <div class="muds-dropdown table">
            <label><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M5 4v3h5.5v12h3V7H19V4H5z"></path></svg></label>
            <ul>
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
            </ul>
        </div>
    </div>

    <script src="/assets/js/editor.js"></script>
    <script>
        var editor = new muds({
            selector: 'editor',
            height: '342px',
            content: '<h1>Try the MUDS editor today</h1><p>No matter what you\'re building, MUDS has you covered. From content management to email marketing, here are our customers\' most common uses:</p><ul><li>Content Management Systems</li><li>Learning Management Systems</li><li>Customer Relationship Management and marketing automation</li></ul><p>Our team is hard at work, creating and adding new features to take the Javascript web WYSIWYG editing capabilities to the next level.</p>',
            theme: "dark",
            menuStyle: 'custom',
            menuCustom: [
                'header',
                'underline',
                'strikeThrough',
                'bold',
                'italic',
                'link',
                'changeColor',
                'image',
                'undo',
                'redo',
                'unorderedList',
                'orderedList',
                'selectAll',
                'copy',
                'cut',
                'delete',
                'justifyLeft',
                'justifyCenter',
                'justifyRight',
                'print',
                'showHTML',
                'showText',
                'fullScreen'
            ]
        });
    </script>
</body>
</html>