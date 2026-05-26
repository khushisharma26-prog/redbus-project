import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private API = 'http://localhost:5000/api/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<any[]>(this.API);
  }

  createPost(formData: FormData) {
    return this.http.post(this.API, formData);
  }
}
