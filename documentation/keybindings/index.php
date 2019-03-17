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

            <!-- Keybindings -->
            <div class="tiny-12 small-9">
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
                    <li><span class="tag">Ctrl/Cmd + 7</span>: Align Left</li>
                    <li><span class="tag">Ctrl/Cmd + 8</span>: Align Center</li>
                    <li><span class="tag">Ctrl/Cmd + 9</span>: Align Right</li>
                    <li><span class="tag">Shift + Ctrl/Cmd + 9</span>: Indent</li>
                    <li><span class="tag">Shift + Ctrl/Cmd + 7</span>: Outdent</li>
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
                <div class="codepen" data-height="450" data-theme-id="36048" data-default-tab="html,result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js"></pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.css&#x22;&#x3E;

&#x3C;!-- Create the editor container --&#x3E;
&#x3C;textarea id=&#x22;editor&#x22;&#x3E;&#x3C;/textarea&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;

&#x3C;!-- Initialize MUDS editor --&#x3E;
&#x3C;script&#x3E;
var muds = new muds({
    selector: 'editor',
    keybindings: false
});
&#x3C;/script&#x3E;
                    </pre>
                </div>
            </div>

        </div>
    </div>
</section>

<?php include('../../_inc/footer.php'); ?>
