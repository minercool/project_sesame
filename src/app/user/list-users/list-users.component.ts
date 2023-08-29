import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  constructor (private userServices : UserService){}
  users : any
  ngOnInit() : void  {
    this.userServices.listUsers().subscribe(
      result=>{
        this.users = result
        
      },
      error =>{
        console.log(error)
      }
    )
  }

}
