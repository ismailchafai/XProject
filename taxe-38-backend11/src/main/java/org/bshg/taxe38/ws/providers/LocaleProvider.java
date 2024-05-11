package org.bshg.taxe38.ws.providers;
import org.bshg.taxe38.entity.Locale;
import org.bshg.taxe38.services.facade.LocaleService;
import org.bshg.taxe38.ws.converter.LocaleConverter;
import org.bshg.taxe38.ws.dto.LocaleDto;
import org.bshg.taxe38.zutils.pagination.Pagination;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import java.util.List;
@RestController
@RequestMapping("/api/locale")
public class LocaleProvider {
@Autowired private LocaleService service;
@Autowired private LocaleConverter converter;
@GetMapping("/id/{id}")
public ResponseEntity<LocaleDto> findById(@PathVariable Long id) {
var result = service.findById(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping
public ResponseEntity<List<LocaleDto>> findAll() {
var result = service.findAll();
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping("/optimized")
public ResponseEntity<List<LocaleDto>> findAllOptimized() {
var result = service.findAllOptimized();
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping("/paginated")
public ResponseEntity<Pagination<LocaleDto>> findPaginated(
@RequestParam(name = "page", defaultValue = "0", required = false) int page,
@RequestParam(name = "size", defaultValue = "10", required = false) int size
) {
var result = service.findPaginated(page, size);
var pagination = result.convert(converter::toDto);
return ResponseEntity.ok(pagination);
}
@PostMapping
public ResponseEntity<LocaleDto> save(@RequestBody LocaleDto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
var result = service.create(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PostMapping("/all")
public ResponseEntity<List<LocaleDto>> save(@RequestBody List<LocaleDto> dtos) {
if (dtos == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dtos);
var result = service.create(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PutMapping()
public ResponseEntity<LocaleDto> update(@RequestBody LocaleDto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
var result = service.update(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PutMapping("/all")
public ResponseEntity<List<LocaleDto>> update(@RequestBody List<LocaleDto> dtos) {
if (dtos == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dtos);
var result = service.update(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@DeleteMapping
public ResponseEntity<LocaleDto> delete(@RequestBody LocaleDto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
service.delete(item);
return ResponseEntity.ok(dto);
}
@DeleteMapping("/all")
public ResponseEntity<List<LocaleDto>> delete(@RequestBody List<LocaleDto> dtos) {
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
@DeleteMapping("/rue/id/{id}")
public ResponseEntity<Long> deleteByRueId(@PathVariable Long id){
service.deleteByRueId(id);
return ResponseEntity.ok(id);
}
@GetMapping("/rue/id/{id}")
public ResponseEntity<List<LocaleDto>> findByRueId(@PathVariable Long id){
var result = service.findByRueId(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@DeleteMapping("/redevable/id/{id}")
public ResponseEntity<Long> deleteByRedevableId(@PathVariable Long id){
service.deleteByRedevableId(id);
return ResponseEntity.ok(id);
}
@GetMapping("/redevable/id/{id}")
public ResponseEntity<List<LocaleDto>> findByRedevableId(@PathVariable Long id){
var result = service.findByRedevableId(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@DeleteMapping("/categorielocale/id/{id}")
public ResponseEntity<Long> deleteByCategorieLocaleId(@PathVariable Long id){
service.deleteByCategorieLocaleId(id);
return ResponseEntity.ok(id);
}
@GetMapping("/categorielocale/id/{id}")
public ResponseEntity<List<LocaleDto>> findByCategorieLocaleId(@PathVariable Long id){
var result = service.findByCategorieLocaleId(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
}