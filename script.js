
    function adicionar(n) {
     document.getElementById("visor").value += n;
    }

    function resultado () {
      var visor = document.getElementById("visor").value;
      var saida = eval(visor);
      document.getElementById("visor").value = saida;
    }
    function limpar() {
      document.getElementById("visor").value = '';
    }
    
