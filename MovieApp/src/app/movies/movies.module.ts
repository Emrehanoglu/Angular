import { NgModule } from "@angular/core";
import { MovieCreateComponent } from "./movie-create/movie-create.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MovieFilterPipe } from "./movie-filter.pipe";
import { MovieComponent } from "./movie/movie.component";
import { MoviesComponent } from "./movies.component";
import { SummaryPipe } from "./summary.pipe";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MoviesRoutingModule } from "./movies-routing.module";

@NgModule({
    declarations: [
        MoviesComponent,
        MovieComponent,
        MovieDetailsComponent,
        SummaryPipe,
        MovieFilterPipe,
        MovieCreateComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MoviesRoutingModule
    ],
    exports: [ 
    /* module içerisinde kullanacağım componentler farklı modullerde de 
    kullanılabilir olmasını istiyor isem export içerisinde tanımlamalıyım*/
        MoviesComponent,
        MovieComponent,
        MovieDetailsComponent,
        SummaryPipe,
        MovieFilterPipe,
        MovieCreateComponent,
    ]
})
export class MoviesModule{

}