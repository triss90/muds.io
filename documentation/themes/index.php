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

            <!-- Darkmode -->
            <div class="tiny-12 small-9">
                <h2>Custom Themes</h2>
                <p>You can download different themes for MUDS from our <a href="/themes/list/">theme store</a>.</p>
                <p>The theme name should simply be defined like so <span class="tag">theme: 'royal'</span>. If not defined, the theme will default to the standard light theme. </p>
                <p>The team is currently hard at working creating more themes.</p>
                <br>
                <h3>Custom theme example:</h3>
                <div class="codepen" data-height="400" data-theme-id="36048" data-default-tab="js,result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js">
// Initialize muds editor
var muds = new muds({
    selector: 'editor',
    theme: 'royal'
});
                    </pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.css&#x22;&#x3E;

&#x3C;!-- Create the editor container --&#x3E;
&#x3C;textarea id=&#x22;editor&#x22;&#x3E;&#x3C;/textarea&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
                    </pre>
                </div>

        </div>
    </div>
</section>

<?php include('../../_inc/footer.php'); ?>