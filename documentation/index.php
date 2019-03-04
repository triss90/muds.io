<?php include('../_inc/header.php'); ?>

<header id="menu-bg">
    <div class="container">
        <?php include('../_inc/navigation.php'); ?>
    </div>
</header>

<section id="demo">
    <div class="container">
        <div class="row">

            <?php include('../_inc/navigation-doc.php'); ?>


            <!-- Installation -->
            <div class="tiny-12 small-9">
                <h2>Installation</h2>
                <p>Installing the muds editor is super easy! Simply copy and paste code below where you want to editor to appear.</p>
                <div class="codepen" data-height="410" data-theme-id="36048" data-default-tab="html" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@1.3.2/muds.min.css&#x22;&#x3E;

&#x3C;!-- Create the editor container --&#x3E;
&#x3C;div id=&#x22;editor&#x22;&#x3E;&#x3C;/div&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@1.3.2/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;

&#x3C;!-- Initialize MUDS editor --&#x3E;
&#x3C;script&#x3E;
var editor = new muds({
    selector: &#x27;editor&#x27;
});
&#x3C;/script&#x3E;
                    </pre>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js"></pre>
                </div>

                <p>Or install the library with NPM: <span class="tag">npm i muds-editor</span>. Alternatively you can <a href="/download/muds-editor-v1.3.2.zip" download>download the newest version</a> and run MUDS locally.</p><br>


            </div>
    </div>
</section>

<?php include('../_inc/footer.php'); ?>
