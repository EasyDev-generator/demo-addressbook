// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next EasyDev generation
import { CompanyEditComponent} from './pages/company-edit/company-edit.component';
import { CompanyListComponent} from './pages/company-list/company-list.component';
import { ContactEditComponent} from './pages/contact-edit/contact-edit.component';
import { ContactListComponent} from './pages/contact-list/contact-list.component';
import { HomeComponent} from './pages/home/home.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from "./security/auth.guard";

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },
    
    /* START MY VIEWS */

    { path: 'companys/:id',  component: CompanyEditComponent , canActivate: [AuthGuard] },
    { path: 'companys',  component: CompanyListComponent , canActivate: [AuthGuard] },
    { path: 'contacts/:id',  component: ContactEditComponent , canActivate: [AuthGuard] },
    { path: 'contacts',  component: ContactListComponent , canActivate: [AuthGuard] },
    { path: 'home',  component: HomeComponent , canActivate: [AuthGuard] },

 /* END MY VIEWS */
    
    // SECURITY
    { path: 'manage-users',  component: ManageUserListComponent, canActivate: [AuthGuard], data:['ADMIN']},
    { path: 'manage-users/:id',  component: ManageUserEditComponent, canActivate: [AuthGuard], data:['ADMIN']},
    { path: 'profile',  component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}