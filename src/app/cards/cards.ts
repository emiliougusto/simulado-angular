import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jogador } from '../Shared/models/jogador';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {
  @Input() nome: string = '';
  @Input() idade: number = 0;
  @Input() numero: number = 0;
  @Input() foto: string = '';
  @Input() posicao: string = '';
  @Output() escalar = new EventEmitter<Jogador>();

  toJogador(): Jogador {
    return new Jogador(this.nome, this.idade, this.numero, this.posicao, this.foto);
  }

  Escalar(){
    this.escalar.emit(this.toJogador());
  }
}
