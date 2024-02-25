import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  template: `
    <div class="px-4">
      <p class="text-xl font-semibold uppercase py-5 text-center">Contact</p>
      <p class="px-4 text-gray-700 text-center">
        Get in touch with us today for expert guidance and personalized assistance with all your real estate inquiries.
      </p>
      <form [formGroup]="form" (ngSubmit)="submit()" class=" border mt-5  border-gray-800 py-8 transition-all duration-500 px-5 space-y-3">
        <div class="sm:flex flex-row w-full">

         <div class="flex flex-col space-y-1 flex-1 mx-2">
             <label for="name">First Name </label>
             <input formControlName="firstname" id="firstname" type="text" class="border-none focus:outline-none  focus:ring-0  shadow-md"
             [ngClass]="{'val': (f['firstname'].touched || f['firstname'].dirty) && f['firstname'].invalid}">
             <div *ngIf="f['firstname'].touched && f['firstname'].invalid" class="alert alert-danger text-red-500">
                <div *ngIf="f['firstname'].errors?.['required']">*First name is required.</div>
                <div *ngIf="f['firstname'].errors?.['minlength']">*First name must be at least 4 characters long</div>
            </div>
        </div>
        
        <div class="flex flex-col space-y-1 flex-1 mx-2">
            <label for="lastname"> Last Name </label>
            <input formControlName="lastname" id="lastname" type="text" class="border-none focus:outline-none focus:border-none outline-none focus:ring-0  shadow-md"
            [ngClass]="{'val': (f['lastname'].touched || f['lastname'].dirty) && f['lastname'].invalid}">
            <div *ngIf="f['lastname'].touched && f['lastname'].invalid" class="alert alert-danger text-red-500">
                <div *ngIf="f['lastname'].errors?.['required']">*Last name is required.</div>
                <div *ngIf="f['lastname'].errors?.['minlength']">*Last name must be at least 4 characters long</div>
            </div>
        </div>
        
    </div>
<div class="sm:flex flex-row w-full">

    <div class="flex flex-col space-y-1 flex-1 mx-2">
        <label for="email"> Email </label>
        <input formControlName="email" id="email" type="text" class="border-none focus:outline-none focus:border-none outline-none focus:ring-0  shadow-md"
        [ngClass]="{'val': (f['email'].touched || f['email'].dirty) && f['email'].invalid}">
        <div *ngIf="f['email'].touched && f['email'].invalid" class="alert alert-danger text-red-500">
            <div *ngIf="f['email'].errors?.['required']">*Email address is required.</div>
            <div *ngIf="f['email'].errors?.['email']">*Please enter a valid email address</div>
        </div>
      </div>

      <div class="flex flex-col space-y-1 flex-1 mx-2">
        <label for="phone"> Phone </label>
        <input formControlName="phone" id="phone" type="text" class="border-none focus:outline-none focus:border-none outline-none focus:ring-0  shadow-md"
        [ngClass]="{'val': (f['phone'].touched || f['phone'].dirty) && f['phone'].invalid}">
        <div *ngIf="f['phone'].touched && f['phone'].invalid" class="alert alert-danger text-red-500">
            *Enter a valid Phone Number
        </div>
      </div>

    </div>
      <div class=" my-4 space-y-1">
          <div class="flex flex-col space-y-1 flex-1 mx-2">
              <label for="name"> Message </label>
        <textarea formControlName="message" id="message" type="text" class="border-none focus:outline-none focus:border-none outline-none focus:ring-0  shadow-md"
        [ngClass]="{'val': (f['message'].touched || f['message'].dirty) && f['message'].invalid}"></textarea>
        <div *ngIf="f['message'].touched && f['message'].invalid" class="alert alert-danger text-red-500">
            <div *ngIf="f['message'].errors?.['required']">*Message is required.</div>
        </div>
      </div>

      
     
      
    </div>
    
    <button type="submit" [disabled]="form.invalid" class=" flex  self-center mx-auto text-black uppercase border border-gray-800 px-4 py-2 leading-4 justify-center text-xl font-semibold opacity-100 disabled:opacity-55 transition-all duration-500">Submit</button>
    
    </form>
      
    </div>
  `,
  styles: `
 .val.ng-invalid:not(form){
  border-bottom: 2px solid red;
}

input{
  border-bottom: 1px solid black;
}

.ng-valid:not(form){
  border-bottom: 2px solid green;
}
`
})
export class ContactComponent {

  form = new FormGroup({
    firstname: new FormControl('', [Validators.required,Validators.minLength(4)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone : new FormControl('',[Validators.required,Validators.minLength(10)]),
    message : new FormControl('',[Validators.required]),
    });

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.form.reset()
  }
}
