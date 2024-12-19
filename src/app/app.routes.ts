import { Routes } from '@angular/router';
import { IntroExplanationComponent } from './lesson0/explanation.component';
import { FuncProgExplanationComponent } from './lesson1//explanation/explanation.component';
import { FuncProgExamplesComponent } from './lesson1/examples/examples.component';
import { FuncProgL2ExplanationComponent } from './lesson2/explanation/explanation.component';
import { FuncProgL2ExamplesComponent } from './lesson2/examples/examples.component';
import { FuncProgL2ProblemsComponent } from './lesson2/problems/problems.component';


export const routes: Routes = [
    { path: 'prog', component: FuncProgExplanationComponent },
    { path: 'prog-exam', component: FuncProgExamplesComponent },
    { path: 'progl2', component: FuncProgL2ExplanationComponent },
    { path: 'progl2-exam', component: FuncProgL2ExamplesComponent },
    { path: 'progl2-prob', component: FuncProgL2ProblemsComponent },
    { path: 'intro', component: IntroExplanationComponent },
    { path: '', component: IntroExplanationComponent },
    { path: '**', component: IntroExplanationComponent },

];
