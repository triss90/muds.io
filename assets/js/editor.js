(function(){

    // Constructor Function
    var muds = function(opts) {
        this.options = Object.assign(muds.defaults, opts);
        this.orignal_input = document.getElementById(opts.selector);
        const editorElement = document.querySelector('#'+opts.selector);
        if (opts.theme === 'dark') {
            editorElement.classList.add('dark');
        } else {
            editorElement.classList.add('light');
        }
        this.menu_style = opts.menuStyle;
        this.menu_custom = opts.menuCustom;
        this.height = opts.height;
        this.text = opts.content;
        this.menu = document.createElement('div');
        this.content = document.createElement('div');
        this.output = document.createElement('div');
        buildMenu(this);
        buildEditor(this);
    };

    // Encode and decode HTML
    window.htmlentities = {
        encode : function(str) {
            let buf = [];
            for (let i=str.length-1;i>=0;i--) {
                buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
            }
            return buf.join('');
        },
        decode : function(str) {
            return str.replace(/&#(\d+);/g, function(match, dec) {
                return String.fromCharCode(dec);
            });
        }
    };


    // Menu Actions
    muds.prototype.enterFullScreen = function(string) {
        const content = this.orignal_input.querySelector('.muds-content');
        const toolbarButton = this.orignal_input.querySelector('.muds-toolbar .muds-item.fullscreen')
        this.orignal_input.querySelector('.muds-content');
        this.orignal_input.style.height = '100vh';
        this.orignal_input.style.width = '100vw';
        this.orignal_input.style.position = 'fixed';
        this.orignal_input.style.top = '0';
        this.orignal_input.style.left = '0';
        this.orignal_input.style.zIndex = '999';
        content.style.height = '100%';
        toolbarButton.setAttribute('onclick', this.orignal_input.id + '.exitFullScreen()');
        toolbarButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>'
    };
    muds.prototype.exitFullScreen = function(string) {
        const content = this.orignal_input.querySelector('.muds-content');
        const toolbarButton = this.orignal_input.querySelector('.muds-toolbar .muds-item.fullscreen');
        this.orignal_input.setAttribute('style', '');
        content.style.height = this.height;
        toolbarButton.setAttribute('onclick', this.orignal_input.id + '.enterFullScreen()');
        toolbarButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>'
    };
    muds.prototype.buttonH1Action = function(string) {
        document.execCommand('formatBlock', false, 'h1');
    };
    muds.prototype.buttonH2Action = function(string) {
        document.execCommand('formatBlock', false, 'h2');
    };
    muds.prototype.buttonH3Action = function(string) {
        document.execCommand('formatBlock', false, 'h3');
    };
    muds.prototype.buttonUnorderedListAction = function(string) {
        document.execCommand('insertUnorderedList', false, '');
    };
    muds.prototype.buttonOrderedListAction = function(string) {
        document.execCommand('insertOrderedList', false, '');
    };
    muds.prototype.buttonUnderlineAction = function(string) {
        document.execCommand('underline', false, '');
    };
    muds.prototype.buttonItalicAction = function(string) {
        document.execCommand('italic', false, '');
    };
    muds.prototype.buttonBoldAction = function(string) {
        document.execCommand('bold', false, '');
    };
    muds.prototype.buttonLinkAction = function(string) {
        const linkURL = prompt('Enter the URL');
        document.execCommand('createLink', false, linkURL);
    };
    muds.prototype.buttonCutAction = function(string) {
        document.execCommand('cut',false,'');
    };
    muds.prototype.buttonCopyAction = function(string) {
        document.execCommand('copy', false, '');
    };
    muds.prototype.buttonUndoAction = function(string) {
        document.execCommand('undo',false,'');
    };
    muds.prototype.buttonRedoAction = function(string) {
        document.execCommand('redo',false,'');
    };
    muds.prototype.buttonChangeColorAction = function(string) {
        const color = prompt('Enter your color in hex ex: #f1f233');
        document.execCommand('foreColor', false, color);
    };
    muds.prototype.buttonGetImageAction = function(string) {
        const editorContent = document.querySelector('.muds-content');
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();
        let dataURI;
        reader.addEventListener(
            'load',
            function() {
                dataURI = reader.result;
                const img = document.createElement('img');
                img.src = dataURI;
                editorContent.appendChild(img);
            },
            false
        );
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    muds.prototype.buttonStrikeThroughAction = function(string) {
        document.execCommand('strikeThrough',false,'');
    };
    muds.prototype.buttonDeleteAction = function(string) {
        document.execCommand('delete',false,'');
    };
    muds.prototype.buttonSelectAllAction = function(string) {
        const editorContent = document.querySelector(".muds-content");
        if (document.activeElement !== editorContent) {
            editorContent.focus();
        }
        document.execCommand('selectAll',false,'');
    };
    muds.prototype.buttonJustifyCenterAction = function(string) {
        document.execCommand('justifyCenter',false,'');
    };
    muds.prototype.buttonJustifyLeftAction = function(string) {
        document.execCommand('justifyLeft',false,'')
    };
    muds.prototype.buttonJustifyRightAction = function(string) {
        document.execCommand('justifyRight',false,'')
    };
    muds.prototype.buttonShowHTMLAction = function(string) {
        const editorContent = document.querySelector(".muds-content");
        const htmlCode = editorContent.innerHTML;
        const myWindow = window.open("", "muds - View HTML", "width=768,height=600");
        myWindow.document.write('<html><head><title>muds - View HTML</title><style>html,body{margin:0;padding:0;}pre{height:100%;}</style></head><body>');
        myWindow.document.write('<pre class="prettyprint">' + htmlentities.encode(htmlCode) + '</pre>');
        myWindow.document.write('<script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script></body></html>');
    };
    muds.prototype.buttonShowTextAction = function(string) {
        const editorContent = document.querySelector(".muds-content");
        const formattedText = editorContent.innerHTML;
        const myWindow = window.open("", "muds - View Text", "width=768,height=600");
        myWindow.document.write('<html><head><title>muds - View Text</title><style>h1,h2{margin:0 0 1rem!important}h3,p{margin:0 0 .5rem!important}body,html{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";color:#333!important;margin:10px;padding:0}h1{font-size:2.5rem!important}h2{font-size:2rem!important}h3{font-size:1.5rem!important}p{font-size:1rem!important}a{color:#61aeee!important}ol,ul{margin-left:1.5rem}</style></head><body>');
        myWindow.document.write(formattedText);
        myWindow.document.write('</body></html>');
    };
    muds.prototype.buttonPrintMeAction = function(string) {
        const editorContent = document.querySelector(".muds-content");
        const formattedText = editorContent.innerHTML;
        const myWindow = window.open("", "muds - Print", "width=768,height=600");
        myWindow.document.write('<html><head><title>muds - Print</title><style>h1,h2{margin:0 0 1rem!important}h3,p{margin:0 0 .5rem!important}body,html{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";color:#333!important;margin:10px;padding:0}h1{font-size:2.5rem!important}h2{font-size:2rem!important}h3{font-size:1.5rem!important}p{font-size:1rem!important}a{color:#61aeee!important}ol,ul{margin-left:1.5rem}</style></head><body>');
        myWindow.document.write(formattedText);
        myWindow.document.write('</body></html>');
        myWindow.document.close();
        myWindow.focus();
        myWindow.print();
        myWindow.close();
    };

    // Menu buttons
    function buttonFullScreen(item) {
        const buttonFullScreen = document.createElement('button');
        buttonFullScreen.classList.add('muds-item','fullscreen');
        buttonFullScreen.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>';
        buttonFullScreen.setAttribute('onclick', item.orignal_input.id + '.enterFullScreen()');
        buttonFullScreen.setAttribute('title', 'Fullscreen');
        item.menu.appendChild(buttonFullScreen);
    }
    function buttonHeader(item) {
        const buttonHeader = document.createElement('div');
        buttonHeader.classList.add('muds-dropdown');
        buttonHeader.innerHTML = '<label><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M5 4v3h5.5v12h3V7H19V4H5z"/></svg></label>' +
            '<ul>' +
            '<li><button class="muds-h1" title="Healine 1" onclick="'+item.orignal_input.id + '.buttonH1Action()'+'">Header 1</button></li>' +
            '<li><button class="muds-h2" title="Healine 2" onclick="'+item.orignal_input.id + '.buttonH2Action()'+'">Header 2</button></li>' +
            '<li><button class="muds-h3" title="Healine 3" onclick="'+item.orignal_input.id + '.buttonH3Action()'+'">Header 3</button></li>' +
            '</ul>';
        item.menu.appendChild(buttonHeader);
    }
    function buttonUnorderedList(item) {
        const buttonUnorderedList = document.createElement('button');
        buttonUnorderedList.classList.add('muds-item');
        buttonUnorderedList.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>';
        buttonUnorderedList.setAttribute('onclick', item.orignal_input.id + '.buttonUnorderedListAction()');
        buttonUnorderedList.setAttribute('title', 'Unordered list');
        item.menu.appendChild(buttonUnorderedList);
    }
    function buttonOrderedList(item) {
        const buttonOrderedList = document.createElement('button');
        buttonOrderedList.classList.add('muds-item');
        buttonOrderedList.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
        buttonOrderedList.setAttribute('onclick', item.orignal_input.id + '.buttonOrderedListAction()');
        buttonOrderedList.setAttribute('title', 'Ordered list');
        item.menu.appendChild(buttonOrderedList);
    }
    function buttonUnderline(item) {
        const buttonUnderline = document.createElement('button');
        buttonUnderline.classList.add('muds-item');
        buttonUnderline.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/></svg>';
        buttonUnderline.setAttribute('onclick', item.orignal_input.id + '.buttonUnderlineAction()');
        buttonUnderline.setAttribute('title', 'Underline');
        item.menu.appendChild(buttonUnderline);
    }
    function buttonItalic(item) {
        const buttonItalic = document.createElement('button');
        buttonItalic.classList.add('muds-item');
        buttonItalic.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"/></svg>';
        buttonItalic.setAttribute('onclick',item.orignal_input.id + '.buttonItalicAction()');
        buttonItalic.setAttribute('title', 'Italic');
        item.menu.appendChild(buttonItalic);
    }
    function buttonBold(item) {
        const buttonBold = document.createElement('button');
        buttonBold.classList.add('muds-item');
        buttonBold.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>';
        buttonBold.setAttribute('onclick',item.orignal_input.id + '.buttonBoldAction()');
        buttonBold.setAttribute('title', 'Bold');
        item.menu.appendChild(buttonBold);
    }
    function buttonLink(item) {
        const buttonLink = document.createElement('button');
        buttonLink.classList.add('muds-item');
        buttonLink.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/></svg>';
        buttonLink.setAttribute('onclick',item.orignal_input.id + '.buttonLinkAction()');
        buttonLink.setAttribute('title', 'Create link');
        item.menu.appendChild(buttonLink);
    }
    function buttonCut(item) {
        const buttonCut = document.createElement('button');
        buttonCut.classList.add('muds-item');
        buttonCut.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19,3L13,9L15,11L22,4V3M12,12.5A0.5,0.5 0 0,1 11.5,12A0.5,0.5 0 0,1 12,11.5A0.5,0.5 0 0,1 12.5,12A0.5,0.5 0 0,1 12,12.5M6,20A2,2 0 0,1 4,18C4,16.89 4.9,16 6,16A2,2 0 0,1 8,18C8,19.11 7.1,20 6,20M6,8A2,2 0 0,1 4,6C4,4.89 4.9,4 6,4A2,2 0 0,1 8,6C8,7.11 7.1,8 6,8M9.64,7.64C9.87,7.14 10,6.59 10,6A4,4 0 0,0 6,2A4,4 0 0,0 2,6A4,4 0 0,0 6,10C6.59,10 7.14,9.87 7.64,9.64L10,12L7.64,14.36C7.14,14.13 6.59,14 6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22A4,4 0 0,0 10,18C10,17.41 9.87,16.86 9.64,16.36L12,14L19,21H22V20L9.64,7.64Z" /></svg>';
        buttonCut.setAttribute('onclick',item.orignal_input.id + '.buttonCutAction()');
        buttonCut.setAttribute('title', 'Cut');
        item.menu.appendChild(buttonCut);
    }
    function buttonCopy(item) {
        const buttonCopy = document.createElement('button');
        buttonCopy.classList.add('muds-item');
        buttonCopy.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"/></svg>';
        buttonCopy.setAttribute('onclick',item.orignal_input.id + '.buttonCopyAction()');
        buttonCopy.setAttribute('title', 'Copy');
        item.menu.appendChild(buttonCopy);
    }
    function buttonUndo(item) {
        const buttonUndo = document.createElement('button');
        buttonUndo.classList.add('muds-item');
        buttonUndo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>';
        buttonUndo.setAttribute('onclick', item.orignal_input.id + '.buttonUndoAction()');
        buttonUndo.setAttribute('title', 'Undo');
        item.menu.appendChild(buttonUndo);
    }
    function buttonRedo(item) {
        const buttonRedo = document.createElement('button');
        buttonRedo.classList.add('muds-item');
        buttonRedo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></svg>';
        buttonRedo.setAttribute('onclick',item.orignal_input.id + '.buttonRedoAction()');
        buttonRedo.setAttribute('title', 'Redo');
        item.menu.appendChild(buttonRedo);
    }
    function buttonChangeColor(item) {
        const buttonChangeColor = document.createElement('button');
        buttonChangeColor.classList.add('muds-item');
        buttonChangeColor.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill-opacity=".36" d="M0 20h24v4H0v-4z"/><path d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z"/></svg>';
        buttonChangeColor.setAttribute('onclick',item.orignal_input.id + '.buttonChangeColorAction()');
        buttonChangeColor.setAttribute('title', 'Text color');
        item.menu.appendChild(buttonChangeColor);
    }
    function buttonGetImage(item) {
        const imageInput = document.createElement('input');
        imageInput.classList.add('muds-item');
        imageInput.setAttribute('type','file');
        imageInput.setAttribute('accept','image/*');
        imageInput.id = 'file';
        imageInput.style.display = 'none';
        imageInput.setAttribute('onchange',item.orignal_input.id + '.buttonGetImageAction()');
        item.menu.appendChild(imageInput);
        const imageLabel = document.createElement('label');
        imageLabel.setAttribute('for','file');
        imageLabel.classList.add('muds-item');
        imageLabel.setAttribute('title', 'Insert image');
        imageLabel.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z"/></svg>';
        item.menu.appendChild(imageLabel);
    }
    function buttonStrikeThrough(item) {
        const buttonStrikeThrough = document.createElement('button');
        buttonStrikeThrough.classList.add('muds-item');
        buttonStrikeThrough.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.24 8.75c-.26-.48-.39-1.03-.39-1.67 0-.61.13-1.16.4-1.67.26-.5.63-.93 1.11-1.29.48-.35 1.05-.63 1.7-.83.66-.19 1.39-.29 2.18-.29.81 0 1.54.11 2.21.34.66.22 1.23.54 1.69.94.47.4.83.88 1.08 1.43s.38 1.15.38 1.81h-3.01c0-.31-.05-.59-.15-.85-.09-.27-.24-.49-.44-.68-.2-.19-.45-.33-.75-.44-.3-.1-.66-.16-1.06-.16-.39 0-.74.04-1.03.13s-.53.21-.72.36c-.19.16-.34.34-.44.55-.1.21-.15.43-.15.66 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25zM21 12v-2H3v2h9.62c.18.07.4.14.55.2.37.17.66.34.87.51s.35.36.43.57c.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53-.19.15-.42.26-.71.35-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42c-.25-.19-.45-.44-.59-.75s-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58s.37.85.65 1.21c.28.35.6.66.98.92.37.26.78.48 1.22.65.44.17.9.3 1.38.39.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79c.46-.34.82-.77 1.07-1.27s.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H21V12z"/></svg>';
        buttonStrikeThrough.setAttribute('onclick',item.orignal_input.id + '.buttonStrikeThroughAction()');
        buttonStrikeThrough.setAttribute('title', 'Strike Through');
        item.menu.appendChild(buttonStrikeThrough);
    }
    function buttonDelete(item) {
        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add('muds-item');
        buttonDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"/></svg>';
        buttonDelete.setAttribute('onclick',item.orignal_input.id + '.buttonDeleteAction()');
        buttonDelete.setAttribute('title', 'Delete');
        item.menu.appendChild(buttonDelete);
    }
    function buttonSelectAll(item) {
        const buttonSelectAll = document.createElement('button');
        buttonSelectAll.classList.add('muds-item');
        buttonSelectAll.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"/></svg>';
        buttonSelectAll.setAttribute('onclick',item.orignal_input.id + '.buttonSelectAllAction()');
        buttonSelectAll.setAttribute('title', 'Select all');
        item.menu.appendChild(buttonSelectAll);
    }
    function buttonJustifyCenter(item) {
        const buttonJustifyCenter = document.createElement('button');
        buttonJustifyCenter.classList.add('muds-item');
        buttonJustifyCenter.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/></svg>';
        buttonJustifyCenter.setAttribute('onclick',item.orignal_input.id + '.buttonJustifyCenterAction()');
        buttonJustifyCenter.setAttribute('title', 'Justify center');
        item.menu.appendChild(buttonJustifyCenter);
    }
    function buttonJustifyLeft(item) {
        const buttonJustifyLeft = document.createElement('button');
        buttonJustifyLeft.classList.add('muds-item');
        buttonJustifyLeft.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></svg>';
        buttonJustifyLeft.setAttribute('onclick',item.orignal_input.id + '.buttonJustifyLeftAction()');
        buttonJustifyLeft.setAttribute('title', 'Justify Left');
        item.menu.appendChild(buttonJustifyLeft);
    }
    function buttonJustifyRight(item) {
        const buttonJustifyRight = document.createElement('button');
        buttonJustifyRight.classList.add('muds-item');
        buttonJustifyRight.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/></svg>';
        buttonJustifyRight.setAttribute('onclick',item.orignal_input.id + '.buttonJustifyRightAction()');
        buttonJustifyRight.setAttribute('title', 'Justify Right');
        item.menu.appendChild(buttonJustifyRight);
    }
    function buttonPrintMe(item) {
        const buttonPrintMe = document.createElement('button');
        buttonPrintMe.classList.add('muds-item');
        buttonPrintMe.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm2-4v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"/><circle cx="18" cy="11.5" r="1"/></svg>';
        buttonPrintMe.setAttribute('onclick',item.orignal_input.id + '.buttonPrintMeAction()');
        buttonPrintMe.setAttribute('title', 'Print');
        item.menu.appendChild(buttonPrintMe);
    }
    function buttonShowHTML(item) {
        const buttonShowHTML = document.createElement('button');
        buttonShowHTML.classList.add('muds-item');
        buttonShowHTML.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>';
        buttonShowHTML.setAttribute('onclick',item.orignal_input.id + '.buttonShowHTMLAction()');
        buttonShowHTML.setAttribute('title', 'Show HTML');
        item.menu.appendChild(buttonShowHTML);
    }
    function buttonShowText(item) {
        const buttonShowText = document.createElement('button');
        buttonShowText.classList.add('muds-item');
        buttonShowText.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/></svg>';
        buttonShowText.setAttribute('onclick',item.orignal_input.id + '.buttonShowTextAction()');
        buttonShowText.setAttribute('title', 'View content');
        item.menu.appendChild(buttonShowText);
    }

    // Build the Menu
    function buildMenu(item) {
        if (item.menu_style === "full" || item.menu_style === undefined ) {
            buttonHeader(item);
            buttonUnderline(item);
            buttonStrikeThrough(item);
            buttonItalic(item);
            buttonBold(item);
            buttonLink(item);
            buttonChangeColor(item);
            buttonGetImage(item);
            buttonUndo(item);
            buttonRedo(item);
            buttonUnorderedList(item);
            buttonOrderedList(item);
            buttonSelectAll(item);
            buttonCopy(item);
            buttonCut(item);
            buttonDelete(item);
            buttonJustifyLeft(item);
            buttonJustifyCenter(item);
            buttonJustifyRight(item);
            buttonPrintMe(item);
            buttonShowHTML(item);
            buttonShowText(item);
            buttonFullScreen(item);
        } else if (item.menu_style === "minimal") {
            buttonUnderline(item);
            buttonStrikeThrough(item);
            buttonItalic(item);
            buttonBold(item);
            buttonLink(item);
            buttonUndo(item);
            buttonRedo(item);
        } else if (item.menu_style === "custom") {
            if (item.menu_custom.includes("header")){buttonHeader(item);}
            if (item.menu_custom.includes("underline")){buttonUnderline(item);}
            if (item.menu_custom.includes("strikeThrough")){buttonStrikeThrough(item);}
            if (item.menu_custom.includes("italic")){buttonItalic(item);}
            if (item.menu_custom.includes("bold")){buttonBold(item);}
            if (item.menu_custom.includes("link")){buttonLink(item);}
            if (item.menu_custom.includes("changeColor")){buttonChangeColor(item);}
            if (item.menu_custom.includes("image")){buttonGetImage(item);}
            if (item.menu_custom.includes("undo")){buttonUndo(item);}
            if (item.menu_custom.includes("redo")){buttonRedo(item);}
            if (item.menu_custom.includes("unorderedList")){buttonUnorderedList(item);}
            if (item.menu_custom.includes("orderedList")){buttonOrderedList(item);}
            if (item.menu_custom.includes("selectAll")){buttonSelectAll(item);}
            if (item.menu_custom.includes("copy")){buttonCopy(item);}
            if (item.menu_custom.includes("cut")){buttonCut(item);}
            if (item.menu_custom.includes("delete")){buttonDelete(item);}
            if (item.menu_custom.includes("justifyLeft")){buttonJustifyLeft(item);}
            if (item.menu_custom.includes("justifyCenter")){buttonJustifyCenter(item);}
            if (item.menu_custom.includes("justifyRight")){buttonJustifyRight(item);}
            if (item.menu_custom.includes("print")){buttonPrintMe(item);}
            if (item.menu_custom.includes("showHTML")){buttonShowHTML(item);}
            if (item.menu_custom.includes("showText")){buttonShowText(item);}
            if (item.menu_custom.includes("fullScreen")){buttonFullScreen(item);}
        }
    }

    // Build the editor
    function buildEditor(editor) {
        const mudsToolElement = editor.menu;
        mudsToolElement.classList.add('muds-toolbar');
        const mudsContentElement = editor.content;
        mudsContentElement.classList.add('muds-content');
        mudsContentElement.setAttribute('contenteditable','true');
        mudsContentElement.style.resize = 'vertical';
        mudsContentElement.style.overflow = 'auto';
        mudsContentElement.style.height = editor.height;
        if (editor.text !== undefined) { mudsContentElement.innerHTML = editor.text; }
        const mudsOutputElement = editor.output;
        mudsOutputElement.classList.add('muds-output');
        editor.orignal_input.appendChild(mudsToolElement);
        editor.orignal_input.appendChild(mudsContentElement);
        editor.orignal_input.appendChild(mudsOutputElement);
    }

    // Attach our defaults for plugin to the plugin itself
    muds.defaults = {
        selector: '',
        menuStyle: 'full', // full, minimal, custom
        menuCustom: [], //'header','underline','strikeThrough','bold','italic','link','changeColor','image','undo','redo','unorderedList','orderedList','selectAll','copy','cut','delete','justifyLeft','justifyCenter','justifyRight','print','showHTML','showText','fullScreen'
        theme: 'light', // light, dark
        content: '',
        height: '100px'
    };

    // make accessible globally
    window.muds = muds;

})();