<?php include('../../_inc/header.php'); ?>

<header id="menu-bg">
    <div class="container">
        <?php include('../../_inc/navigation.php'); ?>
    </div>
</header>

<section id="demo">
    <div class="container">
        <div class="row">


            <?php include('../../_inc/navigation-doc.php'); ?>


            <!-- Menu Style -->
            <div class="tiny-12 small-9 medium-9 large-9">
                <h2>Menu Style</h2>
                <p>The MUDS Editor comes with 3 built-in menu options: <span class="tag">full</span>(which is default), <span class="tag">minimal</span> and <span class="tag">custom</span>.</p>
                <p>The full menu includes, as the name might suggest, all the available menu items. Where as the minimal menu option includes: <span class="tag">underline</span>, <span class="tag">strikeThrough</span>, <span class="tag">italic</span>, <span class="tag">bold</span>, <span class="tag">undo</span>, <span class="tag">redo</span>.</p>
                <p>If you want full control over which menu items to use, please refer to our section about <a href="#custom-menu">customizing menu items</a>.</p>
                <br>

                <h3>Full Editor:</h3>
                <div class="codepen" data-height="400" data-theme-id="36048" data-default-tab="js,result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
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
var muds = new muds({
    selector: 'full-editor',
    menuStyle: 'full'
});
                    </pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.css&#x22;&#x3E;

&#x3C;b&#x3E;Full Editor&#x3C;/b&#x3E;
&#x3C;!-- Create the editor container --&#x3E;
&#x3C;div id=&#x22;full-editor&#x22;&#x3E;&#x3C;/div&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
                    </pre>
                </div>

                <h3>Minimal Editor:</h3>
                <div class="codepen" data-height="400" data-theme-id="36048" data-default-tab="js,result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
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
// Initialize another muds editor
var muds = new muds({
    selector: 'minimal-editor',
    menuStyle: 'minimal'
});
                    </pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.css&#x22;&#x3E;

&#x3C;b&#x3E;Minimal Editor&#x3C;/b&#x3E;
&#x3C;!-- Create another editor container --&#x3E;
&#x3C;div id=&#x22;minimal-editor&#x22;&#x3E;&#x3C;/div&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
                    </pre>
                </div>

                <h3>Example:</h3>
                <div class="codepen" data-height="400" data-theme-id="36048" data-default-tab="js,result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
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
// Initialize yet another muds editor
var muds = new muds({
    selector: 'custom-editor',
    menuStyle: 'custom',
    menuCustom: [
        'header',
        'link',
        'bold',
        'showHTML'
    ]
});
                    </pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.css&#x22;&#x3E;

&#x3C;b&#x3E;Custom Editor&#x3C;/b&#x3E;
&#x3C;!-- Create yet another editor container --&#x3E;
&#x3C;div id=&#x22;custom-editor&#x22;&#x3E;&#x3C;/div&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
                    </pre>
                </div>

            </div>

            <!-- Custumize menu items -->
            <div class="tiny-12 small-9 small-offset-3" id="custom-menu">
                <h2>Custumizing menu items</h2>
                <p>To customize which items are available in the menu, you simply need to define <span class="tag">menuStyle: 'custom'</span> and then include the items you want in <span class="tag">menuCustom: []</span>.</p>
                <p>The order in which you include the menu items will be reflected in the menu.</p>
                <br>
                <h3>Available menu items include:</h3>
                <p>
                    <span class="tag">separator</span>,
                    <span class="tag">header</span>,
                    <span class="tag">fonts</span>,
                    <span class="tag">underline</span>,
                    <span class="tag">strikeThrough</span>,
                    <span class="tag">bold</span>,
                    <span class="tag">italic</span>,
                    <span class="tag">link</span>,
                    <span class="tag">blockquote</span>,
                    <span class="tag">code</span>,
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
                <div class="codepen" data-height="380" data-theme-id="36048" data-default-tab="js,result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js">
// Initialize muds editor
var muds = new muds({
    selector: 'editor',
    menuStyle: 'custom',
    menuCustom: [
        'separator',
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
                    </pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.css&#x22;&#x3E;

&#x3C;!-- Create the editor container --&#x3E;
&#x3C;div id=&#x22;editor&#x22;&#x3E;&#x3C;/div&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
                    </pre>
                </div>
            </div>


        </div>
    </div>
</section>

<?php include('../../_inc/footer.php'); ?>
