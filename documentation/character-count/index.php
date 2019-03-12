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

            <!-- Tooltips -->
            <div class="tiny-12 small-9">
                <h2>Character Count</h2>
                <p>Character count is disabled by default, but can be enabled like so: <span class="tag">characterCount: true</span>.</p>
                <br>
                <h3>Example:</h3>
                <div class="codepen" data-height="450" data-theme-id="36048" data-default-tab="html,result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js"></pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.css&#x22;&#x3E;

&#x3C;!-- Create the editor container --&#x3E;
&#x3C;textarea id=&#x22;editor&#x22;&#x3E;I Am Content&#x3C;/textarea&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;

&#x3C;!-- Initialize MUDS editor --&#x3E;
&#x3C;script&#x3E;
var muds = new muds({
    selector: 'editor',
    characterCount: true
});
&#x3C;/script&#x3E;
                    </pre>
                </div>
            </div>

        </div>
    </div>
</section>

<?php include('../../_inc/footer.php'); ?>
