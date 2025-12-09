import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';
import { Home } from './pages/home/home';
import { Concesionario } from './pages/concesionario/concesionario';
import { contacto } from './pages/contacto/contacto'; 
import { Historias } from './pages/historias/historias';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'contact', component: Historias },
    { path: 'products', component: Products },
    { path: 'contacto', component: contacto },  
    { path: 'concesionarios', component: Concesionario },
    { path: '**', redirectTo: '' },
];

