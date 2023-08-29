import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  constructor(private userService : UserService , private router : Router ){}

  ngOnInit() : void {

  }

  addUser(form : any){
    this.userService.addUser(form.value).subscribe(
      result=>{
        Swal.fire({
          title: 'Sweet!',
          text: 'You just added a new user',
          imageUrl: 'https://i.imgflip.com/qk55o.jpg?a470280',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
        this.router.navigate(['/list-users'])
      },
      error=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'email already exist',
        })
      }
    )
  }

}
