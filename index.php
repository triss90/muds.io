<?php include('_inc/header.php'); ?>

<header id="header">
    <div class="container">
        <?php include('_inc/navigation.php'); ?>
        <div class="row">
            <div class="tiny-12 center-tiny">
                <h1>MUDS Editor, <i>the</i> lightest WYSIWYG Editor</h1>
                <br>
                <br>
                <p class="desc">Beautiful Javascript web editor that's easy to integrate for developers and your users will simply fall in love with its clean design.</p>
                <br><br>
                <br>
                <br>
                <a href="/download/muds-editor-v<?php echo $mudsVersion; ?>.zip" class="button primary" download><i class="fa fa-download" aria-hidden="true"></i> Download v<?php echo $mudsVersion; ?></a>
                <a href="https://github.com/triss90/muds.io" target="_blank" class="button secondary"><i class="fa fa-github" aria-hidden="true"></i> View on GitHub</a>
                <br><br><br><br><br><br>
                <textarea id="editor">
                    <h1>Try the MUDS editor today</h1><p>No matter what you are building, MUDS has you covered. From content management to email marketing, here are our customers' most common uses:</p><ul><li>Content Management Systems</li><li>Learning Management Systems</li><li>Customer Relationship Management and marketing automation</li></ul><br><p><a href="https://tristanwhite.info" target="_blank">Our team</a> is hard at work, creating and adding <a href="https://muds.io/changelog/">new features</a> to take the Javascript web WYSIWYG editing capabilities to the next level.</p><blockquote class="muds-quote">The Muds editor has proven to seamlessly integrate with my webapp. It has offered me endless customisability, so as to suit my needs.<br>- Ronan Richardson</blockquote><br><h2>Initialise the MUDS editor</h2><pre>var muds = new muds({selector: "editor"});</pre>
                </textarea>
            </div>
            <div class="tiny-12">
                <br>
                <p>
                    <input class="tgl tgl-light" id="cb1" type="checkbox" />
                    <label class="tgl-btn" for="cb1"></label>
                    <strong style="position:relative; bottom:10px; left:5px;">Try our newest theme "spectral"</strong>
                </p>

            </div>
        </div>
    </div>
</header>

<section id="demo">
    <div class="container">
        <div class="row">
            <div class="tiny-12">
                <h2>Getting started with MUDS editor</h2>
                <p>Simply paste the following snippet in your code where you want MUDS editor to appear.</p><br>
            </div>
        </div>
        <div class="row">
            <div class="tiny-12 ">

                <div class="codepen" data-height="410" data-theme-id="36048" data-default-tab="html" data-user="triss90" data-slug-hash="87854d8d260cfeef702dee5310ba6188" data-editable="false" data-prefill='{"title":"MUDS - EDITOR","tags":[],"stylesheets":[],"scripts":[]}'>
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
    selector: &#x27;editor&#x27;
});
&#x3C;/script&#x3E;
                    </pre>
                    <pre data-lang="scss" data-option-autoprefixer></pre>
                    <pre data-lang="js"></pre>
                </div>

                <p>Or install the library with NPM: <span class="tag">npm i muds-editor</span>. Alternatively you can <a href="/download/muds-editor-v<?php echo $mudsVersion; ?>.zip" download>download the newest version</a> and run MUDS locally.</p><br>

            </div>
        </div>
    </div>

</section>

<?php include('_inc/footer.php'); ?>

<script>
    var muds = new muds({
        selector: 'editor',
        menuStyle: 'full',
        height: '400px',
        characterCount: true,
        placeholder: 'This is a MUDS editor placeholder 😉'
    });

    function themeSwitcher() {
        var editor = document.getElementById('editor');
        if (editor.classList.contains('light') === true) {
            editor.classList.remove('light');
            editor.classList.add('spectral');
        } else if (editor.classList.contains('spectral') === true) {
            editor.classList.remove('spectral');
            editor.classList.add('light');
        }
    }
    var toggle = document.getElementById('cb1');
    toggle.addEventListener('change', function() {
        themeSwitcher();
    });


</script>
