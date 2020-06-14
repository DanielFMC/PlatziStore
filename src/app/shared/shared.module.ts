import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { GroupbyidPipe } from './pipes/groupbyid/groupbyid.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    GroupbyidPipe,
  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    GroupbyidPipe,
  ],
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
