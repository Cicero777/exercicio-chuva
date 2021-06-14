import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HeadComponent } from './head/head.component';
import { CardResumoComponent } from './card-resumo/card-resumo.component';
import { CardDiscussoesComponent } from './card-discussoes/card-discussoes.component';
import { SecaoTrabalhosComponent } from './secao-trabalhos/secao-trabalhos.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SidebarComponent,
    RodapeComponent,
    HeadComponent,
    CardResumoComponent,
    CardDiscussoesComponent,
    SecaoTrabalhosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
