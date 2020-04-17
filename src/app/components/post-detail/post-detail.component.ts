import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';

import * as $ from 'jquery';// Para usar jQuery y TS reconozca $

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [ PostService, UserService ]
})
export class PostDetailComponent implements OnInit {
  public post: Post;
  public identity;

  constructor(
    private _postService: PostService,
    private _userService: UserService,
    private _route: ActivatedRoute, // Para la ruta actual
    private _router: Router, // Para la funciones del router como, redireccion
  ) { 
    this.identity = this._userService.getIdentity();
  }

  ngOnInit() {
    this.getPost();
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
              let content = this.post.content;

              $(document).ready(function() {
                $( "#content" ).append( content );
              });

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