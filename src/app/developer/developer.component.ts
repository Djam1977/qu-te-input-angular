import { Component } from '@angular/core';
import { Developer } from '../model/developer.model';
import { Skill } from '../model/skill.model';
@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent {
  dev: Developer = new Developer('John', 'Doe', 28, 'Male', 'Je suis Dave', [
    new Skill('Angoular', 'logoe angoular', 'site angoular'),
    new Skill('Java', 'logoe java', 'site java'),
  ]);
}
