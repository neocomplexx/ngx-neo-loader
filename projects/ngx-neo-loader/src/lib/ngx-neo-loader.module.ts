import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './ngx-neo-loader.component';
import { NgxNeoLoaderService } from './ngx-neo-loader.service';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent
  ]
})
export class NgxNeoLoaderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxNeoLoaderModule,
      providers: [NgxNeoLoaderService]
    };
  }
}
