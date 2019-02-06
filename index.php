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
                <a href="#0" class="button primary">Download</a>
                <a href="https://github.com/triss90/muds.io" target="_blank" class="button secondary">View on GitHub</a>
                <br><br><br><br><br><br>
                <div id="editor"></div>
            </div>
        </div>
    </div>
</header>

<section id="demo">
    <div class="container">
        <div class="row center-tiny">
            <div class="tiny-12">
                <h2>Getting started with MUDS editor</h2>
                <p>Simply paste the following snippet in your code where you want MUDS editor to appear.</p><br>
            </div>
        </div>
        <div class="row center-tiny">
            <div class="tiny-12 small-10 medium-8 large-6">
                <pre class="code"><span class="c4">&lt;!-- Include stylesheet --></span>
<span class="c1">&lt;link</span> <span class="c2">rel</span><span class="c6">=</span><span class="c3">"stylesheet"</span> <span class="c2">href</span><span class="c6">=</span><span class="c3">"/assets/css/editor.css"</span><span class="c1">></span>

<span class="c4">&lt;!-- Create the editor container --></span>
<span class="c1">&lt;div</span> <span class="c2">id</span><span class="c6">=</span><span class="c3">"editor"></span><span class="c1">&lt;/div></span>

<span class="c4">&lt;!-- Include the muds library --></span>
<span class="c1">&lt;script</span> <span class="c2">src</span><span class="c6">=</span><span class="c3">"/assets/js/editor.js"></span><span class="c1">&lt;/script></span>

<span class="c4">&lt;!-- Initialize muds editor --></span>
<span class="c1">&lt;script</span>
<span class="c5">var</span> <span class="c6">editor =</span> <span class="c5">new</span> <span class="c2">muds</span><span class="c6">({</span>
    <span class="c6">selector:</span> <span class="c3">'editor'</span>
<span class="c6">});</span>
<span class="c1">&lt;/script></span></pre>
            </div>
            <!--
            <div class="tiny-12 small-5 medium-6 large-6">
                <pre class="code"><span class="c4">/* Initialize muds editor */</span>
<span class="c5">var</span> <span class="c6">editor =</span> <span class="c5">new</span> <span class="c2">muds</span><span class="c6">({</span>
    <span class="c6">selector:</span> <span class="c3">'editor'</span><span class="c6">,</span>
    <span class="c6">menuStyle:</span> <span class="c3">'full'</span><span class="c6">,</span>
    <span class="c6">theme:</span> <span class="c3">'light'</span><span class="c6">,</span>
    <span class="c6">content:</span> <span class="c3">'prefill content'</span><span class="c6">,</span>
    <span class="c6">height:</span> <span class="c3">'300px'</span>
<span class="c6">});</span></pre>
            </div>-->
        </div>
    </div>

</section>

<footer id="footer">
    <div class="container">
        <div class="row center-tiny">
            <div class="tiny-12">
                <h2>MUDS Editor</h2>
                <br><br>
                <p class="desc">Your powerful, lightweight editor.</p>
                <br><br>
                <a href="#0" class="button secondary big">Documentation</a>
                <a href="#0" class="button primary big">Download v1.0.3</a>
                <br><br><br>
                <p class="copyright">Made with ❤ ️by <a href="" title="Tristan White">Tristan White</a></p>
                <p class="copyright">&copy; <?php echo date("Y"); ?></p>
            </div>
        </div>
    </div>
</footer>


<?php include('_inc/footer.php'); ?>

<script>
    var editor = new muds({
        selector: 'editor',
        menuStyle: 'full', // full, minimal
        theme: 'light', // dark, light
        content: '<h1>Try the muds editor today</h1><p>No matter what you\'re building, muds has you covered. From content management to email marketing, here are our customers\' most common uses:</p><ul><li>Content Management Systems (e.g. WordPress, Umbraco)</li><li>Learning Management Systems (e.g. Blackboard)</li><li>Customer Relationship Management and marketing automation (e.g. Marketo)</li></ul><br><p><a href="https://tristanwhite.info" target="_blank">Our team</a> is hard at work, creating and adding new features to take the Javascript web WYSIWYG editing capabilities to the next level.</p>',
        height: '300px',
        menuCustom: [
            'header','underline','strikeThrough','bold','italic','link','changeColor','image','undo','redo,',
            'unorderedList','orderedList','selectAll','copy','cut','delete','justifyLef','justifyCenter','justifyRight',
            'print','showHTML','showText','fullScreen'
        ]
    });
</script>
