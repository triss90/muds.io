muds.lang = {
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

function extend(a,b){for(var key in b)if(b.hasOwnProperty(key))a[key]=b[key];return a;}
muds.langDefault = extend(muds.langDefault, muds.lang);

