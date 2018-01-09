import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule, RouterLink } from '@angular/router'

import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';

const routes: Routes = [
  {
      path: '',
      component: AppComponent
  },
  {
      path: 'pessoa',
      component: PessoaComponent
  }   
];

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
