import { Component, OnInit } from '@angular/core';
import { PeopleService } from './../service/people.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers: [PeopleService]
})
export class PaginationComponent implements OnInit {

  private totalNumPages: number;
  private collectionSize: number;
  private page: number = 0;
  private itemsPerPage: number = 5;
  private people: any[];
  private visiblePeople: any[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.initPagination();
  }

  private initPagination(): void {
    this.peopleService.getPeople()
    .subscribe(p => {
      this.people = p;
      this.collectionSize = p.length;
      this.totalNumPages = Math.ceil(p.length / this.itemsPerPage);
      this.visiblePeople = this.paginate(p, 0);
    });
  }

  private paginate(array: any[], pageNum: number): any[] {
    const startIndex = pageNum * this.itemsPerPage;
    const endIndex = (pageNum + 1) * this.itemsPerPage;
    return array.slice(startIndex, endIndex);
  }

  private loadPage(page: number): void {
    this.visiblePeople = this.paginate(this.people, page - 1);
  }

}
