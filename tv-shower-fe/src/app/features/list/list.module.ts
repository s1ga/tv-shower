import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListItemComponent } from "@app/features/list/list-item.component";
import { ListComponent } from "@app/features/list/list.component";

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: ':edit', component: ListComponent },
];

@NgModule({
  declarations: [ListComponent, ListItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ListModule {}