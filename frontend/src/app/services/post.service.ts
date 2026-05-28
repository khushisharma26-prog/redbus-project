import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private API = 'https://redbus-project-1-zvof.onrender.com';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<any[]>(this.API);
  }

  createPost(formData: FormData) {
    return this.http.post(this.API, formData);
  }
}
