import { Component } from "@angular/core";

@Component({
  selector: 'app-list',
  template: `
    <div class="container mx-auto mt-10">
      <div class="flex flex-wrap gap-5">
        <app-list-item />
      </div>
    </div>
  `
})
export class ListComponent {}