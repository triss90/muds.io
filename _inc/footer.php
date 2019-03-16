<footer id="footer">
    <div class="container">
        <div class="row center-tiny">
            <div class="tiny-12">
                <h2>MUDS Editor</h2>
                <br><br>
                <p class="desc">Your powerful, lightweight editor.</p>
                <p class="desc">MUDS Editor only takes up ~10 KB compressed and gzipped</p>
                <br><br>
                <a href="/documentation/" class="button secondary big"><i class="fa fa-book" aria-hidden="true"></i> Documentation</a>
                <a href="/download/muds-editor-v<?php echo $mudsVersion; ?>.zip" class="button primary big" download><i class="fa fa-download" aria-hidden="true"></i> Download v<?php echo $mudsVersion; ?></a>
                <br><br><br>
                <p class="copyright">️Made with ❤️ by <a href="https://tristanwhite.info" target="_blank" title="Tristan White">Tristan White</a></p>
                <p class="copyright">&copy; <?php echo date("Y"); ?></p>
            </div>
        </div>
    </div>
</footer>

<script src="/assets/js/app.js"></script>
<script src="https://cdn.jsdelivr.net/npm/muds-editor@<?php echo $mudsVersion; ?>/muds.min.js"></script>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-62496570-5"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-62496570-5');
</script>

</body>
</html>