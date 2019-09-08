import { Component, OnInit } from '@angular/core';

// add a new class  -- done in previous part of tutorial  
export class Invention {
    name : String ; 
    inventor : String ; 
    year : String; 
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
// declare nameModel , inventorModel , yearModel strings to help with adding new inventions 
// make inventions an array to show multiple inventions 
  nameModel : String; 
  inventorModel : String; 
  yearModel : String; 
  inventions : Invention[]; 


    
  constructor() { 
// initialize model values to '' 
    this.nameModel = '';
    this.inventorModel = '';
    this.yearModel = '';

// create a default inventions to show when component renders on screen 
    let defaultInvention : Invention = {
      name: 'C Programming' , 
      inventor : 'Dennis Ritche' , 
      year : '1972'
    }; 

// add the invention to inventions array 
    this.inventions = [ defaultInvention ]; 
  }

  ngOnInit() {
  }


// add create Invention function for adding new inventions 

  createInvention(){

    // initialize a new invention using data coming from template [ using 2 way data binding ]
    let newInvention : Invention = {
      name: this.nameModel , 
      inventor : this.inventorModel , 
      year : this.yearModel
    };
    
    // push the newly created Invention object to inventions array 
    this.inventions.push( newInvention ); 

    // set the model values to '' again 
    this.nameModel = this.yearModel = this.inventorModel = ''; 
  }

}
