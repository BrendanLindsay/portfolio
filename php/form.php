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
		$result='<div class="alert alert-success">Thank you for the message, i will talk to you soon!</div>';
	} else {
		$result='<div class="alert alert-danger">Huh-oh, that didnt work...try again for me?</div>';
	}
    }

/* reCAPTCHA */

    $email;$comment;$captcha;
            if(isset($_POST['email'])){
              $email=$_POST['email'];
            }if(isset($_POST['comment'])){
              $email=$_POST['comment'];
            }if(isset($_POST['g-recaptcha-response'])){
              $captcha=$_POST['g-recaptcha-response'];
            }
            if(!$captcha){
              echo '<h2>Please check the the captcha form.</h2>';
              exit;
            }
            $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LdnRSQUAAAAAG6DxswZWw_nOxCX5ssCeZNa4UOt&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);
            if($response.success==false)
            {
              echo '<h2>Sorry spammer</h2>';
            }else
            {
              echo '<h2>Thank you for the message, i will talk to you soon!</h2>';
            }

?>
