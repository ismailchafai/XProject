import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Pagination} from "src/app/controller/utils/pagination/pagination";
import { Quartier } from 'src/app/controller/entities/quartier';
import { QuartierValidator } from 'src/app/controller/validators/quartier.validator';

@Injectable({ providedIn: 'root' })
export class QuartierService {
  private readonly api = environment.apiUrl + "quartier";
  private _item!: Quartier | undefined;
  private _items!: Array<Quartier>;
  private _pagination!: Pagination<Quartier>

  private http = inject(HttpClient)

  public keepData: boolean = false
  public returnUrl: string | undefined = undefined
  public toReturn = () => this.returnUrl != undefined


  public findAll() {
    return this.http.get<Array<Quartier>>(this.api);
  }

  public findById(id: number) {
    return this.http.get<Quartier>(`${this.api}/id/${id}`);
  }

  public findAllOptimized() {
    return this.http.get<Array<Quartier>>(`${this.api}/optimized`);
  }

  public findPaginated(page: number = 0, size: number = 10) {
    return this.http.get<Pagination<Quartier>>(`${this.api}/paginated?page=${page}&size=${size}`);
  }

  public create() {
    return this.http.post<Quartier>(this.api, this.item);
  }

  public createList() {
    return this.http.post<Array<Quartier>>(`${this.api}/all`, this.items);
  }

  public update() {
    return this.http.put<Quartier>(this.api, this.item);
  }

  public updateList() {
    return this.http.put<Array<Quartier>>(`${this.api}/all`, this.items);
  }

  public delete(dto: Quartier) {
    return this.http.delete<number>(this.api, {body: dto});
  }

  public deleteAll(dtos: Array<Quartier>) {
    return this.http.delete<number>(this.api, {body: dtos});
  }

  public deleteById(id: number) {
    return this.http.delete<number>(`${this.api}/id/${id}`);
  }

  public deleteBySecteurId(id: number){
    return this.http.delete<number>(`${this.api}/secteur/${id}`);
  }

  public findBySecteurId(id: number){
    return this.http.get<Array<Quartier>>(`${this.api}/secteur/${id}`);
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

  public get item(): Quartier {
    if (this._item == null)
      this._item = new Quartier();
    return this._item;
  }

  public set item(value: Quartier | undefined) {
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

