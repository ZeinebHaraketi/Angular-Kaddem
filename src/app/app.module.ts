import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule,NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ListprojetComponent } from './pages/projet/listprojet/listprojet.component';
import { AddProjetComponent } from './pages/projet/add-projet/add-projet.component';
import { EditProjetComponent } from './pages/projet/edit-projet/edit-projet.component';
import { ListUniversiteComponent } from './pages/universite/list-universite/list-universite.component';
import { AddUniversiteComponent } from './pages/universite/add-universite/add-universite.component';
import { EditUniversiteComponent } from './pages/universite/edit-universite/edit-universite.component';
import { AddEnseignantComponent } from './pages/enseignant/add-enseignant/add-enseignant.component';
import { ListEnseignantComponent } from './pages/enseignant/list-enseignant/list-enseignant.component';
import { EditEnseignantComponent } from './pages/enseignant/edit-enseignant/edit-enseignant.component';
import { ListDepartementComponent } from './pages/departement/list-departement/list-departement.component';
import { AddDepartementComponent } from './pages/departement/add-departement/add-departement.component';
import { EditDepartementComponent } from './pages/departement/edit-departement/edit-departement.component';
import { ListEquipeComponent } from './pages/equipe/list-equipe/list-equipe.component';
import { AddEquipeComponent } from './pages/equipe/add-equipe/add-equipe.component';
import { EditEquipeComponent } from './pages/equipe/edit-equipe/edit-equipe.component';
import { ListDetailsComponent } from './pages/detailequipe/list-details/list-details.component';
import { AddDetailsComponent } from './pages/detailequipe/add-details/add-details.component';
import { EditDetailsComponent } from './pages/detailequipe/edit-details/edit-details.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ListprojetComponent,
    AddProjetComponent,
    EditProjetComponent,
    ListUniversiteComponent,
    AddUniversiteComponent,
    EditUniversiteComponent,
    AddEnseignantComponent,
    ListEnseignantComponent,
    EditEnseignantComponent,
    ListDepartementComponent,
    AddDepartementComponent,
    EditDepartementComponent,
    ListEquipeComponent,
    AddEquipeComponent,
    EditEquipeComponent,
    ListDetailsComponent,
    AddDetailsComponent,
    EditDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
