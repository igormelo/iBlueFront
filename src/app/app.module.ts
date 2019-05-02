import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReversePipe } from './service/reverse.pipe';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { EditComponent } from './edit/edit.component';
import { routing } from './app.routing';
import { FormComponent } from './form/form.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    EditComponent,
    FormComponent,
    OutputComponent
  ],
  imports: [
    FormsModule,
    routing,
    BrowserModule,
    MaterializeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
