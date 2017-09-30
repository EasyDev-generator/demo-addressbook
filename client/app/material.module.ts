/**
 * Import here all the material modules
 * 
 * Documentation at:
 * https://material.angular.io
 * 
 */
import { 
  MdDialogModule, 
  MdButtonModule, 
  MdCheckboxModule, 
  MdInputModule, 
  MdCardModule, 
  MdSelectModule,
  MdToolbarModule,
  MdMenuModule,
  MdIconModule,
  MdListModule,
  MdChipsModule
} from '@angular/material';
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    MdDialogModule, 
    MdButtonModule, 
    MdCheckboxModule, 
    MdInputModule, 
    MdCardModule, 
    MdSelectModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdListModule,
    MdChipsModule],
  exports: [
    MdDialogModule, 
    MdButtonModule, 
    MdCheckboxModule, 
    MdInputModule, 
    MdCardModule, 
    MdSelectModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdListModule,
    MdChipsModule],
})
export class MaterialModule { }