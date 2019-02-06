<?php include('../_inc/header.php'); ?>

<header id="header">
    <div class="container">
        <?php include('../_inc/navigation.php'); ?>
        <div class="row">
            <div class="tiny-12 center-tiny">
            </div>
        </div>
    </div>
</header>

<section id="demo">
    <div class="container">
        <div class="row center-tiny">
            <div class="tiny-12">
                <h2>Options</h2>
            </div>
        </div>
        <div class="row center-tiny">
            <div class="tiny-12 small-10 medium-8 large-6">
                <pre class="code"><span class="c4">&lt;!-- Include stylesheet --></span>
<span class="c1">&lt;link</span> <span class="c2">rel</span><span class="c6">=</span><span class="c3">"stylesheet"</span> <span class="c2">href</span><span class="c6">=</span><span class="c3">"/assets/css/editor.css"</span><span class="c1">></span>

<span class="c4">&lt;!-- Create the editor container --></span>
<span class="c1">&lt;div</span> <span class="c2">id</span><span class="c6">=</span><span class="c3">"editor"></span><span class="c1">&lt;/div></span>

<span class="c4">&lt;!-- Include the muds library --></span>
<span class="c1">&lt;script</span> <span class="c2">src</span><span class="c6">=</span><span class="c3">"/assets/js/editor.js"></span><span class="c1">&lt;/script></span></div>

            <div class="tiny-12 small-5 medium-6 large-6">
                <pre class="code"><span class="c4">/* Initialize muds editor */</span>
<span class="c5">var</span> <span class="c6">editor =</span> <span class="c5">new</span> <span class="c2">muds</span><span class="c6">({</span>
    <span class="c6">selector:</span> <span class="c3">'editor'</span><span class="c6">,</span>
    <span class="c6">menuStyle:</span> <span class="c3">'custom'</span><span class="c6">,</span> <span class="c4">// full, minimal, custom</span>
    <span class="c6">menuCustom: [</span>
        <span class="c3">'header'<span class="c6">,</span>
        'underline'<span class="c6">,</span>
        'strikeThrough'<span class="c6">,</span>
        'bold'<span class="c6">,</span>
        'italic'<span class="c6">,</span>
        'link'<span class="c6">,</span>
        'changeColor'<span class="c6">,</span>
        'image'<span class="c6">,</span>
        'undo'<span class="c6">,</span>
        'redo'<span class="c6">,</span>
        'unorderedList'<span class="c6">,</span>
        'orderedList'<span class="c6">,</span>
        'selectAll'<span class="c6">,</span>
        'copy'<span class="c6">,</span>
        'cut'<span class="c6">,</span>
        'delete'<span class="c6">,</span>
        'justifyLeft'<span class="c6">,</span>
        'justifyCenter'<span class="c6">,</span>
        'justifyRight'<span class="c6">,</span>
        'print'<span class="c6">,</span>
        'showHTML'<span class="c6">,</span>
        'showText'<span class="c6">,</span>
        'fullScreen'</span>
    <span class="c6">],</span>
    <span class="c6">theme:</span> <span class="c3">'light'</span><span class="c6">,</span> <span class="c4">// light, dark</span>
    <span class="c6">content:</span> <span class="c3">'This is my initial content'</span><span class="c6">,</span>
    <span class="c6">height:</span> <span class="c3">'300px'</span>
<span class="c6">});</span></pre>
            </div>
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


<?php include('../_inc/footer.php'); ?>
