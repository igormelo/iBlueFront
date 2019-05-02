import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { toast } from 'angular2-materialize';
import { User } from '../models/model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private id: number;
  public post: User;
  constructor(private service: ServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
      this.id = params['id'];
     })
  }

  update(event: any) {
    if(!event) {
      this.toastHelper('O post deve se preenchido.')
    } else {
    this.service.updatePost(this.id, event)
    .then(() => {
      this.toastHelper('Atualizando post...');
      setTimeout(() => {
        this.router.navigate(['']);
      },1000)
    })
  }
  }

  toastHelper(msg: string) {
    toast(msg,2000)
  }

}
