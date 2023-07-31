<script>
    import { justificativaDificuldadeObtencao,
             disponibilidadeProdutivaGrau,
             disponibilidadeLogisticaGrau } from "$lib/shared/stores";
</script>

<h3>
    <textarea bind:value={ $justificativaDificuldadeObtencao } 
              class="textarea" 
              rows="4" 
              placeholder="Justificativa (disponibilidade logística e produtiva)" />
</h3>

<table class="tg">
    <thead>
      <tr>
        <th class="tg-0pky1" rowspan="3">disponibilidade produtiva</th>        
        <th class={ $disponibilidadeProdutivaGrau==='Baixa' ? 'selecionado' : 'tg-0pky'}>baixa</th>
        <th class={ $disponibilidadeProdutivaGrau==='Baixa' && $disponibilidadeLogisticaGrau==='Alta' ? 'selecionado' : 'tg-0pky'}>1</th>
        <th class={ $disponibilidadeProdutivaGrau==='Baixa' && $disponibilidadeLogisticaGrau==='Média' ? 'selecionado' : 'tg-0pky'}>2</th>
        <th class={ $disponibilidadeProdutivaGrau==='Baixa' && $disponibilidadeLogisticaGrau==='Baixa' ? 'selecionado' : 'tg-0pky'}>3</th>        
      </tr>
      <tr>
        <th class={ $disponibilidadeProdutivaGrau==='Média' ? 'selecionado' : 'tg-0pky'}>média</th>
        <th class={ $disponibilidadeProdutivaGrau==='Média' && $disponibilidadeLogisticaGrau==='Alta' ? 'selecionado' : 'tg-0pky'}>0</th>
        <th class={ $disponibilidadeProdutivaGrau==='Média' && $disponibilidadeLogisticaGrau==='Média' ? 'selecionado' : 'tg-0pky'}>2</th>
        <th class={ $disponibilidadeProdutivaGrau==='Média' && $disponibilidadeLogisticaGrau==='Baixa' ? 'selecionado' : 'tg-0pky'}>3</th>                
      </tr>
      <tr>
        <th class={ $disponibilidadeProdutivaGrau==='Alta' ? 'selecionado' : 'tg-0pky'}>alta</th>
        <th class={ $disponibilidadeProdutivaGrau==='Alta' && $disponibilidadeLogisticaGrau==='Alta' ? 'selecionado' : 'tg-0pky'}>0</th>
        <th class={ $disponibilidadeProdutivaGrau==='Alta' && $disponibilidadeLogisticaGrau==='Média' ? 'selecionado' : 'tg-0pky'}>0</th>
        <th class={ $disponibilidadeProdutivaGrau==='Alta' && $disponibilidadeLogisticaGrau==='Baixa' ? 'selecionado' : 'tg-0pky'}>1</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-0pky1" colspan="2" rowspan="2">bem / serviço / obra / informação</td>
        <td class={ $disponibilidadeLogisticaGrau==='Alta' ? 'selecionado' : 'tg-0pky'}>alta</td>
        <td class={ $disponibilidadeLogisticaGrau==='Média' ? 'selecionado' : 'tg-0pky'}>média</td>
        <td class={ $disponibilidadeLogisticaGrau==='Baixa' ? 'selecionado' : 'tg-0pky'}>baixa</td>        
      </tr>
      <tr>
        <td class="tg-0pky1" colspan="3">disponibilidade logística</td>      
      </tr>
    </tbody>
  </table>