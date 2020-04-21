import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KitsuService } from '../../service/kitsu.service';
import { MediaCharacters } from '../../interfaces/mediacharacters';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],
  providers: [NgbCarouselConfig] 
})
export class DetalhesComponent implements OnInit {
  public mediaCharacters:MediaCharacters [] = []
  @Input() id = null; 
  constructor(
    private activatedRoute: ActivatedRoute,
    private kitsuService:KitsuService
  ) { }

  ngOnInit(): void {
    if(this.id==null){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }
    this.kitsuService.getHeroes('characters/'+this.id+'/media-characters').subscribe(result =>{
      let links = result.data.map(x=> x.relationships.media.links.related);
      links.forEach(element => {
        this.kitsuService.getMediaCharactersbyUrl(element).subscribe(media=>{
          this.mediaCharacters.push(media);

        })
        console.log('Media Characters' , this.mediaCharacters)
      });
    })
  }

}
