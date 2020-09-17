<?php include __DIR__ . '/../inicio.php'; ?>

<div>
        <a href="/novo-curso" class="btn btn-primary mb-2">
            Novo Curso
        </a>
    </div>
    <ul class="list-group">
        <?php foreach ($cursos as $curso): ?>
            <li class="list-group-item">
                <?= $curso->getDescricao(); ?>
            </li>
        <?php endforeach; ?>
    </ul>

<?php include __DIR__ . '/../fim.php'; ?>