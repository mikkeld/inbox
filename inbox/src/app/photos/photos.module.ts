import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {PhotoListComponent} from "./photo-list/photo-list.component";
import {PhotosService} from './shared/photos.service';
import { PhotogroupListComponent } from './photogroup-list/photogroup-list.component';
import { PhotogroupItemComponent } from './photogroup-item/photogroup-item.component';
import { PhotosComponent } from './photos/photos.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PhotoListComponent,
    PhotogroupListComponent,
    PhotogroupItemComponent,
    PhotosComponent
  ],
  providers: [
    PhotosService
  ]
})

export class PhotosModule { }

export {PhotosService}
