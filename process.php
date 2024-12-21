<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = htmlspecialchars($_POST['fullName']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $dob = htmlspecialchars($_POST['dob']);
    $gender = htmlspecialchars($_POST['gender']);
    $address = htmlspecialchars($_POST['address']);

    $output = "
        <div class='display-item'><strong>Full Name:</strong> <span>$fullName</span></div>
        <div class='display-item'><strong>Email:</strong> <span>$email</span></div>
        <div class='display-item'><strong>Phone:</strong> <span>$phone</span></div>
        <div class='display-item'><strong>Date of Birth:</strong> <span>$dob</span></div>
        <div class='display-item'><strong>Gender:</strong> <span>$gender</span></div>
        <div class='display-item'><strong>Address:</strong> <span>$address</span></div>
    ";

    echo $output;
}
?>