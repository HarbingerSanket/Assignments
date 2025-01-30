import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported
import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserregistrationComponent } from './userregistration/userregistration.component';

@NgModule({
  declarations: [UserregistrationComponent],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    FormsModule // Ensure FormsModule is imported here
  ],
  exports: [UserregistrationComponent],
})
export class UserModuleModule { }