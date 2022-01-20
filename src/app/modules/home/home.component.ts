import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../config/model/user';
import { AuthService } from '../config/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public formGroup!: FormGroup;
  public user!: User;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  public userAuthentication(): void {
    this.authService.userAuthentication(this.getUser()).subscribe(
      value => {
        if (value != 0) {
          this.user = value;
          this.router.navigate(['catalog']);
        } else {
          this.formGroup.get('nameUser')?.patchValue('teste')
        }
      }
    )
  }

  private getUser(): User {
    return {
      ...new User(),
      name: this.formGroup.get('nameUser')?.value,
      password: this.formGroup.get('password')?.value
    }
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      nameUser: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

}
