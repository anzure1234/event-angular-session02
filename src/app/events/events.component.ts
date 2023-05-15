import {Component, OnInit} from '@angular/core';
import {EventService} from "../service/event.service";
import {QueryParamsListing} from "../model/query-params-listing";
import {DEFAULT_ACTIVE_PAGE, DEFAULT_PAGE_SIZE} from "../common/const";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  dataList: any[] = [];
  queryParams: QueryParamsListing = {
    page: DEFAULT_ACTIVE_PAGE,
    size: DEFAULT_PAGE_SIZE
  }
  totalElements: number = 0;
  isLoadingData: boolean = true;
  constructor(private eventService: EventService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      // condition ? true : false;
      this.queryParams.page = params['page'] || DEFAULT_ACTIVE_PAGE; // Lấy ?page={page}
      this.queryParams.size = params['size'] || DEFAULT_PAGE_SIZE; // Lấy &size={size}
      this.loadEventData();
    });
  }

  loadEventData() {
    this.eventService.getEvents(this.queryParams).subscribe(res => {
      if (res) {
        this.totalElements = res.totalElements; // Tổng số phần tử
        this.queryParams.size = res.size; // Số phần tử của 1 page
        this.dataList = res.content;
        this.isLoadingData = false;
      }
    });
  }

  // FIXME:
  pageChange(pageNumber: number) {
    this.queryParams.page = pageNumber;
    this.router.navigate(['/events'], {queryParams: this.queryParams});
  }

  search() {
    this.queryParams.page = DEFAULT_ACTIVE_PAGE;
    this.router.navigate(['/events'], {queryParams: this.queryParams});
  }
}
