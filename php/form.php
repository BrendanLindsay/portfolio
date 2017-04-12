<?php
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
        $from = 'Portfolio Website Inbox';
        $to = 'brendan.g.lindsay@gmail.com';
        $subject = 'New message from portfolio site!';

        $body = "From: $name\n E-Mail: $email\n Phone: $phone\n Message:\n $message";

        if (mail ($to, $subject, $body, $from)) {
		$result='<div class="alert alert-success">Thank you for the massage, i will talk to you soon!</div>';
	} else {
		$result='<div class="alert alert-danger">Huh-oh, that didnt work...try again for me?</div>';
	}
    }
    ?>
