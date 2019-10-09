import {Component} from '@angular/core';
import {NgxFileDropEntry} from 'ngx-file-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fileNames: string[] = ['a file', 'another file'];
  fileOver = false;

  onFileDrop($event: NgxFileDropEntry[]) {
    for (const item of $event) {
      this.fileNames.push(item.fileEntry.name);
    }
    this.fileOver = false;
  }

  onFileOver($event: any) {
    this.fileOver = true;
  }

  onFileLeave($event: any) {
    this.fileOver = false;
  }
}
