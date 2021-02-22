<!DOCTYPE html> 
    <head>
        <meta charset="utf-8">
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
     
        <link rel="stylesheet" href="style.css">
      
    </head>


    <body>
     <header class="cabecalho">
        <h1>Formulario</h1>
        <h2>cadastro Cliente</h2>
    </header>

     <main class="principal">
         <div class="conteudo">
            <div class="container_form">
                <form action=form_result.php method="POST">
                <div class="row">
                  <div class="col-25">
                    <label for="fname">Nome</label>
                  </div>
                  <div class="col-75">
                    <input type="text" id="fname" name="firstname" placeholder="Informe o primeiro nome..">
                  </div>
                </div>
                <div class="row">
                  <div class="col-25">
                    <label for="lname">Último nome</label>
                  </div>
                  <div class="col-75">
                    <input type="text" id="lname" name="lastname" placeholder="Informe o último nome..">
                  </div>
                </div>
                <div class="row">
                  <div class="col-25">
                    <label for="country">País</label>
                  </div>
                  <div class="col-75">
                    <select id="country" name="country">
                      <option value="Australia">Brasil</option>
                      <option value="Canada">Canada</option>
                      <option value="Usa">USA</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-25">
                    <label for="subject">Descrição</label>
                  </div>
                  <div class="col-75">
                    <textarea id="subject" name="subject" placeholder="Escreva o texto.." style="height:200px"></textarea>
                  </div>
                </div>
                <div class="row">
                  <input type="submit" value="Enviar">
                  
                </div>
                </form>
              </div>
         </div>

         <div class="resposta" display= none>
           <p name = "valor" id="valor1"></p>
         </div>
     </main>


     <footer class="rodape">
        Nasajon

     </footer>
        
        
    </body>
