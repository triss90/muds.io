<?php include('../_inc/header.php'); ?>

<header id="menu-bg">
    <div class="container">
        <?php include('../_inc/navigation.php'); ?>
    </div>
</header>

<section id="demo">
    <div class="container">
        <div class="row">

            <!-- Menu Style -->
            <div class="tiny-12">
                <h2>Menu Style</h2>
                <p>The MUDS Editor comes with 3 built-in menu options: <span class="tag">full</span>(which is default), <span class="tag">minimal</span> and <span class="tag">custom</span>.</p>
                <p>The full menu includes, as the name might suggest, all the available menu items. Where as the minimal menu option includes: <span class="tag">underline</span>, <span class="tag">strikeThrough</span>, <span class="tag">italic</span>, <span class="tag">bold</span>, <span class="tag">undo</span>, <span class="tag">redo</span>.</p>
                <p>If you want full control over which menu items to use, please refer to our section about <a href="#custom-menu">customizing menu items</a>.</p>
                <br>
                <h3>Example:</h3>
                <div class="codepen" data-height="770" data-theme-id="36048" data-default-tab="js,result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="scss" data-option-autoprefixer>
html, body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
}
b {
    display: block;
    margin-bottom: 0.5rem;
}
                    </pre>
                    <pre data-lang="js">
// Initialize muds editor
var editor1 = new muds({
    selector: 'editor1',
    menuStyle: 'full'
});

// Initialize another muds editor
var editor2 = new muds({
    selector: 'editor2',
    menuStyle: 'minimal'
});

// Initialize yet another muds editor
var editor3 = new muds({
    selector: 'editor3',
    menuStyle: 'custom',
    menuCustom: [
        'header',
        'link'
    ]
});
                    </pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@1.3.0/muds.min.css&#x22;&#x3E;

&#x3C;b&#x3E;Full Editor&#x3C;/b&#x3E;
&#x3C;!-- Create the editor container --&#x3E;
&#x3C;div id=&#x22;editor1&#x22;&#x3E;&#x3C;/div&#x3E;

&#x3C;br&#x3E;

&#x3C;b&#x3E;Minimal Editor&#x3C;/b&#x3E;
&#x3C;!-- Create another editor container --&#x3E;
&#x3C;div id=&#x22;editor2&#x22;&#x3E;&#x3C;/div&#x3E;

&#x3C;br&#x3E;

&#x3C;b&#x3E;Custom Editor&#x3C;/b&#x3E;
&#x3C;!-- Create yet another editor container --&#x3E;
&#x3C;div id=&#x22;editor3&#x22;&#x3E;&#x3C;/div&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@1.3.0/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
                    </pre>
                </div>
            </div>

            <!-- Custumize menu items -->
            <div class="tiny-12" id="custom-menu">
                <h2>Custumizing menu items</h2>
                <p>To customize which items are available in the menu, you simply need to define <span class="tag">menuStyle: 'custom'</span> and then include the items you want in <span class="tag">menuCustom: []</span>.</p>
                <p>The order in which you include the menu items will be reflected in the menu.</p>
                <br>
                <h3>Available menu items include:</h3>
                <p>
<!--                    <span class="tag">separators</span>,-->
                    <span class="tag">header</span>,
                    <span class="tag">fonts</span>,
                    <span class="tag">underline</span>,
                    <span class="tag">strikeThrough</span>,
                    <span class="tag">bold</span>,
                    <span class="tag">italic</span>,
                    <span class="tag">link</span>,
                    <span class="tag">blockquote</span>,
                    <span class="tag">changeColor</span>,
                    <span class="tag">image</span>,
                    <span class="tag">undo</span>,
                    <span class="tag">redo</span>,
                    <span class="tag">justification</span>,
                    <span class="tag">unorderedList</span>,
                    <span class="tag">orderedList</span>,
                    <span class="tag">selectAll</span>,
                    <span class="tag">copy</span>,
                    <span class="tag">cut</span>,
                    <span class="tag">delete</span>,
                    <span class="tag">justifyLeft</span>,
                    <span class="tag">justifyCenter</span>,
                    <span class="tag">justifyRight</span>,
                    <span class="tag">indent</span>,
                    <span class="tag">outdent</span>,
                    <span class="tag">print</span>,
                    <span class="tag">showHTML</span>,
                    <span class="tag">showText</span> and
                    <span class="tag">fullScreen</span>.
                </p>
                <br>
                <h3>Example:</h3>
                <div class="codepen" data-height="680" data-theme-id="36048" data-default-tab="js,result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js">
