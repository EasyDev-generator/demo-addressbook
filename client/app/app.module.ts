// DEPENDENCIES
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


// SECURITY
import { SecurityService } from './security/services/security.service';
import { TokenEmitter } from './security/token-emitter';
import { TokenInterceptor } from './security/token-interceptor';
import { AuthenticationService } from './security/authentication.service';
import { AuthGuard } from "./security/auth.guard";
import { UserService } from './security/services/user.service';

// SECURITY VIEWS
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ProfileComponent } from './security/profile/profile.component';
import { ModalChangePasswordComponent } from './components/modal-change-password.component';
import { LoginComponent } from './pages/login/login.component';

/* START MY VIEWS IMPORTS*/
// Do not edit this comment content, it will be overwritten in next EasyDev generation
import { CompanyEditComponent } from './pages/company-edit/company-edit.component';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { HomeComponent } from './pages/home/home.component';

/* END MY VIEWS IMPORTS*/

/* START MY SERVICES IMPORTS*/
// Do not edit this comment content, it will be overwritten in next EasyDev generation
import { CompanyService } from './services/company.service';
import { ContactService } from './services/contact.service';

/* END MY SERVICES IMPORTS*/

// LAYOUT
import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { SearchPipe } from './pipes/search.pipe';
import { MaterialModule } from "./material.module";
import { ModalRemoveComponent } from './components/modal-remove.component';
import { MD_ERROR_GLOBAL_OPTIONS, showOnDirtyErrorStateMatcher } from "@angular/material";

// DECLARE APPLICATION MODULE
@NgModule({
  bootstrap: [ 
    AppComponent 
  ],
  imports: [  
    AppRoutingModule, // ROUTES
    MaterialModule, // MATERIAL THEME
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule,
    HttpModule
  ],
  declarations: [
    // LAYOUT
    AppComponent, 
    NavbarComponent,
    ModalRemoveComponent,
    
     // SECURITY
    LoginComponent,
    ProfileComponent,
    ManageUserListComponent,
    ManageUserEditComponent,
    ModalChangePasswordComponent,
    
    /* START DECLARATIONS */
// Do not edit this comment content, it will be overwritten in next EasyDev generation
    CompanyEditComponent,
    CompanyListComponent,
    ContactEditComponent,
    ContactListComponent,
    HomeComponent,
 /* END DECLARATIONS */
    
    // PIPE
    SearchPipe
  ],
  entryComponents: [
    ModalRemoveComponent,
    ModalChangePasswordComponent
  ],
  providers:    [
    /* START PROVIDERS */
// Do not edit this comment content, it will be overwritten in next EasyDev generation
    CompanyService,
    ContactService,
 /* END PROVIDERS */
    
    // SECURITY
    AuthGuard,
    AuthenticationService,
    UserService,
    SecurityService,
    TokenEmitter,
    {provide: RequestOptions, useClass: TokenInterceptor},
    {provide: MD_ERROR_GLOBAL_OPTIONS, useValue: {errorStateMatcher: showOnDirtyErrorStateMatcher}}
  ],
})
export class AppModule { }
