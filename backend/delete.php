<?php

require_once './connect.php';

if (isset($_GET['id'])) {
    $id = filter_var(json_decode($_GET['id'], true), FILTER_SANITIZE_SPECIAL_CHARS);

    if (!empty($id)) {

        $query = "DELETE FROM students WHERE id = :id";

        $stmt = $conn->prepare($query);
        $stmt->execute(
            [
                ':id' => $id,
            ]
        );

        $stmt->closeCursor();

        echo "Deletado...";
    } else {
        echo json_encode([
            "Status" => 401,
            "Error" => "Não foi possível deletar...",
        ], JSON_UNESCAPED_UNICODE);
    }
}
