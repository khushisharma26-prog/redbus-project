import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  private API = `${API_URL}/api/community`;

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