<script>
    function imprimir() {
        console.log('imprimir')

        const tabela = document.getElementById('tabela')?.innerHTML;
        const estilo = document.getElementById('estilo')?.innerHTML;

        //console.log(tabela);
        //console.log(estilo);

        const win = window.open('','','height=700,width=700');
        win?.document.write('<html><head>')
        win?.document.write('<title>SisCaPed</title>')
        win?.document.write(estilo);   
        win?.document.write('</head>')
        win?.document.write('<body>')
        win?.document.write(tabela);
        win?.document.write('</body></html>')
        win?.print()        
    }
</script>

<table id='tabela'>
    <tbody>
        <tr>
            <td>Empresa</td><td>-----</td>
            <td>Produto</td><td>-----</td>
            <td>OM</td><td>------</td>
            <td>Analista</td><td>-----</td>
        </tr>
        <tr><td>Maturidade Tecnológica</td><td>6</td></tr>
    </tbody>    
</table>

<br>
<button on:click={imprimir} 
        type="button" 
        class="btn variant-filled">Imprimir</button>

<div id='estilo'>
    <style>
        table, th, td {
            border: 1px solid;
            border-collapse: collapse;
            margin-bottom: 10px;
        }
    </style>
</div>