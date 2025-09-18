<?php
include 'connect.php';

// Collect data from POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $gender = $_POST['gender'];
    $dob = $_POST['dob'];
    $address = $_POST['address'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $country = $_POST['country'];
    $pincode = $_POST['pincode'];
    $course = $_POST['course'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // encrypted password

    // Insert query
    $sql = "INSERT INTO students (full_name, email, phone, gender, dob, address, city, state, country, pincode, course, password) 
            VALUES ('$full_name', '$email', '$phone', '$gender', '$dob', '$address', '$city', '$state', '$country', '$pincode', '$course', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "✅ Registration successful!";
    } else {
        echo "❌ Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
