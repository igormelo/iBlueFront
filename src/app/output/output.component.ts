import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { User } from '../models/model';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
 @Output() objeto = new EventEmitter();
 @Input() id: number;
 public post: User;
  constructor(private service: ServiceService) { }

  ngOnInit() {
      this.service.getPostById(this.id).then((res) => {
      this.post = res;
    })
  }
  update(newPost: any) {
    var obj = { 
      post: newPost
    }
    if(!newPost){
      this.toastHelper('O post deve se preenchido.')
    } else {
      this.objeto.emit(obj);
    }
  }

  toastHelper(msg: string) {
    toast(msg,2000)
  }

}
