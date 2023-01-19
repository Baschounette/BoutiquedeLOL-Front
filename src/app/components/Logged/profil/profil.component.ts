import { DatePipe, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { detailsUser } from 'src/app/models/detailsUser.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  public userDetail: detailsUser[] = [];
  public name!: string;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getAllUserDetails();
  }

  getAllUserDetails(){
    this.name = localStorage.getItem("Name") ?? ""
    this.userService.userDetailsFromService(this.name).subscribe((res: detailsUser[]) => {
      this.userDetail = res;
      console.log(res);
    }) 
  }
} 
