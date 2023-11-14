import { Component, OnInit } from '@angular/core';
import { Folder } from 'src/app/models/Folder';
@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit{

  folders:Folder[] = []
  count:number = 0

  constructor(){}

  ngOnInit(){
    this.folders = [
      {
        name:'Note Folder 1'
      },
      {
        name:'Note Folder 2'
      }
    ]
    this.count=this.folders.length+1
  }
  addFolder(){
    this.folders.push({
      name: `Note Folder ${this.count++}`
    })
  }
}
