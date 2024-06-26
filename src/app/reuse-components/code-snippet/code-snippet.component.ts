import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.css']
})
export class CodeSnippetComponent {

  @Input() codeSnippet: string = '';
  @Input() copyButton: boolean = true;

  copyToClipboard(codeSnippet: string) { // Accept the code snippet as a parameter
    navigator.clipboard
      .writeText(codeSnippet)
      .then((_) => alert('Code snippet copied to clipboard!'));
  }
}
