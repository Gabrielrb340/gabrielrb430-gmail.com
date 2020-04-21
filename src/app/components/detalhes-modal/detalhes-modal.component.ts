import { Component, OnInit, Input } from '@angular/core';
import { MediaCharacters } from '../../interfaces/mediacharacters';
import { KitsuService } from '../../service/kitsu.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalhes-modal',
  templateUrl: './detalhes-modal.component.html',
  styleUrls: ['./detalhes-modal.component.css']
})
export class DetalhesModalComponent implements OnInit {

  constructor(private kitsuService:KitsuService,public activeModal: NgbActiveModal) { }
  public mediaCharacters:MediaCharacters [] = []
@Input() id:number;
  ngOnInit( ): void {

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

