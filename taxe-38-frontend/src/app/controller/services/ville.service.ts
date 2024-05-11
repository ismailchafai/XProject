import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Pagination} from "src/app/controller/utils/pagination/pagination";
import { Ville } from 'src/app/controller/entities/ville';
import { VilleValidator } from 'src/app/controller/validators/ville.validator';

@Injectable({ providedIn: 'root' })
export class VilleService {
  private readonly api = environment.apiUrl + "ville";
  private _item!: Ville | undefined;
  private _items!: Array<Ville>;
  private _pagination!: Pagination<Ville>

  private http = inject(HttpClient)

  public keepData: boolean = false
  public returnUrl: string | undefined = undefined
  public toReturn = () => this.returnUrl != undefined


  public findAll() {
    return this.http.get<Array<Ville>>(this.api);
  }

  public findById(id: number) {
    return this.http.get<Ville>(`${this.api}/id/${id}`);
  }

  public findAllOptimized() {
    return this.http.get<Array<Ville>>(`${this.api}/optimized`);
  }

  public findPaginated(page: number = 0, size: number = 10) {
    return this.http.get<Pagination<Ville>>(`${this.api}/paginated?page=${page}&size=${size}`);
  }

  public create() {
    return this.http.post<Ville>(this.api, this.item);
  }

  public createList() {
    return this.http.post<Array<Ville>>(`${this.api}/all`, this.items);
  }

  public update() {
    return this.http.put<Ville>(this.api, this.item);
  }

  public updateList() {
    return this.http.put<Array<Ville>>(`${this.api}/all`, this.items);
  }

  public delete(dto: Ville) {
    return this.http.delete<number>(this.api, {body: dto});
  }

  public deleteAll(dtos: Array<Ville>) {
    return this.http.delete<number>(this.api, {body: dtos});
  }

  public deleteById(id: number) {
    return this.http.delete<number>(`${this.api}/id/${id}`);
  }


  //------------- getters and setters -----------------------
  public get itemIsNull(): boolean {
    return this._item == undefined
  }

  public get items() {
    if (this._items == undefined)
      this._items = [];
    return this._items;
  }

  get pagination() {
    if (this._pagination == null)
      this._pagination = new Pagination();
    return this._pagination;
  }

  set pagination(value) {
    this._pagination = value;
  }

  public set items(value) {
    this._items = value;
  }

  public get item(): Ville {
    if (this._item == null)
      this._item = new Ville();
    return this._item;
  }

  public set item(value: Ville | undefined) {
    this._item = value;
  }

  public get createdItemAfterReturn() {
    let created = {
      item: this.item,
      created: this.toReturn()
    }
    this.returnUrl = undefined
    this.item = undefined
    return created
  }
}

