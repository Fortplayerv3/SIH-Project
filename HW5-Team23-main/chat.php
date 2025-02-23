<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

$mysqli = new mysqli("localhost", "root", "", "login");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $message = $mysqli->real_escape_string($_POST['message']);
    
    if (empty($message)) {
        echo "Error: Message cannot be empty.";
        exit();
    }
    
    if (!preg_match("/^[a-zA-Z0-9\s]+$/", $message)) {
        echo "Error: Message contains invalid characters.";
        exit();
    }
    
    $user_id = $_SESSION['user_id'];
    $mysqli->query("INSERT INTO messages (user_id, message) VALUES ('$user_id', '$message')");
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Chat</title>
    <link rel="stylesheet" href="chat.css">
</head>
<body>
    <h1>Community Chat</h1>
    <div id="chat-box">
        <?php
        $result = $mysqli->query("SELECT messages.message, users.firstname, messages.timestamp FROM messages JOIN users ON messages.user_id = users.id ORDER BY messages.timestamp DESC");

        while ($row = $result->fetch_assoc()) {
            echo "<p><strong>{$row['firstname']}:</strong> {$row['message']} <em>{$row['timestamp']}</em></p>";
        }
        ?>
    </div>
    <form method="post" action="chat.php">
        <textarea name="message" required></textarea>
        <input type="submit" value="Send">
    </form>
</body>
</html>
