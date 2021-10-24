import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ByCapitalComponent } from "./countries/pages/by-capital/by-capital.component";
import { ByCountryComponent } from './countries/pages/by-country/by-country.component';
import { ByRegionComponent } from "./countries/pages/by-region/by-region.component";
import { SeeCountryComponent } from "./countries/pages/see-country/see-country.component";


const routes: Routes = [    // para la creación de las vistas y sus rutas y la excepcion en caso que correspona
    {
        path: '',
        component: ByCountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: ByRegionComponent,
    },
    {
        path: 'capital',
        component: ByCapitalComponent,
    },
    {
        path: 'country/:countryCode',
        component: SeeCountryComponent
    },
    {
        path: '**',
        redirectTo: '', // redirecciona al path. Se puede crear otro component para que muestre un 404.
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}