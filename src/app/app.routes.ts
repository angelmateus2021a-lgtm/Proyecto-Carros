import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { Concesionario } from './pages/concesionario/concesionario';
import { Contacto } from './pages/contacto/contacto';



export const routes: Routes = [

    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'products', component: Products },
    { path: 'contact', component: Contact },
    { path: 'concesionarios', component: Concesionario },
    { path: 'contacto', component: Contacto },
    { path: '**', redirectTo: '' },
];

