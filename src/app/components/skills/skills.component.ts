import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any[];
//Probando dinanismo con ngFor y un array de Objetos
  constructor() { 
    this.skills=[{name:"CSS",percent:50},{name:"Java",percent:73},{name:"React",percent:43},{name:'Angular',percent:56}];
  }

  ngOnInit(): void {
  }

}
