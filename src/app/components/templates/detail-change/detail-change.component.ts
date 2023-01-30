import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { detailsUser } from 'src/app/models/detailsUser.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail-change',
  templateUrl: './detail-change.component.html',
  styleUrls: ['./detail-change.component.css']
})
export class DetailChangeComponent implements OnInit {

  @Output() closeModale: EventEmitter<boolean> = new EventEmitter();
  
  @Input() userDetail: detailsUser[] = [];
  public detailsChanged!: detailsUser;

  @Input() displayInput: string = '';
  
  

  constructor(private userService: UserService){}

  ngOnInit(): void {
  }

  detailChangesCloseModale(){
    this.closeModale.emit(false);
  }

  detailChange(user: NgForm){
    this.detailsChanged = this.userDetail[0];
    switch(this.displayInput) {
      case 'name': this.detailsChanged.name = user.value.name; break;
      case 'gender': this.detailsChanged.gender = user.value.gender; break;
      case 'lastName': this.detailsChanged.lastName = user.value.lastName; break;
      case 'firstName': this.detailsChanged.firstName = user.value.firstName; break;
      case 'address': this.detailsChanged.address = user.value.address; break;
      case 'zipCode': this.detailsChanged.zipCode = user.value.zipCode; break;
      case 'city': this.detailsChanged.city = user.value.city; break;
      case 'mail': this.detailsChanged.mail = user.value.mail; break;
      case 'phoneNumber': this.detailsChanged.phoneNumber = user.value.phoneNumber; break;
      case 'description': this.detailsChanged.description = user.value.description; break;
      case 'image': this.detailsChanged.detailImage = user.value.detailImage; break;
    }
    this.userService.detailChangeFromService(this.detailsChanged).subscribe(res => {
      this.detailChangesCloseModale();
      console.log(res);
    })
  }

}
