<?php include('../../../_inc/header.php'); ?>

<header id="menu-bg">
    <div class="container">
        <?php include('../../../_inc/navigation.php'); ?>
    </div>
</header>

<section id="demo">
    <div class="container">
        <div class="row">

            <?php include('../../../_inc/navigation-doc.php'); ?>

            <div class="tiny-12 small-9">

                <h2>Themes</h2>

                <h3 id="spectral">Spectral theme</h3>
                <p><a href="https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds-spectral.min.css" download>Download</a>, or include the library <span class="tag">https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds-spectral.min.css</span></p>
                <div class="codepen" data-height="330" data-theme-id="36048" data-default-tab="result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js"></pre>
                    <pre data-lang="html">
&#x3C;style&#x3E;
html, body {
    background: linear-gradient(to right, #93F9B9, #1D976C) !important;
}
&#x3C;/style&#x3E;

&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.css&#x22;&#x3E;

&#x3C;!-- Include the royal theme stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds-spectral.min.css&#x22;&#x3E;

&#x3C;!-- Create the editor container --&#x3E;
&#x3C;textarea id=&#x22;editor&#x22;&#x3E;&#x3C;/textarea&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;

&#x3C;!-- Initialize MUDS editor --&#x3E;
&#x3C;script&#x3E;
var muds = new muds({
    selector: 'editor',
    theme: 'spectral'
});
&#x3C;/script&#x3E;
                    </pre>
                </div>

                <br><br>

                <h3 id="darkmoon">Darkmoon theme</h3>
                <p><a href="https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds-darkmoon.min.css" download>Download</a>, or include the library <span class="tag">https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds-darkmoon.min.css</span></p>
                <div class="codepen" data-height="330" data-theme-id="36048" data-default-tab="result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js"></pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.css&#x22;&#x3E;

&#x3C;!-- Include the royal theme stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds-darkmoon.min.css&#x22;&#x3E;

&#x3C;!-- Create the editor container --&#x3E;
&#x3C;textarea id=&#x22;editor&#x22;&#x3E;&#x3C;/textarea&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;

&#x3C;!-- Initialize MUDS editor --&#x3E;
&#x3C;script&#x3E;
var muds = new muds({
    selector: 'editor',
    theme: 'darkmoon'
});
&#x3C;/script&#x3E;
                    </pre>
                </div>

                <br><br>

                <h3 id="royal">Royal theme</h3>
                <p><a href="https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds-royal.min.css" download>Download</a>, or include the library <span class="tag">https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds-royal.min.css</span></p>
                <div class="codepen" data-height="330" data-theme-id="36048" data-default-tab="result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js"></pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.css&#x22;&#x3E;

&#x3C;!-- Include the royal theme stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds-royal.min.css&#x22;&#x3E;

&#x3C;!-- Create the editor container --&#x3E;
&#x3C;textarea id=&#x22;editor&#x22;&#x3E;&#x3C;/textarea&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;

&#x3C;!-- Initialize MUDS editor --&#x3E;
&#x3C;script&#x3E;
var muds = new muds({
    selector: 'editor',
    theme: 'royal'
});
&#x3C;/script&#x3E;
                    </pre>
                </div>

                <br><br>

                <h3 id="markee">Markee theme</h3>
                <p><a href="https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds-royal.min.css" download>Download</a>, or include the library <span class="tag">https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds-markee.min.css</span></p>
                <div class="codepen" data-height="330" data-theme-id="36048" data-default-tab="result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js"></pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.css&#x22;&#x3E;

&#x3C;!-- Include the royal theme stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds-markee.min.css&#x22;&#x3E;

&#x3C;!-- Create the editor container --&#x3E;
&#x3C;textarea id=&#x22;editor&#x22;&#x3E;&#x3C;/textarea&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;

&#x3C;!-- Initialize MUDS editor --&#x3E;
&#x3C;script&#x3E;
var muds = new muds({
    selector: 'editor',
    theme: 'markee'
});
&#x3C;/script&#x3E;
                    </pre>
                </div>

                <br><br>

            </div>
        </div>
</section>

<?php include('../../../_inc/footer.php'); ?>
