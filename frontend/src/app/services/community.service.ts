import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  private API = 'http://localhost:5000/api/community';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<any[]>(this.API);
  }

  addPost(data: FormData) {
    return this.http.post(this.API, data);
  }

  addComment(postId: string, comment: any) {
    return this.http.post(`${this.API}/${postId}/comments`, comment);
  }

  likePost(postId: string) {
    return this.http.post(`${this.API}/${postId}/like`, {});
  }
}