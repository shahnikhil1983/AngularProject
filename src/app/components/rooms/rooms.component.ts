import { Component } from '@angular/core';
import { Room } from '../../model/rooms.model';

@Component({
  selector: 'app-rooms', 
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false; 

  //Interface type
  rooms : Room ={
    totalRooms: 5,
    availableRooms: 0,
    bookedRooms: 10,    
  };

  ngOnInit(): void{}
  //use of function is show and hide rooms 
  toggle(){
    this.hideRooms = !this.hideRooms;     
  }
}
