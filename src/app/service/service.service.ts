import { Injectable } from '@angular/core';
import axios from "axios";
import { HttpClient } from 'selenium-webdriver/http';
import { User } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public readonly api = "http://localhost:3000";
  public readonly todolist = 'todo-list';

  constructor() { }


  getAllPosts() {
    return axios.get(`${this.api}/${this.todolist}`)
    .then(posts => {
      return posts.data;
    })
    .catch(error => {
      console.log(error)
    })
  }

  getPostById(id: number) {
    return axios.get(`${this.api}/${this.todolist}/${id}`)
    .then(postId => {
      return postId.data;
    })
    .catch(error => {
      console.log(error);
    })
  }
  updatePost(id: any, post: any) {
    return axios.patch(`${this.api}/${this.todolist}/${id}/edit`, post)
    .then(res => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    })
  }

  deleteAll() {
    return axios.delete(this.api)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      })
  }
  createPost(data: any) {
    return axios.post(`${this.api}/create`, data)
    .then((createdPost) => {
      return createdPost.data;
    })
    .catch(error => console.log(error));
  }
  deleteById(id: any) {
    return axios.delete(`${this.api}/${this.todolist}/${id}/delete`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
  }

}
