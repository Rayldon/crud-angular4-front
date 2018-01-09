import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule, RouterLink } from '@angular/router'

import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaService } from './pessoa/pessoa.service';

const routes: Routes = [
  {
      path: '',
      component: AppComponent
  },
  {
      path: 'pessoa',
      component: PessoaComponent
  },
  {
      path: 'carro',
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
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
