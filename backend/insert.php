<?php

require_once './connect.php';

// var_dump($_POST);

$postData = file_get_contents("php://input");

if (isset($postData) && !empty($postData)) {
    $request = (object) filter_var_array(json_decode($postData, true), FILTER_SANITIZE_SPECIAL_CHARS);
    // $request = json_decode($postData);

    if (!empty($request->first_name) && !empty($request->last_name) && !empty($request->email)) {
        $firstName = $request->first_name;
        $lastName = $request->last_name;
        $email = $request->email;

        $query = "INSERT INTO students (first_name, last_name, email) VALUES (:first_name, :last_name, :email)";

        $stmt = $conn->prepare($query);
        $stmt->execute(
            [
                ':first_name' => $firstName,
                ':last_name' => $lastName,
                ':email' => $email,
            ]
        );

        $stmt->closeCursor();

        $lastInserted = $conn->lastInsertId();
        var_dump($lastInserted);
    } else {
        echo json_encode([
            "Status" => 401,
            "Error" => "Não foi possível salvar...",
        ], JSON_UNESCAPED_UNICODE);
    }
}
