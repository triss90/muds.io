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

            <!-- Prefill content -->
            <div class="tiny-12 small-9">
                <h2>Editor Content</h2>
                <p>You can easily prefill content in your MUDS editor like so: <span class="tag">content: 'content goes here'</span>.</p>
                <br>
                <h3>Example:</h3>
                <div class="codepen" data-height="450" data-theme-id="36048" data-default-tab="html,result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js"></pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.css&#x22;&#x3E;

&#x3C;!-- Create the editor container --&#x3E;
&#x3C;div id=&#x22;editor&#x22;&#x3E;I am prefilled content... Woohoo...!&#x3C;/div&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;

&#x3C;!-- Initialize MUDS editor --&#x3E;
&#x3C;script&#x3E;
var muds = new muds({
    selector: 'editor',
});
&#x3C;/script&#x3E;
                    </pre>
                </div>
            </div>

            <!-- Prefill content -->
            <div class="tiny-12 small-9 small-offset-3">
                <h2>Textarea Name</h2>
                <p>The default name for the submittable textarea is "muds-submit". This can be easily overwritten like so: <span class="tag">submitName: 'my_submit_name'</span>.</p>
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
    submitName: 'my_submit_name'
});
&#x3C;/script&#x3E;
                    </pre>
                </div>
            </div>

            <!-- Required content -->
            <div class="tiny-12 small-9 small-offset-3">
                <h2>Required parameter</h2>
                <p>Content in the textarea is not required by default, bu can be enabled like so: <span class="tag">required: true</span>.</p>
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
    required: true
});
&#x3C;/script&#x3E;
                    </pre>
                </div>
            </div>

        </div>
    </div>
</section>

<?php include('../../_inc/footer.php'); ?>
