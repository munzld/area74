import { Component, OnInit } from '@angular/core';
import { DistrictService } from '../district.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  districts = [];

  constructor(private districtService: DistrictService) { }

  ngOnInit() {
    this.getDistricts();
  }

  getDistricts(): void {
    this.districtService.getDistricts().subscribe(districts => this.districts = districts);
  }

}