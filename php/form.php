<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $from = 'From: Portfolio Website';
    $to = 'brendan.g.lindsay@gmail.com';
    $subject = 'New message from portfolio!';

    $body = "From: $name\n E-Mail: $email\n Phone: $phone\n Message:\n $message";

    if ($_POST['submit']) {
        if (mail ($to, $subject, $body, $from)) {
            echo "<p>Thanks for the message, i'll talk to you soon!</p>";
        } else {
            echo "<p>Huh-oh, that didn't work..try again for me?</p>";
        }
    }
    ?>
