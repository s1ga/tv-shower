import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from "@app/features/add/add.component";

const routes: Routes = [
  { path: '', component: AddComponent },
];

@NgModule({
  declarations: [AddComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class AddModule {}