muds.lang = {
    'da-DK': {
        buttons: {
            functions: {
                fullscreen: 'Fuld skærm',
                textColor: 'Tekst farve',
                image: 'Indsæt Billed',
                cut: 'Klip',
                copy: 'Kopier',
                undo: 'Fortryd',
                redo: 'Gentag',
                delete: 'Slet',
                selectAll: 'Vælg Alt',
                print: 'Print',
                showHtml: 'Rediger HTML',
                showText: 'Se Indhold'
            },
            formatting: {
                h1: 'Overskrift 1',
                h2: 'Overskrift 2',
                h3: 'Overskrift 3',
                body: 'Almindelig tekst',
                blockquote: 'Citat',
                code: 'Kode',
                bold: 'Fed',
                underline: 'Understreget',
                italic: 'Kursiv',
                strikeThrough: 'Gennemstreget',
                link: 'Indsæt Link'
            },
            keybindings: {
                up: 'Op',
                down: 'Ned',
                left: 'Venstre',
                right: 'Højre',
                enter: 'Enter',
                arrow: 'Pil'
            },
            list: {
                ordered: 'Nummereret Liste',
                unordered: 'Punktopstillet Liste'
            },
            justification: {
                left: 'Venstrestillet',
                center: 'Centreret',
                right: 'Højrestillet',
                indent: 'Forøg indryk',
                outdent: 'Formindsk indryk'
            }
        }
    }
};

function extend(a,b){for(var key in b)if(b.hasOwnProperty(key))a[key]=b[key];return a;}
muds.langDefault = extend(muds.langDefault, muds.lang);

