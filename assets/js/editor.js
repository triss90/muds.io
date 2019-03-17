(function(){

    // Load settings and run Muds Editor
    var muds = function(opts) {

        // Merge default options with user options
        function merge_options(obj1,obj2) {
            var obj3 = {};
            var attrname;
            for (attrname in obj1) { obj3[attrname] = obj1[attrname]; }
            for (attrname in obj2) { obj3[attrname] = obj2[attrname]; }
            return obj3;
        }
        this.options = merge_options(muds.defaults,opts);

        // Set language
        this.langDefault = muds.langDefault;
        if (Object.keys(this.langDefault).indexOf(this.options.language) === -1) {
            this.options.language = 'en-US';
        }

        // Assign options to object
        this.original_input = document.getElementById(opts.selector);
        this.original_content = this.original_input.textContent;
        this.menu_style = opts.menuStyle;
        this.menu_custom = opts.menuCustom;
        this.height = opts.height;
        this.resize = opts.resize;
        this.tooltips = opts.tooltips;
        this.keybindings = opts.keybindings;
        this.theme = opts.theme;
        this.selector = opts.selector;
        this.onChange = opts.onChange;
        this.content_submit = opts.submitName;
        this.placeholder = opts.placeholder;
        this.character_count = opts.characterCount;
        this.required = opts.required;
        this.editedEditorHeight;

        // Set default modifier button
        if (window.navigator.userAgent.indexOf("Mac") != -1) {
            this.osModifier = "CMD";
        } else {
            this.osModifier = "CTRL";
        }

        // Create editor elements
        this.menu = document.createElement('div');
        this.content = document.createElement('div');
        this.wrapper = document.createElement('div');

        // Create and hide textarea element
        this.contentSubmittable = document.createElement('textarea');
        this.contentSubmittable.style.display = "none";
        this.contentSubmittable.style.opacity = "0";
        this.contentSubmittable.style.height = "0";

        // Build Menu
        buildMenu(this);

        //Build Editor
        buildEditor(this);
    };

    // Menu Actions
    muds.prototype.enterFullScreen = function(string) {
        var editObj;
        if (string) {
            editObj = string;
        } else {
            editObj = this;
        }
        editObj.editedEditorHeight = editObj.wrapper.style.height;
        const toolbarButton = editObj.wrapper.querySelector('.muds-toolbar .muds-item.fullscreen');
        editObj.wrapper.style.height = '100vh';
        editObj.wrapper.style.width = '100vw';
        editObj.wrapper.style.position = 'fixed';
        editObj.wrapper.style.top = '0';
        editObj.wrapper.style.left = '0';
        editObj.wrapper.style.zIndex = '999';
        editObj.wrapper.classList.add('fullscreen');
        toolbarButton.setAttribute('onclick', 'muds.exitFullScreen()');
        toolbarButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>'
    };
    muds.prototype.exitFullScreen = function(string) {
        var editObj;
        if (string) {
            editObj = string;
        } else {
            editObj = this;
        }
        const toolbarButton = editObj.wrapper.querySelector('.muds-toolbar .muds-item.fullscreen');
        editObj.wrapper.setAttribute('style', '');
        editObj.wrapper.style.position = 'relative';
        editObj.wrapper.classList.remove('fullscreen');
        editObj.wrapper.style.height = editObj.editedEditorHeight;
        toolbarButton.setAttribute('onclick', 'muds.enterFullScreen()');
        toolbarButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>'
    };

    muds.prototype.buttonBodyTextAction = function() {
        document.execCommand('formatBlock', false, 'p');
    };
    muds.prototype.buttonBlockquoteAction = function() {
        document.execCommand('formatBlock', false, 'blockquote');
        const quote = window.getSelection().focusNode.parentNode;
        quote.classList.add('muds-quote');
    };
    muds.prototype.buttonCodeBlockAction = function() {
        document.execCommand('formatBlock', false, 'pre');
    };
    muds.prototype.buttonH1Action = function() {
        document.execCommand('formatBlock', false, 'h1');
    };
    muds.prototype.buttonH2Action = function() {
        document.execCommand('formatBlock', false, 'h2');
    };
    muds.prototype.buttonH3Action = function() {
        document.execCommand('formatBlock', false, 'h3');
    };

    muds.prototype.buttonFontDefaultAction = function() {
        document.execCommand('fontName', false, '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"');
    };
    muds.prototype.buttonFontArialAction = function() {
        document.execCommand('fontName', false, 'Arial, Helvetica, sans-serif');
    };
    muds.prototype.buttonFontArialBlackAction = function() {
        document.execCommand('fontName', false, '"Arial Black", Gadget, sans-serif');
    };
    muds.prototype.buttonFontGeorgiaAction = function() {
        document.execCommand('fontName', false, 'Georgia, serif');
    };
    muds.prototype.buttonFontPalatinoAction = function() {
        document.execCommand('fontName', false, '"Palatino Linotype", "Book Antiqua", Palatino, serif');
    };
    muds.prototype.buttonFontTimesNewRomanAction = function() {
        document.execCommand('fontName', false, '"Times New Roman", Times, serif');
    };
    muds.prototype.buttonFontComicSansAction = function() {
        document.execCommand('fontName', false, '"Comic Sans MS", cursive, sans-serif');
    };
    muds.prototype.buttonFontImpactAction = function() {
        document.execCommand('fontName', false, 'Impact, Charcoal, sans-serif');
    };
    muds.prototype.buttonFontLucidaSansUnicodeAction = function() {
        document.execCommand('fontName', false, '"Lucida Sans Unicode", "Lucida Grande", sans-serif');
    };
    muds.prototype.buttonFontLucidaConsoleAction = function() {
        document.execCommand('fontName', false, '"Lucida Console", Monaco, monospace');
    };
    muds.prototype.buttonFontTahamoAction = function() {
        document.execCommand('fontName', false, 'Tahoma, Geneva, sans-serif');
    };
    muds.prototype.buttonFontTrebuchetAction = function() {
        document.execCommand('fontName', false, '"Trebuchet MS", Helvetica, sans-serif');
    };
    muds.prototype.buttonFontVerdanaAction = function() {
        document.execCommand('fontName', false, 'Verdana, Geneva, sans-serif');
    };
    muds.prototype.buttonFontCourierNewAction = function() {
        document.execCommand('fontName', false, '"Courier New", Courier, monospace');
    };

    muds.prototype.buttonUnorderedListAction = function() {
        document.execCommand('insertUnorderedList', false, '');
    };
    muds.prototype.buttonOrderedListAction = function() {
        document.execCommand('insertOrderedList', false, '');
    };

    muds.prototype.buttonUnderlineAction = function() {
        document.execCommand('underline', false, '');
    };
    muds.prototype.buttonItalicAction = function() {
        document.execCommand('italic', false, '');
    };
    muds.prototype.buttonBoldAction = function() {
        document.execCommand('bold', false, '');
    };
    muds.prototype.buttonStrikeThroughAction = function() {
        document.execCommand('strikeThrough',false,'');
    };
    muds.prototype.buttonLinkAction = function() {
        const selectedElement = window.getSelection().focusNode.parentElement;
        if (selectedElement.tagName === "A") {
            document.execCommand('unlink', false, '');
        } else {
            const linkURL = prompt('Enter the URL');
            document.execCommand('createLink', false, linkURL);
        }
    };

    muds.prototype.buttonCutAction = function() {
        document.execCommand('cut',false,'');
    };
    muds.prototype.buttonCopyAction = function() {
        document.execCommand('copy', false, '');
    };

    muds.prototype.buttonUndoAction = function() {
        document.execCommand('undo',false,'');
    };
    muds.prototype.buttonRedoAction = function() {
        document.execCommand('redo',false,'');
    };

    muds.prototype.buttonChangeColorAction = function() {
        const color = prompt('Enter your color in hex ex: #f1f233');
        document.execCommand('foreColor', false, color);
    };
    muds.prototype.buttonGetImageAction = function() {
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
    muds.prototype.buttonDeleteAction = function() {
        document.execCommand('delete',false,'');
    };
    muds.prototype.buttonSelectAllAction = function() {
        const editorContent = document.querySelector(".muds-content");
        if (document.activeElement !== editorContent) {
            editorContent.focus();
        }
        document.execCommand('selectAll',false,'');
    };

    muds.prototype.buttonJustifyCenterAction = function() {
        document.execCommand('justifyCenter',false,'');
    };
    muds.prototype.buttonJustifyLeftAction = function() {
        document.execCommand('justifyLeft',false,'');
    };
    muds.prototype.buttonJustifyRightAction = function() {
        document.execCommand('justifyRight',false,'')
    };
    muds.prototype.buttonIndentAction = function() {
        document.execCommand('indent',false,'')
    };
    muds.prototype.buttonOutdentAction = function() {
        document.execCommand('outdent',false,'')
    };

    muds.prototype.buttonShowHTMLAction = function() {
        // Encode and decode HTML
        const htmlentities = {
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
        const editorContent = document.querySelector(".muds-content");
        const HTMLButton = document.querySelector(".show-html");
        const menuButtons = document.querySelectorAll('.muds-item');
        const htmlCode = editorContent.innerHTML;
        const htmlCodeEncoded = htmlentities.encode(htmlCode);
        if (HTMLButton.classList.contains('active') === false) {
            editorContent.innerHTML ='<pre style="margin:-10px!important;width:calc(100% + 20px);height:calc(100% + 20px);">'+htmlCodeEncoded+'</pre>';
            for (let i = 0; i < menuButtons.length; ++i) {
                if (menuButtons[i].classList.contains('show-html')) {
                    menuButtons[i].classList.add('active');
                } else {
                    menuButtons[i].classList.add('disabled');
                    menuButtons[i].disabled = true;
                }
            }
        } else if (HTMLButton.classList.contains('active') === true){
            editorContent.innerHTML = editorContent.textContent;
            for (let i = 0; i < menuButtons.length; ++i) {
                if (menuButtons[i].classList.contains('show-html')) {
                    menuButtons[i].classList.remove('active');
                } else {
                    menuButtons[i].classList.remove('disabled');
                    menuButtons[i].disabled = false;
                }
            }
        }
    };
    muds.prototype.buttonShowTextAction = function() {
        const editorContent = document.querySelector(".muds-content");
        const formattedText = editorContent.innerHTML;
        const myWindow = window.open("", "muds - View Text", "width=768,height=600");
        myWindow.document.write('<html><head><title>muds - View Text</title><style>h1,h2{margin:0 0 1rem!important;font-weight:700!important}h1,h2,h3{font-weight:700!important}h3,p{margin:0 0 .5rem!important}body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}h1{font-size:2.5rem!important}h2{font-size:2rem!important}h3{font-size:1.5rem!important}.muds-quote,p{font-size:1rem!important}p{font-weight:400!important}a{color:#61aeee!important}ol,ul{margin-left:1.5rem!important}.muds-quote{margin:1rem 3rem!important;font-style:italic!important;color:#555!important;padding:1.2em 30px 1.2em 50px!important;border-left:8px solid #61aeee!important;line-height:1.6!important;position:relative!important;background:#EDEDED!important}.muds-quote::before{font-family:Arial!important;content:"\\201C"!important;color:#61aeee!important;font-size:4em!important;position:absolute!important;left:10px!important;top:-10px!important}</style></head><body>');
        myWindow.document.write(formattedText);
        myWindow.document.write('</body></html>');
    };
    muds.prototype.buttonPrintMeAction = function() {
        const editorContent = document.querySelector(".muds-content");
        const formattedText = editorContent.innerHTML;
        const myWindow = window.open("", "muds - Print", "width=768,height=600");
        myWindow.document.write('<html><head><title>muds - Print</title><style>h1,h2{margin:0 0 1rem!important;font-weight:700!important}h1,h2,h3{font-weight:700!important}h3,p{margin:0 0 .5rem!important}body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}h1{font-size:2.5rem!important}h2{font-size:2rem!important}h3{font-size:1.5rem!important}.muds-quote,p{font-size:1rem!important}p{font-weight:400!important}a{color:#61aeee!important}ol,ul{margin-left:1.5rem!important}.muds-quote{margin:1rem 3rem!important;font-style:italic!important;color:#555!important;padding:1.2em 30px 1.2em 50px!important;border-left:8px solid #61aeee!important;line-height:1.6!important;position:relative!important;background:#EDEDED!important}.muds-quote::before{font-family:Arial!important;content:"\\201C"!important;color:#61aeee!important;font-size:4em!important;position:absolute!important;left:10px!important;top:-10px!important}</style></head><body>');
        myWindow.document.write(formattedText);
        myWindow.document.write('</body></html>');
        myWindow.document.close();
        myWindow.focus();
        myWindow.print();
        myWindow.close();
    };

    // Menu buttons
    function buttonSeparator(item) {
        const buttonSeparator = document.createElement('span');
        buttonSeparator.classList.add('muds-separator');
        item.menu.appendChild(buttonSeparator);
    }
    function buttonFullScreen(item) {
        const buttonFullScreen = document.createElement('button');
        buttonFullScreen.classList.add('muds-item','fullscreen');
        buttonFullScreen.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>';
        buttonFullScreen.setAttribute('onclick', 'muds.enterFullScreen()');
        buttonFullScreen.setAttribute('tabindex', '-1');
        buttonFullScreen.setAttribute('type', 'button');
        buttonFullScreen.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.functions.fullscreen+' ('+item.osModifier+'+'+item.langDefault[item.options.language].buttons.keybindings.enter+')');
        item.menu.appendChild(buttonFullScreen);
    }
    function buttonHeader(item) {
        const buttonHeader = document.createElement('div');
        buttonHeader.classList.add('muds-item');
        buttonHeader.classList.add('muds-dropdown');
        buttonHeader.classList.add('headers');
        buttonHeader.innerHTML = '<label><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M5 4v3h5.5v12h3V7H19V4H5z"/></svg></label>' +
            '<ul>' +
            '<li><button type="button" class="muds-item dropped muds-h1" tabindex="-1" data-tooltip="'+item.langDefault[item.options.language].buttons.formatting.h1+' ('+item.osModifier+'+1)" onclick="'+'muds.buttonH1Action()'+'">'+item.langDefault[item.options.language].buttons.formatting.h1+'</button></li>' +
            '<li><button type="button" class="muds-item dropped muds-h2" tabindex="-1" data-tooltip="'+item.langDefault[item.options.language].buttons.formatting.h2+'  ('+item.osModifier+'+2)" onclick="'+'muds.buttonH2Action()'+'">'+item.langDefault[item.options.language].buttons.formatting.h2+'</button></li>' +
            '<li><button type="button" class="muds-item dropped muds-h3" tabindex="-1" data-tooltip="'+item.langDefault[item.options.language].buttons.formatting.h3+'  ('+item.osModifier+'+3)" onclick="'+'muds.buttonH3Action()'+'">'+item.langDefault[item.options.language].buttons.formatting.h3+'</button></li>' +
            '<li><button type="button" class="muds-item dropped muds-body" tabindex="-1" data-tooltip="'+item.langDefault[item.options.language].buttons.formatting.body+'  ('+item.osModifier+'+0)" onclick="'+'muds.buttonBodyTextAction()'+'">'+item.langDefault[item.options.language].buttons.formatting.body+'</button></li>' +
            '<li><button type="button" class="muds-item dropped muds-blockquote" tabindex="-1" data-tooltip="'+item.langDefault[item.options.language].buttons.formatting.blockquote+'  (shift+'+item.osModifier+'+B)" onclick="'+'muds.buttonBlockquoteAction()'+'">'+item.langDefault[item.options.language].buttons.formatting.blockquote+'</button></li>' +
            '<li><button type="button" class="muds-item dropped muds-code" tabindex="-1" data-tooltip="'+item.langDefault[item.options.language].buttons.formatting.code+' " onclick="'+'muds.buttonCodeBlockAction()'+'">'+item.langDefault[item.options.language].buttons.formatting.code+'</button></li>' +
            '</ul>';
        item.menu.appendChild(buttonHeader);
    }
    function buttonFonts(item) {
        const buttonFonts = document.createElement('div');
        buttonFonts.classList.add('muds-item');
        buttonFonts.classList.add('muds-dropdown');
        buttonFonts.classList.add('fonts');
        buttonFonts.innerHTML = '<label><svg baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"/></svg>\n</label>' +
            '<ul>' +
            '<div class="wrapper">' +
            '<li><button type="button" tabindex="-1" class="font-arial" title="Arial" onclick="'+'muds.buttonFontArialAction()'+'">Arial</button></li>' +
            '<li><button type="button" tabindex="-1" class="font-arial-black" title="Arial Black" onclick="'+'muds.buttonFontArialBlackAction()'+'">Arial Black</button></li>' +
            '<li><button type="button" tabindex="-1" class="font-comic-sans" title="Comic Sans" onclick="'+'muds.buttonFontComicSansAction()'+'">Comic Sans</button></li>' +
            '<li><button type="button" tabindex="-1" class="font-courier-new" title="Courier New" onclick="'+'muds.buttonFontCourierNewAction()'+'">Courier New</button></li>' +
            '<li><button type="button" tabindex="-1" class="font-georgia" title="Georgia" onclick="'+'muds.buttonFontGeorgiaAction()'+'">Georgia</button></li>' +
            '<li><button type="button" tabindex="-1" class="font-impact" title="Georgia" onclick="'+'muds.buttonFontImpactAction()'+'">Impact</button></li>' +
            '<li><button type="button" tabindex="-1" class="font-lucida-console" title="Lucida Console" onclick="'+'muds.buttonFontLucidaConsoleAction()'+'">Lucida Console</button></li>' +
            '<li><button type="button" tabindex="-1" class="font-lucida-sans-unicode" title="Lucida Sans Unicode" onclick="'+'muds.buttonFontLucidaSansUnicodeAction()'+'">Lucida Sans Unicode</button></li>' +
            '<li><button type="button" tabindex="-1" class="font-palatino" title="Palatino" onclick="'+'muds.buttonFontPalatinoAction()'+'">Palatino</button></li>' +
            '<li><button type="button" tabindex="-1" class="font-default" title="Default" onclick="'+'muds.buttonFontDefaultAction()'+'">System Default</button></li>' +
            '<li><button type="button" tabindex="-1" class="font-tahoma" title="Tahoma" onclick="'+'muds.buttonFontTahamoAction()'+'">Tahoma</button></li>' +
            '<li><button type="button" tabindex="-1" class="font-times-new-roman" title="Times New Roman" onclick="'+'muds.buttonFontTimesNewRomanAction()'+'">Times New Roman</button></li>' +
            '<li><button type="button" tabindex="-1" class="font-trebuchet" title="Trehuchet MS" onclick="'+'muds.buttonFontTrebuchetAction()'+'">Trebuchet MS</button></li>' +
            '<li><button type="button" tabindex="-1" class="font-verdana" title="Verdana" onclick="'+'muds.buttonFontVerdanaAction()'+'">Verdana</button></li>' +
            '</div>' +
            '</ul>';
        item.menu.appendChild(buttonFonts);
    }
    function buttonUnorderedList(item) {
        const buttonUnorderedList = document.createElement('button');
        buttonUnorderedList.classList.add('muds-item');
        buttonUnorderedList.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>';
        buttonUnorderedList.setAttribute('onclick', 'muds.buttonUnorderedListAction()');
        buttonUnorderedList.setAttribute('type', 'button');
        buttonUnorderedList.setAttribute('tabindex', '-1');
        buttonUnorderedList.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.list.unordered+' ('+item.osModifier+'+.)');
        item.menu.appendChild(buttonUnorderedList);
    }
    function buttonOrderedList(item) {
        const buttonOrderedList = document.createElement('button');
        buttonOrderedList.classList.add('muds-item');
        buttonOrderedList.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
        buttonOrderedList.setAttribute('onclick', 'muds.buttonOrderedListAction()');
        buttonOrderedList.setAttribute('type', 'button');
        buttonOrderedList.setAttribute('tabindex', '-1');
        buttonOrderedList.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.list.ordered+' ('+item.osModifier+'+,)');
        item.menu.appendChild(buttonOrderedList);
    }
    function buttonUnderline(item) {
        const buttonUnderline = document.createElement('button');
        buttonUnderline.classList.add('muds-item');
        buttonUnderline.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/></svg>';
        buttonUnderline.setAttribute('onclick', 'muds.buttonUnderlineAction()');
        buttonUnderline.setAttribute('type', 'button');
        buttonUnderline.setAttribute('tabindex', '-1');
        buttonUnderline.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.formatting.underline+' ('+item.osModifier+'+U)');
        item.menu.appendChild(buttonUnderline);
    }
    function buttonItalic(item) {
        const buttonItalic = document.createElement('button');
        buttonItalic.classList.add('muds-item');
        buttonItalic.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"/></svg>';
        buttonItalic.setAttribute('onclick','muds.buttonItalicAction()');
        buttonItalic.setAttribute('type', 'button');
        buttonItalic.setAttribute('tabindex', '-1');
        buttonItalic.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.formatting.italic+' ('+item.osModifier+'+I)');
        item.menu.appendChild(buttonItalic);
    }
    function buttonBlockquote(item) {
        const buttonBlockquote = document.createElement('button');
        buttonBlockquote.classList.add('muds-item');
        buttonBlockquote.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
        buttonBlockquote.setAttribute('onclick','muds.buttonBlockquoteAction()');
        buttonBlockquote.setAttribute('type', 'button');
        buttonBlockquote.setAttribute('tabindex', '-1');
        buttonBlockquote.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.formatting.blockquote+' (SHIFT+'+item.osModifier+'+B)');
        item.menu.appendChild(buttonBlockquote);
    }
    function buttonCodeBlock(item) {
        const buttonCodeBlock = document.createElement('button');
        buttonCodeBlock.classList.add('muds-item');
        buttonCodeBlock.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>';
        buttonCodeBlock.setAttribute('onclick','muds.buttonCodeBlockAction()');
        buttonCodeBlock.setAttribute('type', 'button');
        buttonCodeBlock.setAttribute('tabindex', '-1');
        buttonCodeBlock.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.formatting.code);
        item.menu.appendChild(buttonCodeBlock);
    }
    function buttonBold(item) {
        const buttonBold = document.createElement('button');
        buttonBold.classList.add('muds-item');
        buttonBold.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>';
        buttonBold.setAttribute('onclick','muds.buttonBoldAction()');
        buttonBold.setAttribute('type', 'button');
        buttonBold.setAttribute('tabindex', '-1');
        buttonBold.setAttribute('unselectable', 'on');
        buttonBold.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.formatting.bold+' ('+item.osModifier+'+B)');
        item.menu.appendChild(buttonBold);
    }
    function buttonLink(item) {
        const buttonLink = document.createElement('button');
        buttonLink.classList.add('muds-item');
        buttonLink.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/></svg>';
        buttonLink.setAttribute('onclick','muds.buttonLinkAction()');
        buttonLink.setAttribute('type', 'button');
        buttonLink.setAttribute('tabindex', '-1');
        buttonLink.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.formatting.link+' ('+item.osModifier+'+L)');
        item.menu.appendChild(buttonLink);
    }
    function buttonCut(item) {
        const buttonCut = document.createElement('button');
        buttonCut.classList.add('muds-item');
        buttonCut.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19,3L13,9L15,11L22,4V3M12,12.5A0.5,0.5 0 0,1 11.5,12A0.5,0.5 0 0,1 12,11.5A0.5,0.5 0 0,1 12.5,12A0.5,0.5 0 0,1 12,12.5M6,20A2,2 0 0,1 4,18C4,16.89 4.9,16 6,16A2,2 0 0,1 8,18C8,19.11 7.1,20 6,20M6,8A2,2 0 0,1 4,6C4,4.89 4.9,4 6,4A2,2 0 0,1 8,6C8,7.11 7.1,8 6,8M9.64,7.64C9.87,7.14 10,6.59 10,6A4,4 0 0,0 6,2A4,4 0 0,0 2,6A4,4 0 0,0 6,10C6.59,10 7.14,9.87 7.64,9.64L10,12L7.64,14.36C7.14,14.13 6.59,14 6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22A4,4 0 0,0 10,18C10,17.41 9.87,16.86 9.64,16.36L12,14L19,21H22V20L9.64,7.64Z" /></svg>';
        buttonCut.setAttribute('onclick','muds.buttonCutAction()');
        buttonCut.setAttribute('type', 'button');
        buttonCut.setAttribute('tabindex', '-1');
        buttonCut.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.functions.cut+' ('+item.osModifier+'+X)');
        item.menu.appendChild(buttonCut);
    }
    function buttonCopy(item) {
        const buttonCopy = document.createElement('button');
        buttonCopy.classList.add('muds-item');
        buttonCopy.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"/></svg>';
        buttonCopy.setAttribute('onclick','muds.buttonCopyAction()');
        buttonCopy.setAttribute('type', 'button');
        buttonCopy.setAttribute('tabindex', '-1');
        buttonCopy.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.functions.copy+' ('+item.osModifier+'+C)');
        item.menu.appendChild(buttonCopy);
    }
    function buttonUndo(item) {
        const buttonUndo = document.createElement('button');
        buttonUndo.classList.add('muds-item');
        buttonUndo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>';
        buttonUndo.setAttribute('onclick', 'muds.buttonUndoAction()');
        buttonUndo.setAttribute('type', 'button');
        buttonUndo.setAttribute('tabindex', '-1');
        buttonUndo.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.functions.undo+' ('+item.osModifier+'+Z)');
        item.menu.appendChild(buttonUndo);
    }
    function buttonRedo(item) {
        const buttonRedo = document.createElement('button');
        buttonRedo.classList.add('muds-item');
        buttonRedo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></svg>';
        buttonRedo.setAttribute('onclick','muds.buttonRedoAction()');
        buttonRedo.setAttribute('type', 'button');
        buttonRedo.setAttribute('tabindex', '-1');
        buttonRedo.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.functions.redo+' (SHIFT+'+item.osModifier+'+Z)');
        item.menu.appendChild(buttonRedo);
    }
    function buttonChangeColor(item) {
        const buttonChangeColor = document.createElement('button');
        buttonChangeColor.classList.add('muds-item');
        buttonChangeColor.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill-opacity=".36" d="M0 20h24v4H0v-4z"/><path d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z"/></svg>';
        buttonChangeColor.setAttribute('onclick','muds.buttonChangeColorAction()');
        buttonChangeColor.setAttribute('type', 'button');
        buttonChangeColor.setAttribute('tabindex', '-1');
        buttonChangeColor.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.functions.textColor+' (SHIFT+'+item.osModifier+'+C)');
        item.menu.appendChild(buttonChangeColor);
    }
    function buttonGetImage(item) {
        const imageInput = document.createElement('input');
        imageInput.classList.add('muds-item');
        imageInput.setAttribute('type','file');
        imageInput.setAttribute('accept','image/*');
        imageInput.id = 'file';
        imageInput.style.display = 'none';
        imageInput.setAttribute('tabindex', '-1');
        imageInput.setAttribute('onchange','muds.buttonGetImageAction()');
        item.menu.appendChild(imageInput);
        const imageLabel = document.createElement('label');
        imageLabel.setAttribute('for','file');
        imageLabel.classList.add('muds-item');
        imageLabel.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.functions.image);
        imageLabel.setAttribute('type', 'button');
        imageLabel.setAttribute('tabindex', '-1');
        imageLabel.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z"/></svg>';
        item.menu.appendChild(imageLabel);
    }
    function buttonStrikeThrough(item) {
        const buttonStrikeThrough = document.createElement('button');
        buttonStrikeThrough.classList.add('muds-item');
        buttonStrikeThrough.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.24 8.75c-.26-.48-.39-1.03-.39-1.67 0-.61.13-1.16.4-1.67.26-.5.63-.93 1.11-1.29.48-.35 1.05-.63 1.7-.83.66-.19 1.39-.29 2.18-.29.81 0 1.54.11 2.21.34.66.22 1.23.54 1.69.94.47.4.83.88 1.08 1.43s.38 1.15.38 1.81h-3.01c0-.31-.05-.59-.15-.85-.09-.27-.24-.49-.44-.68-.2-.19-.45-.33-.75-.44-.3-.1-.66-.16-1.06-.16-.39 0-.74.04-1.03.13s-.53.21-.72.36c-.19.16-.34.34-.44.55-.1.21-.15.43-.15.66 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25zM21 12v-2H3v2h9.62c.18.07.4.14.55.2.37.17.66.34.87.51s.35.36.43.57c.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53-.19.15-.42.26-.71.35-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42c-.25-.19-.45-.44-.59-.75s-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58s.37.85.65 1.21c.28.35.6.66.98.92.37.26.78.48 1.22.65.44.17.9.3 1.38.39.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79c.46-.34.82-.77 1.07-1.27s.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H21V12z"/></svg>';
        buttonStrikeThrough.setAttribute('onclick','muds.buttonStrikeThroughAction()');
        buttonStrikeThrough.setAttribute('type', 'button');
        buttonStrikeThrough.setAttribute('tabindex', '-1');
        buttonStrikeThrough.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.formatting.strikeThrough+' ('+item.osModifier+'+S)');
        item.menu.appendChild(buttonStrikeThrough);
    }
    function buttonDelete(item) {
        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add('muds-item');
        buttonDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"/></svg>';
        buttonDelete.setAttribute('onclick','muds.buttonDeleteAction()');
        buttonDelete.setAttribute('type', 'button');
        buttonDelete.setAttribute('tabindex', '-1');
        buttonDelete.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.functions.delete+' (DEL)');
        item.menu.appendChild(buttonDelete);
    }
    function buttonSelectAll(item) {
        const buttonSelectAll = document.createElement('button');
        buttonSelectAll.classList.add('muds-item');
        buttonSelectAll.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"/></svg>';
        buttonSelectAll.setAttribute('onclick','muds.buttonSelectAllAction()');
        buttonSelectAll.setAttribute('type', 'button');
        buttonSelectAll.setAttribute('tabindex', '-1');
        buttonSelectAll.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.functions.selectAll+' ('+item.osModifier+'+A)');
        item.menu.appendChild(buttonSelectAll);
    }
    function buttonJustification(item) {
        const buttonJustification = document.createElement('div');
        buttonJustification.classList.add('muds-item');
        buttonJustification.classList.add('muds-dropdown');
        buttonJustification.classList.add('justification');
        buttonJustification.innerHTML = '<label><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></svg></label>' +
            '<ul>' +
            '<li><button type="button" class="muds-item dropped just-left" data-tooltip="'+item.langDefault[item.options.language].buttons.justification.left+' ('+item.osModifier+'+'+item.langDefault[item.options.language].buttons.keybindings.left+' '+item.langDefault[item.options.language].buttons.keybindings.arrow+')" onclick="'+'muds.buttonJustifyLeftAction()'+'"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></svg> '+item.langDefault[item.options.language].buttons.justification.left+'</button></li>' +
            '<li><button type="button" class="muds-item dropped just-center" data-tooltip="'+item.langDefault[item.options.language].buttons.justification.center+' ('+item.osModifier+'+'+item.langDefault[item.options.language].buttons.keybindings.up+'/'+item.langDefault[item.options.language].buttons.keybindings.down+' '+item.langDefault[item.options.language].buttons.keybindings.arrow+')" onclick="'+'muds.buttonJustifyCenterAction()'+'"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/></svg> '+item.langDefault[item.options.language].buttons.justification.center+'</button></li>' +
            '<li><button type="button" class="muds-item dropped just-right" data-tooltip="'+item.langDefault[item.options.language].buttons.justification.right+' ('+item.osModifier+'+'+item.langDefault[item.options.language].buttons.keybindings.right+' '+item.langDefault[item.options.language].buttons.keybindings.arrow+')" onclick="'+'muds.buttonJustifyRightAction()'+'"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/></svg> '+item.langDefault[item.options.language].buttons.justification.right+'</button></li>' +
            '<li><button type="button" class="muds-item dropped just-indent" data-tooltip="'+item.langDefault[item.options.language].buttons.justification.indent+' (SHIFT+'+item.osModifier+'+'+item.langDefault[item.options.language].buttons.keybindings.right+' '+item.langDefault[item.options.language].buttons.keybindings.arrow+')" onclick="'+'muds.buttonIndentAction()'+'"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg> '+item.langDefault[item.options.language].buttons.justification.indent+'</button></li>' +
            '<li><button type="button" class="muds-item dropped just-outdent" data-tooltip="'+item.langDefault[item.options.language].buttons.justification.outdent+' (SHIFT+'+item.osModifier+'+'+item.langDefault[item.options.language].buttons.keybindings.left+' '+item.langDefault[item.options.language].buttons.keybindings.arrow+')" onclick="'+'muds.buttonOutdentAction()'+'"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg> '+item.langDefault[item.options.language].buttons.justification.outdent+'</button></li>' +
            '</ul>';
        item.menu.appendChild(buttonJustification);
    }
    function buttonJustifyCenter(item) {
        const buttonJustifyCenter = document.createElement('button');
        buttonJustifyCenter.classList.add('muds-item');
        buttonJustifyCenter.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/></svg>';
        buttonJustifyCenter.setAttribute('onclick','muds.buttonJustifyCenterAction()');
        buttonJustifyCenter.setAttribute('type', 'button');
        buttonJustifyCenter.setAttribute('tabindex', '-1');
        buttonJustifyCenter.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.justification.center+' ('+item.osModifier+'+'+item.langDefault[item.options.language].buttons.keybindings.up+'/'+item.langDefault[item.options.language].buttons.keybindings.down+' '+item.langDefault[item.options.language].buttons.keybindings.arrow+')');
        item.menu.appendChild(buttonJustifyCenter);
    }
    function buttonJustifyLeft(item) {
        const buttonJustifyLeft = document.createElement('button');
        buttonJustifyLeft.classList.add('muds-item');
        buttonJustifyLeft.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></svg>';
        buttonJustifyLeft.setAttribute('onclick','muds.buttonJustifyLeftAction()');
        buttonJustifyLeft.setAttribute('type', 'button');
        buttonJustifyLeft.setAttribute('tabindex', '-1');
        buttonJustifyLeft.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.justification.left+' ('+item.osModifier+'+'+item.langDefault[item.options.language].buttons.keybindings.left+' '+item.langDefault[item.options.language].buttons.keybindings.arrow+')');
        item.menu.appendChild(buttonJustifyLeft);
    }
    function buttonJustifyRight(item) {
        const buttonJustifyRight = document.createElement('button');
        buttonJustifyRight.classList.add('muds-item');
        buttonJustifyRight.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/></svg>';
        buttonJustifyRight.setAttribute('onclick','muds.buttonJustifyRightAction()');
        buttonJustifyRight.setAttribute('type', 'button');
        buttonJustifyRight.setAttribute('tabindex', '-1');
        buttonJustifyRight.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.justification.right+' ('+item.osModifier+'+'+item.langDefault[item.options.language].buttons.keybindings.right+' '+item.langDefault[item.options.language].buttons.keybindings.arrow+')');
        item.menu.appendChild(buttonJustifyRight);
    }
    function buttonIndent(item) {
        const buttonIndent = document.createElement('button');
        buttonIndent.classList.add('muds-item');
        buttonIndent.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
        buttonIndent.setAttribute('onclick','muds.buttonIndentAction()');
        buttonIndent.setAttribute('type', 'button');
        buttonIndent.setAttribute('tabindex', '-1');
        buttonIndent.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.justification.indent+' (SHIFT+'+item.osModifier+'+'+item.langDefault[item.options.language].buttons.keybindings.right+' '+item.langDefault[item.options.language].buttons.keybindings.arrow+')');
        item.menu.appendChild(buttonIndent);
    }
    function buttonOutdent(item) {
        const buttonOutdent = document.createElement('button');
        buttonOutdent.classList.add('muds-item');
        buttonOutdent.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
        buttonOutdent.setAttribute('onclick','muds.buttonOutdentAction()');
        buttonOutdent.setAttribute('type', 'button');
        buttonOutdent.setAttribute('tabindex', '-1');
        buttonOutdent.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.justification.outdent+' (SHIFT+'+item.osModifier+'+'+item.langDefault[item.options.language].buttons.keybindings.left+' '+item.langDefault[item.options.language].buttons.keybindings.arrow+')');
        item.menu.appendChild(buttonOutdent);
    }
    function buttonPrintMe(item) {
        const buttonPrintMe = document.createElement('button');
        buttonPrintMe.classList.add('muds-item');
        buttonPrintMe.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm2-4v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"/><circle cx="18" cy="11.5" r="1"/></svg>';
        buttonPrintMe.setAttribute('onclick','muds.buttonPrintMeAction()');
        buttonPrintMe.setAttribute('type', 'button');
        buttonPrintMe.setAttribute('tabindex', '-1');
        buttonPrintMe.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.functions.print+' ('+item.osModifier+'+P)');
        item.menu.appendChild(buttonPrintMe);
    }
    function buttonShowHTML(item) {
        const buttonShowHTML = document.createElement('button');
        buttonShowHTML.classList.add('muds-item','show-html');
        buttonShowHTML.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>';
        buttonShowHTML.setAttribute('onclick','muds.buttonShowHTMLAction(event)');
        buttonShowHTML.setAttribute('type', 'button');
        buttonShowHTML.setAttribute('tabindex', '-1');
        buttonShowHTML.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.functions.showHtml+' ('+item.osModifier+'+H)');
        item.menu.appendChild(buttonShowHTML);
    }
    function buttonShowText(item) {
        const buttonShowText = document.createElement('button');
        buttonShowText.classList.add('muds-item');
        buttonShowText.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/></svg>';
        buttonShowText.setAttribute('onclick','muds.buttonShowTextAction()');
        buttonShowText.setAttribute('type', 'button');
        buttonShowText.setAttribute('tabindex', '-1');
        buttonShowText.setAttribute('data-tooltip', item.langDefault[item.options.language].buttons.functions.showText+' ('+item.osModifier+'+O)');
        item.menu.appendChild(buttonShowText);
    }

    // Keybindings
    function keybindings(editor) {

        const editorObj = editor;
        const editorInput = editorObj.wrapper;

        editor.content.addEventListener("keydown", function(e) {

            // Tab
            if(e.keyCode === 9) {
                e.preventDefault();
                var editor = document.getElementById(editorObj.original_input.id);
                var doc = editor.ownerDocument.defaultView;
                var sel = doc.getSelection();
                var range = sel.getRangeAt(0);
                var tabNode = document.createTextNode("\u00a0\u00a0\u00a0\u00a0");
                range.insertNode(tabNode);
                range.setStartAfter(tabNode);
                range.setEndAfter(tabNode);
                sel.removeAllRanges();
                sel.addRange(range);
            }

            // Print
            if(e.keyCode === 80) {
                if(e.metaKey === true || e.ctrlKey === true) {
                    e.cancelBubble = true;
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    muds.prototype.buttonPrintMeAction();
                }
            }

            // Align Left / Outdent
            if(e.keyCode === 37) {
                if(e.metaKey === true && e.shiftKey === false || e.ctrlKey === true && e.shiftKey === false) {
                    e.preventDefault();
                    muds.prototype.buttonJustifyLeftAction();
                }
                if(e.metaKey === true && e.shiftKey === true || e.ctrlKey === true && e.shiftKey === true) {
                    e.preventDefault();
                    muds.prototype.buttonOutdentAction();
                }
            }

            // Align Center
            if(e.keyCode === 38 || e.keyCode === 40) {
                if(e.metaKey === true || e.ctrlKey === true) {
                    e.preventDefault();
                    muds.prototype.buttonJustifyCenterAction();
                }
            }

            // Align Right / Indent
            if(e.keyCode === 39) {
                if(e.metaKey === true && e.shiftKey === false || e.ctrlKey === true && e.shiftKey === false) {
                    e.preventDefault();
                    muds.prototype.buttonJustifyRightAction();
                }
                if(e.metaKey === true && e.shiftKey === true || e.ctrlKey === true && e.shiftKey === true) {
                    e.preventDefault();
                    muds.prototype.buttonIndentAction();
                }
            }

            // Open Color dialog
            if(e.keyCode === 67) {
                if(e.metaKey === true && e.shiftKey === true || e.ctrlKey === true && e.shiftKey === true) {
                    e.preventDefault();
                    muds.prototype.buttonChangeColorAction();
                }
            }

            // Show HTML Editor
            if(e.keyCode === 72) {
                if(e.metaKey === true || e.ctrlKey === true) {
                    e.preventDefault();
                    muds.prototype.buttonShowHTMLAction();
                }
            }

            // Open Link Editor
            if(e.keyCode === 76) {
                if(e.metaKey === true || e.ctrlKey === true) {
                    e.preventDefault();
                    muds.prototype.buttonLinkAction();
                }
            }

            // Strikethrough
            if(e.keyCode === 83) {
                if(e.metaKey === true || e.ctrlKey === true) {
                    e.preventDefault();
                    muds.prototype.buttonStrikeThroughAction();
                }
            }

            // Underline
            if(e.keyCode === 85) {
                if(e.metaKey === true || e.ctrlKey === true) {
                    e.preventDefault();
                    muds.prototype.buttonUnderlineAction();
                }
            }

            // Body Text
            if(e.keyCode === 48) {
                if(e.metaKey === true || e.ctrlKey === true) {
                    e.preventDefault();
                    muds.prototype.buttonBodyTextAction();
                }
            }

            // Blockquote
            if(e.keyCode === 66) {
                if(e.metaKey === true && e.shiftKey === true || e.ctrlKey === true && e.shiftKey === true) {
                    e.preventDefault();
                    muds.prototype.buttonBlockquoteAction();
                }
            }

            // Header 1
            if(e.keyCode === 49) {
                if(e.metaKey === true || e.ctrlKey === true) {
                    e.preventDefault();
                    muds.prototype.buttonH1Action();
                }
            }

            // Header 2
            if(e.keyCode === 50) {
                if(e.metaKey === true || e.ctrlKey === true) {
                    e.preventDefault();
                    muds.prototype.buttonH2Action();
                }
            }

            // Header 3
            if(e.keyCode === 51) {
                if(e.metaKey === true || e.ctrlKey === true) {
                    e.preventDefault();
                    muds.prototype.buttonH3Action();
                }
            }

            // Unordered List
            if(e.keyCode === 190) {
                if(e.metaKey === true || e.ctrlKey === true) {
                    e.preventDefault();
                    muds.prototype.buttonUnorderedListAction();
                }
            }

            // Ordered List
            if(e.keyCode === 188) {
                if(e.metaKey === true || e.ctrlKey === true) {
                    e.preventDefault();
                    muds.prototype.buttonOrderedListAction();
                }
            }

            // Fullscreen
            if(e.keyCode === 13) {
                if(e.metaKey === true || e.ctrlKey === true) {
                    e.preventDefault();
                    if (editorInput.classList.contains('fullscreen')) {
                        muds.prototype.exitFullScreen(editorObj);
                    } else {
                        muds.prototype.enterFullScreen(editorObj);
                    }
                }
            }

            // Show Text Content
            if(e.keyCode === 79) {
                if(e.metaKey === true || e.ctrlKey === true) {
                    e.preventDefault();
                    muds.prototype.buttonShowTextAction();
                }
            }

        }, false);
    }

    // Build the Menu
    function buildMenu(item) {
        if (item.menu_style === "full" || item.menu_style === undefined ) {
            buttonHeader(item);
            buttonFonts(item);
            buttonBold(item);
            buttonItalic(item);
            buttonUnderline(item);
            buttonStrikeThrough(item);
            buttonSeparator(item);
            buttonLink(item);
            buttonChangeColor(item);
            buttonGetImage(item);
            buttonUndo(item);
            buttonRedo(item);
            buttonSeparator(item);
            buttonJustification(item);
            buttonUnorderedList(item);
            buttonOrderedList(item);
            buttonSelectAll(item);
            buttonCopy(item);
            buttonCut(item);
            buttonDelete(item);
            buttonSeparator(item);
            buttonPrintMe(item);
            buttonShowHTML(item);
            buttonShowText(item);
            buttonFullScreen(item);
        } else if (item.menu_style === "minimal") {
            buttonBold(item);
            buttonItalic(item);
            buttonUnderline(item);
            buttonStrikeThrough(item);
            buttonChangeColor(item);
        } else if (item.menu_style === "custom") {
            const customMenuItems = item.menu_custom;
            for (var i = 0; i < customMenuItems.length; i++) {
                buildCustomMenu(customMenuItems[i]);
            }
        }
        function buildCustomMenu(menuItem) {
            if (menuItem === "header"){buttonHeader(item);}
            if (menuItem === "fonts"){buttonFonts(item);}
            if (menuItem === "underline"){buttonUnderline(item);}
            if (menuItem === "strikeThrough"){buttonStrikeThrough(item);}
            if (menuItem === "italic"){buttonItalic(item);}
            if (menuItem === "bold"){buttonBold(item);}
            if (menuItem === "link"){buttonLink(item);}
            if (menuItem === "blockquote"){buttonBlockquote(item);}
            if (menuItem === "code"){buttonCodeBlock(item);}
            if (menuItem === "changeColor"){buttonChangeColor(item);}
            if (menuItem === "image"){buttonGetImage(item);}
            if (menuItem === "undo"){buttonUndo(item);}
            if (menuItem === "redo"){buttonRedo(item);}
            if (menuItem === "justification"){buttonJustification(item);}
            if (menuItem === "unorderedList"){buttonUnorderedList(item);}
            if (menuItem === "orderedList"){buttonOrderedList(item);}
            if (menuItem === "selectAll"){buttonSelectAll(item);}
            if (menuItem === "copy"){buttonCopy(item);}
            if (menuItem === "cut"){buttonCut(item);}
            if (menuItem === "delete"){buttonDelete(item);}
            if (menuItem === "justifyLeft"){buttonJustifyLeft(item);}
            if (menuItem === "justifyCenter"){buttonJustifyCenter(item);}
            if (menuItem === "justifyRight"){buttonJustifyRight(item);}
            if (menuItem === "indent"){buttonIndent(item);}
            if (menuItem === "outdent"){buttonOutdent(item);}
            if (menuItem === "print"){buttonPrintMe(item);}
            if (menuItem === "showHTML"){buttonShowHTML(item);}
            if (menuItem === "showText"){buttonShowText(item);}
            if (menuItem === "fullScreen"){buttonFullScreen(item);}
            if (menuItem === "separator"){buttonSeparator(item);}
        }
    }

    // Build the editor
    function buildEditor(editor) {
        // Set editor variables
        const mudsWrapperElement = editor.wrapper;
        const mudsToolElement = editor.menu;
        const mudsContentElement = editor.content;
        const mudsContentSubmit = editor.contentSubmittable;
        let mudsContentSubmitName;

        // Enables tooltips
        if (editor.tooltips != false) {
            mudsToolElement.classList.add('tooltips');
        }

        // Enables keybindings
        if (editor.keybindings != false) {
            keybindings(editor);
        }

        // Sets texarea name
        if (editor.content_submit === undefined) {
            mudsContentSubmitName = 'muds-submit';
        } else {
            mudsContentSubmitName = editor.content_submit;
        }

        // Enable custom theme
        if (editor.theme === undefined) {
            mudsWrapperElement.classList.add('light');
        } else {
            mudsWrapperElement.classList.add(editor.theme);
        }

        // Required input
        if (editor.required === true) {
            mudsContentSubmit.setAttribute('required','true');
        }

        // Build editor
        mudsToolElement.classList.add('muds-toolbar');

        mudsContentElement.classList.add('muds-content');
        mudsContentElement.setAttribute('contenteditable','true');
        mudsContentElement.style.overflow = 'auto';

        mudsContentSubmit.setAttribute('name',mudsContentSubmitName);
        mudsContentSubmit.setAttribute('id',mudsContentSubmitName);

        mudsWrapperElement.id = editor.original_input.id;
        mudsWrapperElement.style.position = 'relative';
        mudsWrapperElement.style.height = '150px';
        mudsWrapperElement.style.height = editor.height;

        mudsWrapperElement.appendChild(mudsToolElement);
        mudsWrapperElement.appendChild(mudsContentElement);
        mudsWrapperElement.appendChild(mudsContentSubmit);

        // Create and add placeholder text
        if (editor.placeholder != undefined && editor.content.innerText === '') {
            var mudsPlaceholderElement = document.createElement('div');
            mudsPlaceholderElement.classList.add('muds-placeholder');
            mudsPlaceholderElement.innerHTML = editor.placeholder;
            if (editor.original_content != '') {
                mudsPlaceholderElement.style.display = 'none';
            }
            mudsWrapperElement.appendChild(mudsPlaceholderElement);
        }

        // Replace initial textarea with div element
        editor.original_input.parentNode.replaceChild(mudsWrapperElement, editor.original_input);

        // Adjust initial editor heights base on menu size
        mudsContentElement.style.height = 'calc(100% - ' + editor.menu.offsetHeight + 'px';
        if (editor.placeholder != undefined && editor.content.innerText === '' && editor.original_content === '') {
            mudsPlaceholderElement.style.top = editor.menu.offsetHeight + 10 + 'px';
        }

        // Adjust editor heights to compensate for varying menu height when resize
        window.addEventListener('resize', function() {
            mudsContentElement.style.height = 'calc(100% - ' + editor.menu.offsetHeight + "px";
            if (editor.placeholder != undefined) {
                mudsPlaceholderElement.style.top = editor.menu.offsetHeight + 10 + 'px';
            }
        }, true);

        // Insert predefined content content
        if (editor.original_content === '' || editor.original_content === undefined) {
            mudsContentElement.innerHTML = "<p><br></p>";
        } else {
            mudsContentElement.innerHTML = editor.original_content;
            mudsContentSubmit.innerHTML = editor.original_content;
        }

        // Show character count
        function characterCount() {
            return mudsContentElement.textContent.length;
        }
        if (editor.character_count === true) {
            var mudsCharacterCountElement = document.createElement('div');
            mudsCharacterCountElement.classList.add('muds-character-count');
            mudsCharacterCountElement.textContent = characterCount();
            mudsWrapperElement.appendChild(mudsCharacterCountElement);
        }

        // Resize function
        function makeResizableDiv(div) {
            const element = document.querySelector(div);
            const currentResizer = document.querySelector(div + ' .muds-resizer');
            const toolbar = document.querySelector('.muds-toolbar');
            const minimum_size = toolbar.clientHeight+20;
            let original_width = 0;
            let original_height = 0;
            let original_x = 0;
            let original_y = 0;
            let original_mouse_x = 0;
            let original_mouse_y = 0;
            currentResizer.addEventListener('mousedown', function(e) {
                e.preventDefault();
                original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
                original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
                original_x = element.getBoundingClientRect().left;
                original_y = element.getBoundingClientRect().top;
                original_mouse_x = e.pageX;
                original_mouse_y = e.pageY;
                window.addEventListener('mousemove', resize);
                window.addEventListener('mouseup', stopResize);
            });
            function resize(e) {
                const height = original_height + (e.pageY - original_mouse_y);
                if (height > minimum_size) {
                    element.style.height = height + 'px'
                }
            }
            function stopResize() {
                window.removeEventListener('mousemove', resize)
            }
        }

        // Enable resizable editor
        if (editor.resize != false) {
            const edtiorWrapper = editor.wrapper;
            const resizer = document.createElement('div');
            resizer.className = 'muds-resizer';
            edtiorWrapper.appendChild(resizer);
            makeResizableDiv('#'+editor.original_input.id);
        }

        // Set the default break to insert "<p></p>"
        document.execCommand('defaultParagraphSeparator', false, 'p');

        // Copy content to textarea
        // Show/hide placeholder text
        // Update character count
        editor.content.addEventListener('input', function() {
            mudsContentSubmit.innerHTML = mudsContentElement.innerHTML;
            if (editor.character_count === true) {
                mudsCharacterCountElement.textContent = characterCount();
            }
            if (editor.placeholder != undefined && editor.content.innerText != '') {
                mudsPlaceholderElement.style.display = 'none';
            } else if (editor.placeholder != undefined && editor.content.innerText === '') {
                mudsPlaceholderElement.style.display = 'block';
                mudsPlaceholderElement.style.top = editor.menu.offsetHeight + 10 + 'px';
            }
        });

        // Move focus to editor when placeholder is clicked
        if (mudsPlaceholderElement != undefined) {
            mudsPlaceholderElement.addEventListener('click', function() {
                editor.content.focus();
            });
        }

        // Prevents focus from moving when buttons are clicked
        var mudsButtons = document.querySelectorAll('.muds-item');
        for (let i = 0; i < mudsButtons.length; i++) {
            mudsButtons[i].addEventListener("mousedown", function() {
                event.preventDefault();
            });
        }

        // Enables onChange event
        if (editor.onChange != undefined) {
            editor.content.addEventListener('input', function() {
                editor.onChange();
            });
        }
    }

    // Attach defaults for plugin to the plugin itself
    muds.defaults = {
        selector: '',
        submitName: 'muds-submit',
        resize: true,
        placeholder: false,
        menuStyle: 'custom', // full, minimal, custom
        menuCustom: [], //'header','underline','strikeThrough','bold','italic','link','changeColor','image','undo','redo','unorderedList','orderedList','selectAll','copy','cut','delete','justifyLeft','justifyCenter','justifyRight','print','showHTML','showText','fullScreen'
        theme: 'light', // light, dark
        height: '150px',
        language: 'en-US',
        keybindings: true,
        tooltips: true,
        onChange: false,
        required: false,
        characterCount: false
    };

    // Attach default language for plugin to the plugin itself
    muds.langDefault = {
        'en-US': {
            buttons: {
                functions: {
                    fullscreen: 'Fullscreen',
                    textColor: 'Text Color',
                    image: 'Insert Image',
                    cut: 'Cut',
                    copy: 'Copy',
                    undo: 'Undo',
                    redo: 'Redo',
                    delete: 'Delete',
                    selectAll: 'Select All',
                    print: 'Print',
                    showHtml: 'Edit HTML',
                    showText: 'View Content'
                },
                formatting: {
                    h1: 'Headline 1',
                    h2: 'Headline 2',
                    h3: 'Headline 3',
                    body: 'Body Text',
                    blockquote: 'Blockquote',
                    code: 'Code Block',
                    bold: 'Bold',
                    underline: 'Underline',
                    italic: 'Italic',
                    strikeThrough: 'Strike Through',
                    link: 'Create Link'
                },
                keybindings: {
                    up: 'Up',
                    down: 'Down',
                    left: 'Left',
                    right: 'Right',
                    enter: 'Enter',
                    arrow: 'Arrow'
                },
                list: {
                    ordered: 'Ordered List',
                    unordered: 'Unordered List'
                },
                justification: {
                    left: 'Justify left',
                    center: 'Justify Center',
                    right: 'Justify Right',
                    indent: 'Indent',
                    outdent: 'Outdent'
                }
            }
        }
    };

    // make accessible globally
    window.muds = muds;

})();