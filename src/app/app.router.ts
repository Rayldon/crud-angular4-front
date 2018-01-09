import { Routes, RouterModule } from '@angular/router'
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

export class AppRoutingModule { }