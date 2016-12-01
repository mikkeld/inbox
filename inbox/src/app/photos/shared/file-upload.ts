import { Component, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import {FileUploadService} from "./file-upload.service";
@Component({
  selector: 'file-upload',
  template: '<input type="file" name="image" [attr.multiple]="multiple ? true : null" (change)="upload()" >'
})
export class FileUploadComponent {
  constructor(private http: Http,
              private el: ElementRef,
              private fileUploadService: FileUploadService
  ) {}

  multiple: boolean = false;

  upload() {
    let inputEl = this.el.nativeElement.firstElementChild;

    if (inputEl.files.length == 0) return;

    let files :FileList = inputEl.files;
    const formData = new FormData();
    formData.append('image', inputEl.files[0]);

    this.fileUploadService.uploadAndAnnotate(formData)
      .subscribe(res => {
        console.log(res)
      });

    // this.http
    //   .post('http://localhost:8000/upload', formData)
    //   .subscribe()

  }
}
