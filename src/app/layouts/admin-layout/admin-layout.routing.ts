import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ListprojetComponent } from 'src/app/pages/projet/listprojet/listprojet.component';
import { AddProjetComponent } from 'src/app/pages/projet/add-projet/add-projet.component';
import { EditProjetComponent } from 'src/app/pages/projet/edit-projet/edit-projet.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'projet',         component: ListprojetComponent},
    { path: 'addprojet',      component: AddProjetComponent},
    { path: 'editprojet/:idProjet',     component: EditProjetComponent}
];
