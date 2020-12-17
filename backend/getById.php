<?php

require_once './connect.php';

$id = $_GET['id'];

$query = "SELECT * FROM students WHERE id = :id";

$stmt = $conn->prepare($query);
$stmt->execute(['id' => $id]);
echo json_encode([
    'users' => $stmt->fetch()
], JSON_UNESCAPED_UNICODE);
