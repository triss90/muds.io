<?php include('_inc/header.php'); ?>

    <div id="editor"></div>

<?php include('_inc/footer.php'); ?>

<script>
    var editor = new mrkdwn({
        selector: 'editor',
        menuStyle: 'full', // full, light
        theme: 'light', // full, light
        content: 'Test Content',
        height: "",
    });
</script>
