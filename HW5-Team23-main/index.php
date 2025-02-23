<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register & Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container" id="signUp" style="display: none;">
        <h1 class="form-title">Register</h1>
        <form action="register.php" method="post">
            <div><input type="text" name="fname" placeholder="First Name" class="content-input"  required></div>
            <div><input type="text" name="lname" placeholder="Last Name" class="content-input"  required></div>
            <div><input type="email" name="email" placeholder="E-Mail" class="content-input"  required></div>
            <div><input type="password" name="password" placeholder="Password" class="content-input"  required></div>
            <div><input type="submit" name="signUp" value="Sign-Up" class="btn"  required></div>
        </form>
        <p class="or">
            ---------- OR ----------
        </p>
        <div class="links">
            <p>Already Have Account ?</p>
            <button id="signInButton">Siggn-In</button>
        </div>
    </div>
    <div class="container" id="signIn">
        <h1 class="form-title">Login</h1>
        <form action="register.php" method="post">
            <div><input type="email" name="email" placeholder="E-Mail" class="content-input"  required></div>
            <div><input type="password" name="password" placeholder="Password" class="content-input"  required></div>
            <p class="Recover">
                <a href="#">Recover Password</a>
            </p>
            <div><input type="submit" name="signIn" value="Sign-In" class="btn"  required></div>
        </form>
        <p class="or">
            ---------- OR ----------
        </p>
        <div class="links">
            <p>Don't Have An Account ?</p>
            <button id="signUpButton">Sign-Up</button>
        </div>
    </div>
      <script src="script.js"></script>
</body>
</html>