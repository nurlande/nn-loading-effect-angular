import { NgModule } from '@angular/core';
import { NnLoadingEffectAngularComponent } from './nn-loading-effect-angular.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    NnLoadingEffectAngularComponent,
    LoadingComponent
  ],
  imports: [
  ],
  exports: [
    NnLoadingEffectAngularComponent,
    LoadingComponent
  ]
})
export class NnLoadingEffectAngularModule { }
