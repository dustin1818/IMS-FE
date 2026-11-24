import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  name = '';
  email = '';
  message = '';

  openEmail(): void {
    const body = this.email ? this.message + '\n\nReply to: ' + this.email : this.message;
    window.location.href = 'mailto:ims@gmail.com?subject=' + encodeURIComponent(this.name) + '&body=' + encodeURIComponent(body);
  }
}
