import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tourist } from '../tourist';
import { TouristService } from '../tourist.service';

@Component({
  selector: 'app-createtourist',
  templateUrl: './createtourist.component.html',
  styleUrls: ['./createtourist.component.css']
})
export class CreatetouristComponent implements OnInit {


  tourist: Tourist = new Tourist();
  constructor(private touristService: TouristService,
    private router: Router) { }

  ngOnInit(): void {
  }
   
  saveTourist(){
    this.touristService.createTourist(this.tourist).subscribe( data =>{
      console.log(data);
      this.goToTouristList();
    },
    error => console.log(error));
  }

  goToTouristList(){
    this.router.navigate(['/tourists']);
  }

  onSubmit(){
    console.log(this.tourist);
    this.saveTourist();
    

  }

}