// Initialize muds editor
var editor = new muds({
    selector: 'editor',
    menuStyle: 'custom',
    menuCustom: [
<!--        'separators',-->
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
                    </pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@1.3.0/muds.min.css&#x22;&#x3E;

&#x3C;!-- Create the editor container --&#x3E;
&#x3C;div id=&#x22;editor&#x22;&#x3E;&#x3C;/div&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@1.3.0/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
                    </pre>
                </div>
            </div>

            <!-- Darkmode -->
            <div class="tiny-12">
                <h2>Darkmode</h2>
                <p>The MUDS Editor comes with built-in darkmode. Simply define <span class="tag">theme: 'dark'</span>. The team is currently hard at working creating more themes.</p>
                <br>
                <h3>Example:</h3>
                <div class="codepen" data-height="500" data-theme-id="36048" data-default-tab="js,result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js">
// Initialize muds editor
var editor = new muds({
    selector: 'editor',
    theme: 'light'
});

// Initialize another muds editor
var editorDark = new muds({
    selector: 'editor-dark',
    theme: 'dark'
});
                    </pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@1.3.0/muds.min.css&#x22;&#x3E;

&#x3C;!-- Create the editor container --&#x3E;
&#x3C;div id=&#x22;editor&#x22;&#x3E;&#x3C;/div&#x3E;

&#x3C;br&#x3E;

&#x3C;!-- Create another editor container --&#x3E;
&#x3C;div id=&#x22;editor-dark&#x22;&#x3E;&#x3C;/div&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@1.3.0/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
                    </pre>
                </div>
            </div>

            <!-- Default height -->
            <div class="tiny-12">
                <h2>Editor Height</h2>
                <p>The default height of the editor is 100px (this excludes the height of the menu). If you wish to alter this, simply add <span class="tag">height: '342px'</span> to your configuration.</p>
                <br>
                <h3>Example:</h3>
                <div class="codepen" data-height="650" data-theme-id="36048" data-default-tab="js,result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js">
// Initialize muds editor
var editor = new muds({
    selector: 'editor',
    height: '342px'
});
                    </pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@1.3.0/muds.min.css&#x22;&#x3E;

&#x3C;!-- Create the editor container --&#x3E;
&#x3C;div id=&#x22;editor&#x22;&#x3E;&#x3C;/div&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@1.3.0/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
                    </pre>
                </div>
            </div>

            <!-- Prefill content -->
            <div class="tiny-12">
                <h2>Editor Content</h2>
                <p>you can easily prefill content in your MUDS editor like so: <span class="tag">content: 'content goes here'</span>.</p>
                <br>
                <h3>Example:</h3>
                <div class="codepen" data-height="400" data-theme-id="36048" data-default-tab="js,result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js">
// Initialize muds editor
var editor = new muds({
    selector: 'editor',
    content: 'I am prefilled content... Woohoo...!'
});
                    </pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@1.3.0/muds.min.css&#x22;&#x3E;

&#x3C;!-- Create the editor container --&#x3E;
&#x3C;div id=&#x22;editor&#x22;&#x3E;&#x3C;/div&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@1.3.0/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
                    </pre>
                </div>
            </div>

            <!-- Tooltips -->
            <div class="tiny-12">
                <h2>Tooltips</h2>
                <p>Tooltips are enabled by default, but can be disabled like so: <span class="tag">tooltips: false</span>.</p>
                <br>
                <h3>Example:</h3>
                <div class="codepen" data-height="400" data-theme-id="36048" data-default-tab="js,result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js">
// Initialize muds editor
var editor = new muds({
    selector: 'editor',
    tooltips: false
});
                    </pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@1.3.0/muds.min.css&#x22;&#x3E;

&#x3C;!-- Create the editor container --&#x3E;
&#x3C;div id=&#x22;editor&#x22;&#x3E;&#x3C;/div&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@1.3.0/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
                    </pre>
                </div>
            </div>

            <!-- Resize Editor -->
            <div class="tiny-12">
                <h2>Resize Editor</h2>
                <p>The editor is resizable by default, but can be disabled like so: <span class="tag">resize: false</span>.</p>
                <br>
                <h3>Example:</h3>
                <div class="codepen" data-height="400" data-theme-id="36048" data-default-tab="js,result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js">
// Initialize muds editor
var editor = new muds({
    selector: 'editor',
    resize: false
});
                    </pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@1.3.0/muds.min.css&#x22;&#x3E;

&#x3C;!-- Create the editor container --&#x3E;
&#x3C;div id=&#x22;editor&#x22;&#x3E;&#x3C;/div&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@1.3.0/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
                    </pre>
                </div>
            </div>

            <!-- Keybindings -->
            <div class="tiny-12">
                <h2>Keybindings</h2>
                <p>Keybindings are enabled by default, but can be disabled like so: <span class="tag">keybindings: false</span>.</p>
                <br>
                <h3>Available keybindings:</h3>
                <ul>
                    <li><span class="tag">Tab</span>: inserts 4 spaces at the cursor position</li>
                    <li><span class="tag">Ctrl/Cmd + P</span>: Opens the print dialog</li>
                    <li><span class="tag">Ctrl/Cmd + B</span>: Makes highlighted text bold</li>
                    <li><span class="tag">Ctrl/Cmd + I</span>: Makes highlighted text italic</li>
                    <li><span class="tag">Ctrl/Cmd + A</span>: Highlight everything</li>
                    <li><span class="tag">Ctrl/Cmd + C</span>: Copy highlighted text</li>
                    <li><span class="tag">Ctrl/Cmd + X</span>: Cut highlighted text</li>
                    <li><span class="tag">Ctrl/Cmd + V</span>: Paste from clipboard</li>
                    <li><span class="tag">Ctrl/Cmd + Z</span>: Undo</li>
                    <li><span class="tag">Shift + Ctrl/Cmd + Z</span>: Redo</li>
                    <li><span class="tag">Ctrl/Cmd + Left Arrow</span>: Align Left</li>
                    <li><span class="tag">Ctrl/Cmd + Up Arrow/Down Arrow</span>: Align Center</li>
                    <li><span class="tag">Ctrl/Cmd + Right Arrow</span>: Align Right</li>
                    <li><span class="tag">Shift + Ctrl/Cmd + Right Arrow</span>: Indent</li>
                    <li><span class="tag">Shift + Ctrl/Cmd + Left Arrow</span>: Outdent</li>
                    <li><span class="tag">Shift + Ctrl/Cmd + C</span>: Open "Change Color" dialog</li>
                    <li><span class="tag">Ctrl/Cmd + L</span>: Open "Insert Link" dialog</li>
                    <li><span class="tag">Ctrl/Cmd + H</span>: Show HTML</li>
                    <li><span class="tag">Ctrl/Cmd + S</span>: Strikethrough</li>
                    <li><span class="tag">Ctrl/Cmd + L</span>: Open "Insert Link" dialog</li>
                    <li><span class="tag">Ctrl/Cmd + 0</span>: Body Text</li>
                    <li><span class="tag">Shift + Ctrl/Cmd + B</span>: Blockquote</li>
                    <li><span class="tag">Ctrl/Cmd + 1</span>: Header 1</li>
                    <li><span class="tag">Ctrl/Cmd + 2</span>: Header 2</li>
                    <li><span class="tag">Ctrl/Cmd + 3</span>: Header 3</li>
                    <li><span class="tag">Ctrl/Cmd + .</span>: Unordered List</li>
                    <li><span class="tag">Ctrl/Cmd + ,</span>: Ordered List</li>
                    <li><span class="tag">Shift + Enter</span>: New line</li>
                    <li><span class="tag">Ctrl/Cmd + Enter</span>: Enter/Exit Fullscreen</li>
                    <li><span class="tag">Ctrl/Cmd + O</span>: Show Text Content</li>
                </ul>
                <br>
                <h3>Example:</h3>
                <div class="codepen" data-height="400" data-theme-id="36048" data-default-tab="js,result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js">
// Initialize muds editor
var editor = new muds({
    selector: 'editor',
    keybindings: true
});
                    </pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@1.3.2/muds.min.css&#x22;&#x3E;

&#x3C;!-- Create the editor container --&#x3E;
&#x3C;div id=&#x22;editor&#x22;&#x3E;&#x3C;/div&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@1.3.0/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
                    </pre>
                </div>
            </div>

        </div>
    </div>
</section>

<?php include('../_inc/footer.php'); ?>
