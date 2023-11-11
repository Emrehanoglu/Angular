import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() message:string /* başka bir componentten değer alacak */
  @Output() close = new EventEmitter<void>() /* emit içerisinde bir parametre gönderimi yapmak istenirse de göndereceğin 
  parametre tipini burada belirtmek lazım, ben parametre göndermediğim için void olarak tanımladım. */
  constructor() { }

  ngOnInit(): void {
  }
  onClose(){
    this.close.emit()
  }
}
