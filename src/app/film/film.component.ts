import {Component} from '@angular/core';

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css']
})
export class FilmComponent {

    public movies = [
        'The GodFather',
        'The Shawshank Redemption',
        'Gone With the Wind',
        'Casablanca',
        'It\'s a Wonderful Life',
        'Schindler\'s List',
        'Star Wars',
        'Rear Window',
        'Citizen Kane',
        'To Kill a Mockingbird '
    ];

    public showMovies = true;

    public constructor() {
    }


}
