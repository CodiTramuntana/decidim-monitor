import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InstallationComponent } from './installation/installation.component';
import { VersionerService } from './versioner.service';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/api'
  }),
});

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  declarations: [
    AppComponent,
    InstallationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ApolloModule.forRoot(provideClient),
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    HttpModule
  ],
  providers: [VersionerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
