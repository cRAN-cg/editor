import { Component, OnInit } from '@angular/core';
import * as monaco from 'monaco-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'editor';
  editor: any;
  nativeContainer: any;
  ngOnInit(): void {
    this.nativeContainer = document.getElementById('container');
    if (this.nativeContainer) {
      this.editor = monaco.editor.create(this.nativeContainer, {language: 'java'});
    }
  }
}
