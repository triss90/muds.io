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

    <textarea id="oajbfnoesjf">
       <h2>MUDS v1.4.0 <a href="/download/muds-editor-v1.4.0.zip" download><i class="fa fa-download" aria-hidden="true"></i> Download</a></h2>
                <ul>
                   <li>Refine codeblock style</li>
                    <li>Overhaul of how predefined content works
                        <ul>
                            <li>Implementing textarea for submittable content</li>
                            <li>Adding custom "content subbmit name": <span class="tag">submitName: 'My_Submit_Name'</span></li>
                            <li>Muds should now be initialized with a <span class="tag">textarea</span> and not a <span class="tag">div</span></li>
                            <li>Global Muds variable change from <span class="tag">editor</span> to <span class="tag">muds</span></li>
                        </ul>
                    </li>
                    <li>Adding support for events <ul>
                            <li>Adding <span class="tag">onChange</span> event - <a href="https://muds.io/documentation/events/">docs</a></li>
                        </ul>
                    </li>
                    <li>Fixing a bug where custom height wasn't reapplied when leaving fullscreen</li>
                    <li>Fixing a bug where onChange events would produced errors unless defined</li>
                    <li>Fixing a bug where tab wouldn't insert 4 spaces correctly</li>
                </ul>
    </textarea>

    <script src="/assets/js/editor.js" ></script>
    <script>
        var muds = new muds({
            selector: 'oajbfnoesjf',
            submitName: 'mySubmit',
            height: '542px',
            theme: "light",
            resize: true,
            keybindings: true,
            menuStyle: 'custom',
            tooltips: true,
            onChange: function() {
                console.log('onChange event fired...!');
            },
            menuCustom: [
                'header',
                'fonts',
                'underline',
                'strikeThrough',
                'bold',
                'italic',
                'link',
                'blockquote',
                'code',
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