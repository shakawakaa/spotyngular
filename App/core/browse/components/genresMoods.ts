import {NgFor, Component, View} from 'angular2/angular2';

import {GenresService} from 'spotyngular/browse/genresService';
import {BrowseMiniCard} from 'spotyngular/browse/components/miniCard';

const SERVER = "http://localhost:3000/genres";

@Component({
	selector: 'spotyngular-browse-genres-moods',
	appInjector: [GenresService]
})
@View({
	templateUrl: 'core/browse/components/genresMoods.html',
	directives: [NgFor, BrowseMiniCard],
	styles:[
	`
		.genres-section{
			margin-bottom: 0px; 
			padding-top: 20px;
		}
		.mini-container{
		    margin: -5px !important;
		}
	`
	]
})
export class BrowseGenresMoods{
	genres: any = [];
	constructor(private genresService: GenresService){
		genresService.getGenres()
					 .subscribe(genres => this.genres = genres);
	}
}