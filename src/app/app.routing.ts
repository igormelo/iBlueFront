import { EditComponent } from "./edit/edit.component";
import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { OutputComponent } from './output/output.component';

const routes: Routes = [

    { path : '', component: FormComponent},
    { path : 'edit/:id', component: EditComponent},
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);