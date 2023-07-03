<!-- https://github.com/simonbengtsson/jsPDF-AutoTable
https://github.com/simonbengtsson/jsPDF-AutoTable/blob/master/examples/typescript/index.ts -->

<script>
    import { jsPDF } from 'jspdf'
    import autoTable from 'jspdf-autotable'

    function gerarPDF() {
        const doc = new jsPDF()
        doc.text("hello word",12,12)
        autoTable(doc, {
            theme: 'grid',
            head: [['ID', 'Country', 'Index', 'Capital']],
            body: [
                [1, 'Finland', 7.632, 'Helsinki'],
                [2, 'Norway', 7.594, 'Oslo'],
                [3, 'Denmark', 7.555, 'Copenhagen'],
                [4, 'Iceland', 7.495, 'Reykjavík'],
                [5, 'Switzerland', 7.487, 'Bern'],
                [9, 'Sweden', 7.314, 'Stockholm'],
                [73, 'Belarus', 5.483, 'Minsk'],
                [{ content: 'Text', colSpan: 2, rowSpan: 2, styles: { halign: 'center' } }],                
            ],
        })
        autoTable(doc, {
            theme: 'grid',
            head: [['ID', 'Country', 'Index', 'Capital']],
            body: [
                [1, 'Finland', 7.632, 'Helsinki'],
                [2, 'Norway', 7.594, 'Oslo'],
                [3, 'Denmark', 7.555, 'Copenhagen'],
                [4, 'Iceland', 7.495, 'Reykjavík'],
                [5, 'Switzerland', 7.487, 'Bern'],
                [9, 'Sweden', 7.314, 'Stockholm'],
                [73, 'Belarus', 5.483, 'Minsk'],
                [{ content: 'Text', colSpan: 2, rowSpan: 2, styles: { fillColor: 'black',  halign: 'center' } }],                
            ],
        })

        const tabelaElemento = document.getElementById('tabela')
        //doc.fromHTML(tabelaElemento);

        doc.save('table.pdf')
    }

    function HTMLtoPDF() {          
        let doc = new jsPDF('l', 'mm', [1500, 1400]);
        //let pdfjs = document.querySelector('#tabela');
        let pdfjs = document.getElementById('tabela')
        console.log(pdfjs)

        doc.html(pdfjs, {
            callback: function(doc) {
                doc.save("newpdf.pdf");
            },
            x: 12,
            y: 12
        });         
    }
    
</script>

relatorio
<br>
<button on:click={ gerarPDF } 
        type="button" 
        class="btn variant-filled">Gerar PDF</button>

<button on:click={ HTMLtoPDF } 
        type="button" 
        class="btn variant-filled">HTML to PDF</button>

    
<br>
<br>
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

<div id='estilo'>
    <style>
        table, th, td {
            border: 1px solid;
            border-collapse: collapse;
            margin-bottom: 10px;
        }
    </style>
</div>