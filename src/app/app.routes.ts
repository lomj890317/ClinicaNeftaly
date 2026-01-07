import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './catalog/products/products.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    {'path':'login','title':'Login',component: LoginComponent},
    {'path':'home','title':'Home',component: HomeComponent},
    { path: 'catalog/products', title: 'Products', component: ProductsComponent },
    {'path':'about','title':'About',component: AboutComponent},
    {'path':'contact','title': 'Contact',component:ContactComponent},
    {'path':'**','title':'Page not found', component:PageNotFoundComponent}
];
