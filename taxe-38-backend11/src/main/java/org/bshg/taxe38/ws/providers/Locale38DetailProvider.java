package org.bshg.taxe38.ws.providers;
import org.bshg.taxe38.entity.Locale38Detail;
import org.bshg.taxe38.services.facade.Locale38DetailService;
import org.bshg.taxe38.ws.converter.Locale38DetailConverter;
import org.bshg.taxe38.ws.dto.Locale38DetailDto;
import org.bshg.taxe38.zutils.pagination.Pagination;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import java.util.List;
@RestController
@RequestMapping("/api/locale38detail")
public class Locale38DetailProvider {
@Autowired private Locale38DetailService service;
@Autowired private Locale38DetailConverter converter;
@GetMapping("/id/{id}")
public ResponseEntity<Locale38DetailDto> findById(@PathVariable Long id) {
var result = service.findById(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping
public ResponseEntity<List<Locale38DetailDto>> findAll() {
var result = service.findAll();
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping("/optimized")
public ResponseEntity<List<Locale38DetailDto>> findAllOptimized() {
var result = service.findAllOptimized();
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping("/paginated")
public ResponseEntity<Pagination<Locale38DetailDto>> findPaginated(
@RequestParam(name = "page", defaultValue = "0", required = false) int page,
@RequestParam(name = "size", defaultValue = "10", required = false) int size
) {
var result = service.findPaginated(page, size);
var pagination = result.convert(converter::toDto);
return ResponseEntity.ok(pagination);
}
@PostMapping
public ResponseEntity<Locale38DetailDto> save(@RequestBody Locale38DetailDto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
var result = service.create(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PostMapping("/all")
public ResponseEntity<List<Locale38DetailDto>> save(@RequestBody List<Locale38DetailDto> dtos) {
if (dtos == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dtos);
var result = service.create(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PutMapping()
public ResponseEntity<Locale38DetailDto> update(@RequestBody Locale38DetailDto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
var result = service.update(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PutMapping("/all")
public ResponseEntity<List<Locale38DetailDto>> update(@RequestBody List<Locale38DetailDto> dtos) {
if (dtos == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dtos);
var result = service.update(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@DeleteMapping
public ResponseEntity<Locale38DetailDto> delete(@RequestBody Locale38DetailDto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
service.delete(item);
return ResponseEntity.ok(dto);
}
@DeleteMapping("/all")
public ResponseEntity<List<Locale38DetailDto>> delete(@RequestBody List<Locale38DetailDto> dtos) {
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
public ResponseEntity<List<Locale38DetailDto>> findByTypeLocale38DetailId(@PathVariable Long id){
var result = service.findByTypeLocale38DetailId(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
}