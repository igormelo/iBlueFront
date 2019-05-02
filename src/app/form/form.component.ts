import { Component, OnInit, NgZone } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { toast } from 'angular2-materialize';
import { User } from '../models/model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public posts: User[];
  constructor(private service: ServiceService, private router: Router,private zone:NgZone) { }

  ngOnInit() {
    this.service.getAllPosts()
    .then(res => {
      this.posts = res;
    })
    .catch((error) => {
      console.log(error);
    })
  }
  edit(id: any){
    this.router.navigate(['/edit',id])
  }

  onSubmit(f: NgForm) {
    let obj: User = f.value;
    if(obj.nome == '' || obj.post == '') {
      this.toastHelper('Por favor, todos os campos precisam ser preenchidos');
    } else {
    this.service.createPost(obj)
    .then(res => {
      this.posts.push(res);
      this.toastHelper('Publicando...')
      this.posts = this.posts.slice();
    })
    .catch(error => console.log(error));
    }
  }

  delete(id: any) {
    this.service.deleteById(id)
    .then(res => {
      this.toastHelper('Deletando...')
      this.posts.pop();
      this.posts = this.posts.slice();
    })
    .catch((error) => console.log(error));
  }
  
  toastHelper(msg: string) {
    toast(msg,2000)
  }

}
