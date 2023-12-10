import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from '../../model/rooms.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit{
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  //Interface type
  rooms: Room = {
    totalRooms: 5,
    availableRooms: 20,
    bookedRooms: 10,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner,Free Wi-fi,TV, Kitchen',
      price: 500,
      photos: 'https:booking.com',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 4.5,
    },
    {
      roomNumber: 2,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner,Free Wi-fi,TV, Kitchen',
      price: 500,
      photos: 'https:booking.com',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 3.4,
    },
    {
      roomNumber: 3,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner,Free Wi-fi,TV, Kitchen',
      price: 1000,
      photos: 'https:booking.com',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 2.6,
    },
    {
      roomNumber: 4,
      roomType: 'Private suite',
      amenities: 'Air Conditioner,Free Wi-fi,TV, Kitchen',
      price: 1500,
      photos: 'https:booking.com',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 2.7,
    },
  ];

  constructor(){}

  ngOnInit(): void {}
  //use of function is show and hide rooms
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
