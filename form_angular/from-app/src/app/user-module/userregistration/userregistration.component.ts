import { Component } from '@angular/core';

@Component({
  selector: 'app-userregistration',
  standalone: false,
  templateUrl: './userregistration.component.html',
  styleUrl: './userregistration.component.css'
})
export class UserregistrationComponent {
  // datalist={
  //   confirmPassword:" ",
  //   contactMethod: " ",
  //   email:" ",
  //   gender:" ",
  //   newsletter:" ",
  //   password:" ",
  //   username:" "
  // };

  datalist:any[]=[];
  onSubmit(form: any) {
    console.log('User Registration Form Data:', form.value);
      this.datalist.push(form.value);
  }
}
