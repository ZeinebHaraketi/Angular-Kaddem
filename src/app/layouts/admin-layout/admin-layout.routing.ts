import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ListprojetComponent } from 'src/app/pages/projet/listprojet/listprojet.component';
import { AddProjetComponent } from 'src/app/pages/projet/add-projet/add-projet.component';
import { EditProjetComponent } from 'src/app/pages/projet/edit-projet/edit-projet.component';
import { ListUniversiteComponent } from 'src/app/pages/universite/list-universite/list-universite.component';
import { AddUniversiteComponent } from 'src/app/pages/universite/add-universite/add-universite.component';
import { EditUniversiteComponent } from 'src/app/pages/universite/edit-universite/edit-universite.component';
import { ListEnseignantComponent } from 'src/app/pages/enseignant/list-enseignant/list-enseignant.component';
import { AddEnseignantComponent } from 'src/app/pages/enseignant/add-enseignant/add-enseignant.component';
import { EditEnseignantComponent } from 'src/app/pages/enseignant/edit-enseignant/edit-enseignant.component';
import { ListDepartementComponent } from 'src/app/pages/departement/list-departement/list-departement.component';
import { AddDepartementComponent } from 'src/app/pages/departement/add-departement/add-departement.component';
import { EditDepartementComponent } from 'src/app/pages/departement/edit-departement/edit-departement.component';
import { ListEquipeComponent } from 'src/app/pages/equipe/list-equipe/list-equipe.component';
import { AddEquipeComponent } from 'src/app/pages/equipe/add-equipe/add-equipe.component';
import { EditEquipeComponent } from 'src/app/pages/equipe/edit-equipe/edit-equipe.component';
import { ListDetailsComponent } from 'src/app/pages/detailequipe/list-details/list-details.component';
import { AddDetailsComponent } from 'src/app/pages/detailequipe/add-details/add-details.component';
import { EditDetailsComponent } from 'src/app/pages/detailequipe/edit-details/edit-details.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },

    { path: 'projet',         component: ListprojetComponent},
    { path: 'addprojet',      component: AddProjetComponent},
    { path: 'editprojet/:idProjet',     component: EditProjetComponent},

    { path: 'univ',         component: ListUniversiteComponent},
    { path: 'adduniv',      component: AddUniversiteComponent},
    { path: 'edituniv/:idUniv',     component: EditUniversiteComponent},

    { path: 'ens',         component: ListEnseignantComponent},
    { path: 'addens',      component: AddEnseignantComponent},
    { path: 'editens/:idEns',     component: EditEnseignantComponent},

    { path: 'depart',         component: ListDepartementComponent},
    { path: 'adddepart',      component: AddDepartementComponent},
    { path: 'editdepart/:idDepart',     component: EditDepartementComponent},

    { path: 'equipe',         component: ListEquipeComponent},
    { path: 'addequipe',      component: AddEquipeComponent},
    { path: 'editequipe/:idEquipe',     component: EditEquipeComponent},


    { path: 'details',         component: ListDetailsComponent},
    { path: 'adddetails',      component: AddDetailsComponent},
    { path: 'editdetails/:salle',     component: EditDetailsComponent},


];
