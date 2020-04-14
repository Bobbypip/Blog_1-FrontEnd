import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [ PostService ]
})
export class PostDetailComponent implements OnInit {
  public post: Post;

  constructor(
    private _postService: PostService,
    private _route: ActivatedRoute, // Para la ruta actual
    private _router: Router // Para la funciones del router como, redireccion
  ) { }

  ngOnInit() {
    this.getPost();
    this.content();
  }

  content(){
    $( document ).ready(function() {
      console.log( "ready!" );
      $("#content").append("dsd");
  });
  }

  getPost(){
    // Sacar el id del post de la url
    this._route.params.subscribe(
      params => {
        let id = +params['id'];

        // Peticion ajax para sacar los datos del post
        this._postService.getPost(id).subscribe(
          response => {
            if(response.status == 'success'){
              this.post = response.posts;
              console.log(this.post.content);
              console.log(typeof(response.posts.content));
            }else{
              this._router.navigate(['/inicio']);
            }
          },
          error => {
            console.log(error);
            this._router.navigate(['/inicio']);
          }
        )

      }
    );
  }
}
