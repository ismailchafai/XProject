package org.bshg.taxe38.ws.providers;
import org.bshg.taxe38.entity.Taxe38;
import org.bshg.taxe38.services.facade.Taxe38Service;
import org.bshg.taxe38.ws.converter.Taxe38Converter;
import org.bshg.taxe38.ws.dto.Taxe38Dto;
import org.bshg.taxe38.zutils.pagination.Pagination;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import java.util.List;
@RestController
@RequestMapping("/api/taxe38")
public class Taxe38Provider {
@Autowired private Taxe38Service service;
@Autowired private Taxe38Converter converter;
@GetMapping("/id/{id}")
public ResponseEntity<Taxe38Dto> findById(@PathVariable Long id) {
var result = service.findById(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping
public ResponseEntity<List<Taxe38Dto>> findAll() {
var result = service.findAll();
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping("/optimized")
public ResponseEntity<List<Taxe38Dto>> findAllOptimized() {
var result = service.findAllOptimized();
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping("/paginated")
public ResponseEntity<Pagination<Taxe38Dto>> findPaginated(
@RequestParam(name = "page", defaultValue = "0", required = false) int page,
@RequestParam(name = "size", defaultValue = "10", required = false) int size
) {
var result = service.findPaginated(page, size);
var pagination = result.convert(converter::toDto);
return ResponseEntity.ok(pagination);
}
@PostMapping
public ResponseEntity<Taxe38Dto> save(@RequestBody Taxe38Dto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
var result = service.create(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PostMapping("/all")
public ResponseEntity<List<Taxe38Dto>> save(@RequestBody List<Taxe38Dto> dtos) {
if (dtos == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dtos);
var result = service.create(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PutMapping()
public ResponseEntity<Taxe38Dto> update(@RequestBody Taxe38Dto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
var result = service.update(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PutMapping("/all")
public ResponseEntity<List<Taxe38Dto>> update(@RequestBody List<Taxe38Dto> dtos) {
if (dtos == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dtos);
var result = service.update(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@DeleteMapping
public ResponseEntity<Taxe38Dto> delete(@RequestBody Taxe38Dto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
service.delete(item);
return ResponseEntity.ok(dto);
}
@DeleteMapping("/all")
public ResponseEntity<List<Taxe38Dto>> delete(@RequestBody List<Taxe38Dto> dtos) {
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
@DeleteMapping("/redevable/id/{id}")
public ResponseEntity<Long> deleteByRedevableId(@PathVariable Long id){
service.deleteByRedevableId(id);
return ResponseEntity.ok(id);
}
@GetMapping("/redevable/id/{id}")
public ResponseEntity<List<Taxe38Dto>> findByRedevableId(@PathVariable Long id){
var result = service.findByRedevableId(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@DeleteMapping("/locale/id/{id}")
public ResponseEntity<Long> deleteByLocaleId(@PathVariable Long id){
service.deleteByLocaleId(id);
return ResponseEntity.ok(id);
}
@GetMapping("/locale/id/{id}")
public ResponseEntity<List<Taxe38Dto>> findByLocaleId(@PathVariable Long id){
var result = service.findByLocaleId(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@DeleteMapping("/trim/id/{id}")
public ResponseEntity<Long> deleteByTrimId(@PathVariable Long id){
service.deleteByTrimId(id);
return ResponseEntity.ok(id);
}
@GetMapping("/trim/id/{id}")
public ResponseEntity<List<Taxe38Dto>> findByTrimId(@PathVariable Long id){
var result = service.findByTrimId(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
}