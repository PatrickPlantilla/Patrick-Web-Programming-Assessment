<?php
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "assessmentdatabase";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>