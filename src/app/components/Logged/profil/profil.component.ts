import { Component, OnInit } from '@angular/core';
import { detailsUser } from 'src/app/models/detailsUser.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public userDetail: detailsUser[] = [];
  public name!: string;
  public detailChange = false;
  public filters: string = '';
  public displayInput: string = '';

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

  detailsChangeOpenModale(value: string){
    this.detailChange = true;
    this.displayInput = value;
  }

  detailChangesCloseModale(event: boolean){
    this.detailChange = event;
  }
} 
