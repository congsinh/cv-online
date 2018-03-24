<?php
/**
 * Created by PhpStorm.
 * User: sinh
 * Date: 2/25/18
 * Time: 8:05 PM
 */
function sendmail($name,$subject,$email,$msg){
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->isSMTP();                            // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';             // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                     // Enable SMTP authentication
    $mail->Username = 'cclt040028@gmail.com';          // SMTP username
    $mail->Password = 'Sinh01697217252'; // SMTP password
    $mail->SMTPSecure = 'tls';                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                          // TCP port to connect to

    $mail->setFrom('cclt040028@gmail.com');
    $mail->addReplyTo($email);
    $mail->addAddress('cclt040028@gmail.com');   // Add a recipient

    $mail->isHTML(true);  // Set email format to HTML
    $bodyContent = "<p>$name</p>";
    $bodyContent .= "<p>$email</p>";
    $bodyContent .= "<p>$subject</p>";
    $bodyContent .= "<p>$msg</p>";

    $mail->Subject = 'Email from My CV Online';
    $mail->Body    = $bodyContent;
    if(!$mail->send()) {
        echo "<div id='notice' class='alert alert-danger'>Đã xảy ra sự cố ! Mail chưa được gửi đi ! ";
    } else {
        echo  "<div id='notice' class='alert alert-success'>Mail đã được gửi đi ! ";
    }
}
