import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-github-link',
  standalone: true,
  templateUrl: './githublink.component.html',
  styleUrl: './githublink.component.scss'
})
export class GithubLinkComponent {
  @Input('githublink') githubLink = '';
  @Input('textcolor') textColor = '';
}
