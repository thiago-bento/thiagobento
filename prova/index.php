<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700" rel="stylesheet">
    <link rel="stylesheet" href="recursos/css/estilo.css">
    <title>Curso PHP</title>
</head>
<body>
    <header class="cabecalho">
        <h1>Curso PHP</h1>
        <h2>Índice dos Exercícios</h2>
    </header>
    <main class="principal">
        <div class="conteudo">
            <nav class="modulos">
                <div class="modulo verde">
                    <h3>Desafio</h3>
                    <ul>
                        <li><a href="exercicio.php?dir=Udemy&file=switch">Exercício A</a></li>
                    </ul>
                    <ul>
                        <li><a href="exercicio.php?dir=Udemy&file=palindromo">Palindromo</a></li>
                    </ul>
                </div>
                <div class="modulo vermelho">
                    <h3>Tipos</h3>
                    <ul>
                        <li><a href="exercicio.php?dir=Udemy&file=formulario_post">Formulario Post</a></li>
                    </ul>
                    <ul>
                        <li><a href="exercicio.php?dir=Udemy&file=operador_ternario">Operador Ternario </a></li>
                    </ul>
                    <ul>
                        <li><a href="exercicio.php?dir=Udemy&file=arrays_meses">arrays_meses </a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </main>
    <footer class="rodape">
        COD3R & ALUNOS © <?= date('Y'); ?>
    </footer>
</body>
</html>