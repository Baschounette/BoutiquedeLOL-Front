import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() displayInput: string = '';

  constructor(private userService: UserService){}

  ngOnInit(): void {
  }

  detailChangesCloseModale(){
    this.closeModale.emit(false);
  }

}
