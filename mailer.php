<?php

$username = 'tw@servicepoint.dk';
$password = 'Dv3sgO1u';
$folder = 'INBOX';
$hostname = '{outlook.office365.com:993/imap/ssl/novalidate-cert}' . $folder;
$connection = imap_open($hostname,$username,$password,OP_READONLY) or die('Cannot connect to IMAP: ' . imap_last_error());

// Get all messages
$messages = imap_search($connection,'ALL');

foreach($messages as $message) {
    $header = imap_header($connection, $message);
    $body = imap_body($connection, $message);

    $name = $header->from[0]->personal;
    $email = $header->from[0]->mailbox."@".$header->from[0]->host;
    $me = $header->to[0]->mailbox."@".$header->to[0]->host;
    $subject = $header->subject;

    echo "<b>Name:</b> " . $name . "<br>";
    echo "<b>From:</b> " . $email . "<br>";
    echo "<b>To:</b> " . $me . "<br>";
    echo "<b>Subject:</b> " . $subject . "<br>";

    //phpinfo();
    echo "<pre>";
    //var_dump($body)  . "<br>";
    echo "</pre>";
    echo "<hr>";
}

?>
