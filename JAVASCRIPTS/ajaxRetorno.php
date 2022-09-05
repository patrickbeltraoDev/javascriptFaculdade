<?php

    $nome = $_POST['name'];
    $sobrenome = $_POST['sobrenome'];

?>

<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PHP Retorno</title>
    </head>
    <body>

        <div>
            <?php echo "$nome - $sobrenome;"?>
        </div>
        
    </body>
</html>