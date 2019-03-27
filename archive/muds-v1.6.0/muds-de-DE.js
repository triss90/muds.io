muds.lang = {
    'de-DE': {
        buttons: {
            functions: {
                fullscreen: 'Vollbild',
                textColor: 'Text Farbe',
                image: 'Bild einfügen',
                cut: 'Schnitt',
                copy: 'Kopieren',
                undo: 'Rückgängig',
                redo: 'Wiederholen',
                delete: 'Löschen',
                selectAll: 'Wählen Sie Alle',
                print: 'Drucken',
                showHtml: 'HTML Bearbeiten',
                showText: 'Text Zeigen'
            },
            formatting: {
                h1: 'Überschrift 1',
                h2: 'Überschrift 1',
                h3: 'Überschrift 1',
                body: 'Normal',
                blockquote: 'Zitat',
                code: 'Quellcode',
                bold: 'Schrift Fett',
                underline: 'Unterstreichen',
                italic: 'Schrift Kursiv',
                strikeThrough: 'Durchstreichen',
                link: 'Link einfügen'
            },
            keybindings: {
                up: 'Oben',
                down: 'Nieder',
                left: 'Links',
                right: 'Rechts',
                enter: 'Eingabetaste',
                arrow: 'Pfeil'
            },
            list: {
                ordered: 'Nummerierte Liste',
                unordered: 'Unnummerierte Liste'
            },
            justification: {
                left: 'Linksbündig',
                center: 'Mittig',
                right: 'Rechtsbündig',
                indent: 'Einzug verkleinern',
                outdent: 'Einzug vergrößern'
            }
        }
    }
};

function extend(a,b){for(var key in b)if(b.hasOwnProperty(key))a[key]=b[key];return a;}
muds.langDefault = extend(muds.langDefault, muds.lang);

