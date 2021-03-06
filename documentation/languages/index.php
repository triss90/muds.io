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
                <h2>i18n Support</h2>
                <p>Include libraries with lang file. eg: <span class="tag">muds-da-DK.min.js</span>.</p>
                <br>
                <h3>Example:</h3>
                <div class="codepen" data-height="520" data-theme-id="36048" data-default-tab="html,result" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js"></pre>
                    <pre data-lang="html">
&#x3C;!-- Include the MUDS stylesheet --&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.css&#x22;&#x3E;

&#x3C;!-- Create the editor container --&#x3E;
&#x3C;textarea id=&#x22;editor&#x22;&#x3E;&#x3C;/textarea&#x3E;

&#x3C;!-- Include the MUDS library --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.js&#x22;&#x3E;&#x3C;/script&#x3E;

&#x3C;!-- Include language file --&#x3E;
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds-da-DK.min.js&#x22;&#x3E;&#x3C;/script&#x3E;

&#x3C;!-- Initialize MUDS editor --&#x3E;
&#x3C;script&#x3E;
var muds = new muds({
    selector: 'editor',
    language: 'da-DK'
});
&#x3C;/script&#x3E;
                    </pre>
                </div>

                <h2>Supported languages</h2>
                <table>
                    <thead>
                    <tr>
                        <th scope="col" width="115px">Language</th>
                        <th scope="col" width="115px">Option</th>
                        <th scope="col">CDN</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td data-label="Language">Danish</td>
                        <td data-label="Attribute"><span class="tag">'da-DK'</span></td>
                        <td data-label="CDN"><a href="https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds-da-DK.min.js">https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds-da-DK.min.js</a></td>
                    </tr>
                    <tr>
                        <td data-label="Language">German</td>
                        <td data-label="Attribute"><span class="tag">'de-DE'</span></td>
                        <td data-label="CDN"><a href="https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds-de-DE.min.js">https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds-de-DE.min.js</a></td>
                    </tr>
                    </tbody>
                </table>
                <br>
                <p>Is your language not yet supported? Download <a href="/assets/js/lang/muds-en-US.js">the template</a> and translate it yourself.</p>
            </div>

        </div>
    </div>
</section>

<?php include('../../_inc/footer.php'); ?>
