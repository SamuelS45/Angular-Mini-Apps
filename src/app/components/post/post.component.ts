import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postData:any;
  userID!:number

  constructor( private postServices:PostService){

  }

  ngOnInit(){
    // this.userID=''
    this.postData = []
    this.loadPost()
    console.log(this.postData)
  }

  loadPost(){
    this.postServices.getPost(this.userID).subscribe(data=>{
      this.postData.push(data)
      console.log(this.postData)
      // console.log(data)
    })
  }


}
