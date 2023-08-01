<script>
    import { justificativaImprescindibilidade,
             necessidadeEstrategicaGrau,
             necessidadeTaticaGrau } from "$lib/shared/stores";
</script>

<h3>
    <textarea bind:value={ $justificativaImprescindibilidade } 
              class="textarea" 
              rows="4" 
              placeholder="Justificativa (necessidade estratégica e tática)" />
</h3>

<table class="tg">
    <thead>
      <tr>
        <th class="tg-0pky1" rowspan="3">necessidade estratégica</th>
        <th class={ $necessidadeEstrategicaGrau==='Alta' ? 'selecionado tg-0pky' : 'tg-0pky'}>alta</th>  
        <th class={ $necessidadeEstrategicaGrau==='Alta' && $necessidadeTaticaGrau==='Baixa' ? 'selecionado tg-0pky' : 'tg-0pky'}>2</th>      
        <th class={ $necessidadeEstrategicaGrau==='Alta' && $necessidadeTaticaGrau==='Média' ? 'selecionado tg-0pky' : 'tg-0pky'}>3</th>
        <th class={ $necessidadeEstrategicaGrau==='Alta' && $necessidadeTaticaGrau==='Alta' ? 'selecionado tg-0pky' : 'tg-0pky'}>3</th>                
      </tr>
      <tr>
        <th class={ $necessidadeEstrategicaGrau==='Média' ? 'selecionado tg-0pky' : 'tg-0pky'}>média</th>  
        <th class={ $necessidadeEstrategicaGrau==='Média' && $necessidadeTaticaGrau==='Baixa' ? 'selecionado tg-0pky' : 'tg-0pky'}>1</th>      
        <th class={ $necessidadeEstrategicaGrau==='Média' && $necessidadeTaticaGrau==='Média' ? 'selecionado tg-0pky' : 'tg-0pky'}>2</th>
        <th class={ $necessidadeEstrategicaGrau==='Média' && $necessidadeTaticaGrau==='Alta' ? 'selecionado tg-0pky' : 'tg-0pky'}>3</th>                
      </tr>
      <tr>
        <th class={ $necessidadeEstrategicaGrau==='Baixa' ? 'selecionado tg-0pky' : 'tg-0pky'}>baixa</th>  
        <th class={ $necessidadeEstrategicaGrau==='Baixa' && $necessidadeTaticaGrau==='Baixa' ? 'selecionado tg-0pky' : 'tg-0pky'}>0</th>      
        <th class={ $necessidadeEstrategicaGrau==='Baixa' && $necessidadeTaticaGrau==='Média' ? 'selecionado tg-0pky' : 'tg-0pky'}>1</th>
        <th class={ $necessidadeEstrategicaGrau==='Baixa' && $necessidadeTaticaGrau==='Alta' ? 'selecionado tg-0pky' : 'tg-0pky'}>2</th>                
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-0pky1" colspan="2" rowspan="2">projeto / bem / serviço / obra / informação</td>
        <td class={ $necessidadeTaticaGrau==='Baixa' ? 'selecionado tg-0pky' : 'tg-0pky'}>baixa</td>  
        <td class={ $necessidadeTaticaGrau==='Média' ? 'selecionado tg-0pky' : 'tg-0pky'}>média</td>  
        <td class={ $necessidadeTaticaGrau==='Alta' ? 'selecionado tg-0pky' : 'tg-0pky'}>alta</td>          
      </tr>
      <tr>
        <td class="tg-0pky1" colspan="3">necessidade tática</td>      
      </tr>
    </tbody>
  </table>