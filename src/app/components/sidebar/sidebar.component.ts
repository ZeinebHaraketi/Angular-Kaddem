import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    
    { path: '/projet', title: 'ListProjet', icon: 'ni ni-laptop text-red', class: ''},
    { path: '/addprojet', title: 'AddProjet', icon: 'ni ni-fat-add text-red', class: ''},
    { path: '/editprojet/:idProjet', title: 'EditProjet', icon: 'ni ni-settings-gear-65 text-green', class: ''},
    
    { path: '/univ', title: 'ListUniversite', icon: 'ni ni-hat-3 text-blue', class: ''},
    { path: '/adduniv', title: 'AddUniv', icon: 'ni ni-fat-add text-red', class: ''},
    { path: '/edituniv/:idUniv', title: 'EditUniv', icon: 'ni ni-settings-gear-65 text-green', class: ''},
    
    { path: '/ens', title: 'ListEnseignant', icon: 'ni ni-circle-08 text-orange', class: ''},
    { path: '/addens', title: 'AddEns', icon: 'ni ni-fat-add text-red', class: ''},
    { path: '/editens/:idEns', title: 'EditEns', icon: 'ni ni-settings-gear-65 text-green', class: ''},
    
    { path: '/depart', title: 'ListDepartement', icon: 'ni ni-building text-purple', class: ''},
    { path: '/adddepart', title: 'AddDepartement', icon: 'ni ni-fat-add text-red', class: ''},
    { path: '/editdepart/:idDepart', title: 'EditDepart', icon: 'ni ni-settings-gear-65 text-green', class: ''},


    { path: '/equipe', title: 'ListEquipe', icon: 'ni ni-circle-08 text-orange', class: ''},
    { path: '/addequipe', title: 'AddEquipe', icon: 'ni ni-fat-add text-red', class: ''},
    { path: '/editequipe/:idEquipe', title: 'EditEquipe', icon: 'ni ni-settings-gear-65 text-green', class: ''},
    
    { path: '/details', title: 'ListDetails', icon: 'ni-bullet-list-67 text-purple', class: ''},
    { path: '/adddetails', title: 'AddDetails', icon: 'ni ni-fat-add text-red', class: ''},
    { path: '/editdetails/:salle', title: 'EditDetails', icon: 'ni ni-settings-gear-65 text-green', class: ''},
    

  //  { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
  //  { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
  //  { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
  //  { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
  //  { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
  //  { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
