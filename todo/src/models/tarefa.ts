export class Tarefa{
    constructor(nomeTarefaVal: string,dataTVal:string,descricaoTVal:string,completaVal: boolean = false) {
      this.nomeTarefa = nomeTarefaVal;
      this.completo = completaVal;
      this.dataTarefa = dataTVal;
      this.descricaoTarefa= descricaoTVal;
    }
    nomeTarefa: string;
    completo: boolean;
    dataTarefa: string;
    descricaoTarefa:string;
  }