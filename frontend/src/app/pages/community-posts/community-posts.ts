import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommunityService } from '../../services/community.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-community-posts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './community-posts.html',
  styleUrls: ['./community-posts.css']
})
export class CommunityPostsComponent implements OnInit {

  posts: any[] = [];

  newPost = {
    userName: '',
    title: '',
    content: ''
  };

  selectedFile: File | null = null;

  newComment: any = {};

  constructor(
  private service: CommunityService,
  public lang: LanguageService  
) {}

  ngOnInit(): void {
    this.loadPosts();
  }

loadPosts(): void {
  this.service.getPosts().subscribe((res: any[]) => {
    this.posts = res;

    this.posts.forEach(post => {
      if (!this.newComment[post._id]) {
        this.newComment[post._id] = { userName: '', text: '' };
      }
    });
  });
}


  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  submitPost(): void {
    const formData = new FormData();
    formData.append('userName', this.newPost.userName);
    formData.append('title', this.newPost.title);
    formData.append('content', this.newPost.content);

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.service.addPost(formData).subscribe(() => {
      this.newPost = { userName: '', title: '', content: '' };
      this.selectedFile = null;
      this.loadPosts();
    });
  }

  // ❤️ LIKE POST (FIXED POSITION)
  like(postId: string): void {
    this.service.likePost(postId).subscribe(() => {
      this.loadPosts();
    });
  }

  submitComment(postId: string): void {
  const commentData = this.newComment[postId];

  if (!commentData || !commentData.userName || !commentData.text) {
    alert('Please enter name and comment');
    return;
  }

  this.service.addComment(postId, {
    userName: commentData.userName,
    text: commentData.text
  }).subscribe(() => {
    this.newComment[postId] = { userName: '', text: '' };
    this.loadPosts();
  });
}}
