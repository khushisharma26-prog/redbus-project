import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private API = `${API_URL}/api`;

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<any[]>(`${this.API}/posts`);
  }

  createPost(formData: FormData) {
    return this.http.post(`${this.API}/posts`, formData);
  }
}