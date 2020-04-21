import { Component, OnInit, ViewChild } from '@angular/core';
import { Heroes, DataEntity } from '../../interfaces/heroes';
import { KitsuService } from '../../service/kitsu.service';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { ResizedEvent } from 'angular-resize-event';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { DetalhesModalComponent } from 'src/app/components/detalhes-modal/detalhes-modal.component';
import { DetalhesComponent } from '../detalhes/detalhes.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private kitsuService:KitsuService,private modalService: NgbModal,private router: Router) { }
  @ViewChild('pagination') pagination:PaginationComponent;
  public filterInput:String;
  ngOnInit(): void {
    this.getHeroes()
  }
  public heroe = {} as Heroes;
  public page = 0;
  public pageSize = 10;
  public collectionSize ;
  public heroes:DataEntity [] = []
  public getHeroes(){
  let addFilter = this.filterInput?"&filter[slug]="+this.filterInput.toLocaleLowerCase().replace(" ","-"):"";
  this.kitsuService.getHeroes('characters?page[limit]=10&page[offset]='+this.page*(addFilter?0:this.pageSize)+addFilter).subscribe(sucess=>{
    this.heroes = sucess.data;
    this.collectionSize = sucess.meta.count;
    console.log('filter', addFilter)

  }, error=>{
    console.log(error)
  })
  }
  pageChangeHandler(pageNumber:number){
    this.page =pageNumber>=1?pageNumber:1;
    this.getHeroes();
  }
  sizeChangedEvent(event: ResizedEvent) {
    this.pagination.sizeChangedEvent(event);
    console.log('rezided')
  }
  openModal(hero:DataEntity){
   // this.router.navigate(['/detalhes', hero.id]);
    this.openXl(hero.id)
  }
  openXl(id) {
  let modalRef= this.modalService.open(DetalhesModalComponent, { size: 'xl' });
    modalRef.componentInstance.id= id;

  }

}
