import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  private API = 'http://localhost:5000/api/community';

  constructor(private http: HttpClient) {}

  // GET ALL POSTS
  getPosts() {
    return this.http.get<any[]>(this.API);
  }

  // CREATE POST
  addPost(data: FormData) {
    return this.http.post(this.API, data);
  }

  // ADD COMMENT
  addComment(postId: string, comment: any) {
    return this.http.post(
      `${this.API}/${postId}/comments`,
      comment
    );
  }

  // ❤️ LIKE POST
  likePost(postId: string) {
    return this.http.post(
      `${this.API}/${postId}/like`,
      {}
    );
  }
}
