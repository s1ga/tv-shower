import { Component, inject } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  // private tvShowsService = inject(FormBuilder);
  
  public showGroup = this.fb.group({
    title: ['', Validators.required],
    coverUrl: ['', Validators.required],
    rating: [1, Validators.required],
  });

  protected submit(event: Event): void {
    event.preventDefault();
    
    this.showGroup.markAllAsTouched();
    if (this.showGroup.errors) return;

    // service logic
  }
}