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
