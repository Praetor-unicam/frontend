import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionService } from 'src/app/services/selection.service';
import { Analysis } from 'src/app/models/Analysis';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private selectionService: SelectionService) { }

  ngOnInit() {
  }

  public singleCountry(){
    this.selectionService.selectAnalysisType(Analysis.SINGLE);
    this.router.navigate(['/map']);
  }

  public multiCountry(){
    alert("Coming soon!");
    this.selectionService.selectAnalysisType(Analysis.MULTI);
  }

  public heatMap(){
    alert("Coming soon!");
    this.selectionService.selectAnalysisType(Analysis.HEAT);
  }

}
