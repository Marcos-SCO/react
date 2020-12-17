<?php

require_once './connect.php';

// var_dump($_POST);

$postData = file_get_contents("php://input");

if (isset($postData) && !empty($postData)) {
    $request = (object) filter_var_array(json_decode($postData, true), FILTER_SANITIZE_SPECIAL_CHARS);
    // $request = json_decode($postData);

    if (!empty($request->first_name) && !empty($request->last_name) && !empty($request->email) && !empty($request->id)) {
        $id = $request->id;
        $firstName = $request->first_name;
        $lastName = $request->last_name;
        $email = $request->email;

        $query = "UPDATE students SET first_name = :first_name, last_name = :last_name, email = :email WHERE id = :id";

        $stmt = $conn->prepare($query);
        $stmt->execute(
            [
                ':id' => $id,
                ':first_name' => $firstName,
                ':last_name' => $lastName,
                ':email' => $email,
            ]
        );

        $stmt->closeCursor();
        
        echo json_encode("Atualizado com sucesso...");

    } else {
        echo json_encode([
            "Status" => 401,
            "Error" => "Não foi possível atualizar...",
        ], JSON_UNESCAPED_UNICODE);
    }
}
