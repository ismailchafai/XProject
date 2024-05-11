import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Pagination} from "src/app/controller/utils/pagination/pagination";
import { Redevable } from 'src/app/controller/entities/redevable';
import { RedevableValidator } from 'src/app/controller/validators/redevable.validator';

@Injectable({ providedIn: 'root' })
export class RedevableService {
  private readonly api = environment.apiUrl + "redevable";
  private _item!: Redevable | undefined;
  private _items!: Array<Redevable>;
  private _pagination!: Pagination<Redevable>

  private http = inject(HttpClient)

  public keepData: boolean = false
  public returnUrl: string | undefined = undefined
  public toReturn = () => this.returnUrl != undefined


  public findAll() {
    return this.http.get<Array<Redevable>>(this.api);
  }

  public findById(id: number) {
    return this.http.get<Redevable>(`${this.api}/id/${id}`);
  }

  public findAllOptimized() {
    return this.http.get<Array<Redevable>>(`${this.api}/optimized`);
  }

  public findPaginated(page: number = 0, size: number = 10) {
    return this.http.get<Pagination<Redevable>>(`${this.api}/paginated?page=${page}&size=${size}`);
  }

  public create() {
    return this.http.post<Redevable>(this.api, this.item);
  }

  public createList() {
    return this.http.post<Array<Redevable>>(`${this.api}/all`, this.items);
  }

  public update() {
    return this.http.put<Redevable>(this.api, this.item);
  }

  public updateList() {
    return this.http.put<Array<Redevable>>(`${this.api}/all`, this.items);
  }

  public delete(dto: Redevable) {
    return this.http.delete<number>(this.api, {body: dto});
  }

  public deleteAll(dtos: Array<Redevable>) {
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

  public get item(): Redevable {
    if (this._item == null)
      this._item = new Redevable();
    return this._item;
  }

  public set item(value: Redevable | undefined) {
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

