import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule, MatListModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gofer';
  isSidebarCollapsed = false;
  isCollapsed = false;

  menuItems = [
    { name: 'Introduction', link: '/intro', submenu: [], expanded: false },
    {
      name: '1. Simple Data Types',
      link: '/les1-exp',
      submenu: [
        { name: 'Example', link: '/les1-exam' }
      ],
      expanded: false
    },
    {
      name: '2. Compound Data Types, Tuples & Lists',
      link: '/les2-exp',
      submenu: [
        { name: 'Example', link: '/les2-exam' },
        { name: 'Problem', link: '/les2-prob' },
        { name: 'Quiz - Missing', link: '/les2-prob' }
      ],
      expanded: false
    },
    {
      name: '3. Compound Data Types, Functions',
      link: '/les3-exp',
      submenu: [
        { name: 'Example', link: '/les3-exam' },
        { name: 'Problem', link: '/les3-prob' },
        { name: 'Quiz - Missing', link: '/les3-prob' }
      ],
      expanded: false
    },
    {
      name: '4. Writing And Loading a Gofer Script',
      link: '/les3-exp',
      submenu: [
        { name: 'Example', link: '/les4-exam' },
        { name: 'Problem', link: '/les4-prob' },
        { name: 'Quiz - Missing', link: '/les4-prob' }
      ],
      expanded: false
    },
    {
      name: '5. The Term: Rewriting the Modal of Computation',
      link: '/les5-exp',
      submenu: [
        { name: 'Example', link: '/les5-exam' },
        { name: 'Problem', link: '/les5-prob' },
        { name: 'Quiz - Missing', link: '/les5-prob' }
      ],
      expanded: false
    },
    {
      name: '6. Proof by Induction',
      link: '/les6-exp',
      submenu: [
        { name: 'Example', link: '/les5-exam' },
        { name: 'Problem', link: '/les5-prob' },
        { name: 'Quiz - Missing', link: '/les5-prob' }
      ],
      expanded: false
    },
    {
      name: '7. Syntax and Semantics of Function Definition and Application',
      link: '/les7-exp',
      submenu: [
        { name: 'Example', link: '/les7-exam' },
        { name: 'Problem', link: '/les7-prob' },
        { name: 'Quiz - Missing', link: '/les7-prob' }
      ],
      expanded: false
    },
    {
      name: '8. Lists',
      link: '/les8-exp',
      submenu: [
        { name: 'Example', link: '/les8-exam' },
        { name: 'Problem', link: '/les8-prob' },
        { name: 'Quiz - Missing', link: '/les8-prob' }
      ],
      expanded: false
    },
    {
      name: '9. Functions with Multiple Arguments',
      link: '/les9-exp',
      submenu: [
        { name: 'Example', link: '/les9-exam' },
        { name: 'Problem', link: '/les9-prob' },
        { name: 'Quiz - Missing', link: '/les9-prob' }
      ],
      expanded: false
    },
  ];

  toggleSubMenu(item: any) {
    item.expanded = !item.expanded;
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
