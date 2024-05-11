package org.bshg.taxe38.ws.providers;
import org.bshg.taxe38.entity.TauxTaxe38;
import org.bshg.taxe38.services.facade.TauxTaxe38Service;
import org.bshg.taxe38.ws.converter.TauxTaxe38Converter;
import org.bshg.taxe38.ws.dto.TauxTaxe38Dto;
import org.bshg.taxe38.zutils.pagination.Pagination;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import java.util.List;
@RestController
@RequestMapping("/api/tauxtaxe38")
public class TauxTaxe38Provider {
@Autowired private TauxTaxe38Service service;
@Autowired private TauxTaxe38Converter converter;
@GetMapping("/id/{id}")
public ResponseEntity<TauxTaxe38Dto> findById(@PathVariable Long id) {
var result = service.findById(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping
public ResponseEntity<List<TauxTaxe38Dto>> findAll() {
var result = service.findAll();
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping("/optimized")
public ResponseEntity<List<TauxTaxe38Dto>> findAllOptimized() {
var result = service.findAllOptimized();
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping("/paginated")
public ResponseEntity<Pagination<TauxTaxe38Dto>> findPaginated(
@RequestParam(name = "page", defaultValue = "0", required = false) int page,
@RequestParam(name = "size", defaultValue = "10", required = false) int size
) {
var result = service.findPaginated(page, size);
var pagination = result.convert(converter::toDto);
return ResponseEntity.ok(pagination);
}
@PostMapping
public ResponseEntity<TauxTaxe38Dto> save(@RequestBody TauxTaxe38Dto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
var result = service.create(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PostMapping("/all")
public ResponseEntity<List<TauxTaxe38Dto>> save(@RequestBody List<TauxTaxe38Dto> dtos) {
if (dtos == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dtos);
var result = service.create(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PutMapping()
public ResponseEntity<TauxTaxe38Dto> update(@RequestBody TauxTaxe38Dto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
var result = service.update(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PutMapping("/all")
public ResponseEntity<List<TauxTaxe38Dto>> update(@RequestBody List<TauxTaxe38Dto> dtos) {
if (dtos == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dtos);
var result = service.update(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@DeleteMapping
public ResponseEntity<TauxTaxe38Dto> delete(@RequestBody TauxTaxe38Dto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
service.delete(item);
return ResponseEntity.ok(dto);
}
@DeleteMapping("/all")
public ResponseEntity<List<TauxTaxe38Dto>> delete(@RequestBody List<TauxTaxe38Dto> dtos) {
if (dtos == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dtos);
service.delete(item);
return ResponseEntity.ok(dtos);
}
@DeleteMapping("/id/{id}")
public ResponseEntity<Long> deleteById(@PathVariable Long id) {
service.deleteById(id);
return ResponseEntity.ok(id);
}
@DeleteMapping("/ids")
public ResponseEntity<List<Long>> deleteByIdIn(@RequestParam("id") List<Long> ids) {
service.deleteByIdIn(ids);
return ResponseEntity.ok(ids);
}
@DeleteMapping("/typelocale38detail/id/{id}")
public ResponseEntity<Long> deleteByTypeLocale38DetailId(@PathVariable Long id){
service.deleteByTypeLocale38DetailId(id);
return ResponseEntity.ok(id);
}
@GetMapping("/typelocale38detail/id/{id}")
public ResponseEntity<List<TauxTaxe38Dto>> findByTypeLocale38DetailId(@PathVariable Long id){
var result = service.findByTypeLocale38DetailId(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@DeleteMapping("/categorielocale/id/{id}")
public ResponseEntity<Long> deleteByCategorieLocaleId(@PathVariable Long id){
service.deleteByCategorieLocaleId(id);
return ResponseEntity.ok(id);
}
@GetMapping("/categorielocale/id/{id}")
public ResponseEntity<List<TauxTaxe38Dto>> findByCategorieLocaleId(@PathVariable Long id){
var result = service.findByCategorieLocaleId(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
}