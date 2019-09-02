import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FileService } from './file/file.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  presentations = [];
  newsletters = [];
  archives = [];
  areaAssemblyAgendas = [];
  areaAssemblyMinutes = [];
  areaAssemblyReports = [];
  areaCommitteeAgendas = [];
  areaCommitteeMinutes = [];
  areaCommitteeReports = [];

  constructor(
    private authService: AuthService,
    private fileService: FileService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPresentations();
    this.getNewsletters();
    this.getArchives();
    this.getAreaAssemblyAgendas();
    this.getAreaAssemblyMinutes();
    this.getAreaAssemblyReports();
    this.getAreaCommitteeAgendas();
    this.getAreaCommitteeMinutes();
    this.getAreaCommitteeReports();
  }

  getPresentations(): void {
    this.fileService
      .getFiles('service/presentation')
      .subscribe(presentations => (this.presentations = presentations));
  }

  getNewsletters(): void {
    this.fileService.getFiles('service/newsletter').subscribe(newsletters => {
      this.newsletters = newsletters;
    });
  }

  getArchives(): void {
    this.fileService.getFiles('service/archives').subscribe(archives => {
      this.archives = archives;
    });
  }

  getAreaAssemblyAgendas(): void {
    this.fileService
      .getFiles('service/area-assembly/agendas')
      .subscribe(areaAssemblyAgendas => (this.areaAssemblyAgendas = areaAssemblyAgendas));
  }

  getAreaAssemblyMinutes(): void {
    this.fileService
      .getFiles('service/area-assembly/minutes')
      .subscribe(areaAssemblyMinutes => (this.areaAssemblyMinutes = areaAssemblyMinutes));
  }

  getAreaAssemblyReports(): void {
    this.fileService
      .getFiles('service/area-assembly/reports')
      .subscribe(areaAssemblyReports => (this.areaAssemblyReports = areaAssemblyReports));
  }

  getAreaCommitteeAgendas(): void {
    this.fileService
      .getFiles('service/area-committee/agendas')
      .subscribe(areaCommitteeAgendas => (this.areaCommitteeAgendas = areaCommitteeAgendas));
  }

  getAreaCommitteeMinutes(): void {
    this.fileService
      .getFiles('service/area-committee/minutes')
      .subscribe(areaCommitteeMinutes => (this.areaCommitteeMinutes = areaCommitteeMinutes));
  }

  getAreaCommitteeReports(): void {
    this.fileService
      .getFiles('service/area-committee/reports')
      .subscribe(areaCommitteeReports => (this.areaCommitteeReports = areaCommitteeReports));
  }

  logout() {
    this.authService.doLogout().then(
      res => {
        this.router.navigate(['']);
      },
      error => {
        console.log('Logout error', error);
      }
    );
  }
}
