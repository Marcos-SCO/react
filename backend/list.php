<?php

require_once './connect.php';

$query = "SELECT * FROM students";

$stmt = $conn->prepare($query);
$stmt->execute();
echo json_encode([
    'users' => $stmt->fetchAll()
], JSON_UNESCAPED_UNICODE);
