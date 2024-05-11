package org.bshg.taxe38.ws.providers;
import org.bshg.taxe38.entity.Taxe38Detail;
import org.bshg.taxe38.services.facade.Taxe38DetailService;
import org.bshg.taxe38.ws.converter.Taxe38DetailConverter;
import org.bshg.taxe38.ws.dto.Taxe38DetailDto;
import org.bshg.taxe38.zutils.pagination.Pagination;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import java.util.List;
@RestController
@RequestMapping("/api/taxe38detail")
public class Taxe38DetailProvider {
@Autowired private Taxe38DetailService service;
@Autowired private Taxe38DetailConverter converter;
@GetMapping("/id/{id}")
public ResponseEntity<Taxe38DetailDto> findById(@PathVariable Long id) {
var result = service.findById(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping
public ResponseEntity<List<Taxe38DetailDto>> findAll() {
var result = service.findAll();
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping("/optimized")
public ResponseEntity<List<Taxe38DetailDto>> findAllOptimized() {
var result = service.findAllOptimized();
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping("/paginated")
public ResponseEntity<Pagination<Taxe38DetailDto>> findPaginated(
@RequestParam(name = "page", defaultValue = "0", required = false) int page,
@RequestParam(name = "size", defaultValue = "10", required = false) int size
) {
var result = service.findPaginated(page, size);
var pagination = result.convert(converter::toDto);
return ResponseEntity.ok(pagination);
}
@PostMapping
public ResponseEntity<Taxe38DetailDto> save(@RequestBody Taxe38DetailDto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
var result = service.create(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PostMapping("/all")
public ResponseEntity<List<Taxe38DetailDto>> save(@RequestBody List<Taxe38DetailDto> dtos) {
if (dtos == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dtos);
var result = service.create(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PutMapping()
public ResponseEntity<Taxe38DetailDto> update(@RequestBody Taxe38DetailDto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
var result = service.update(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PutMapping("/all")
public ResponseEntity<List<Taxe38DetailDto>> update(@RequestBody List<Taxe38DetailDto> dtos) {
if (dtos == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dtos);
var result = service.update(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@DeleteMapping
public ResponseEntity<Taxe38DetailDto> delete(@RequestBody Taxe38DetailDto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
service.delete(item);
return ResponseEntity.ok(dto);
}
@DeleteMapping("/all")
public ResponseEntity<List<Taxe38DetailDto>> delete(@RequestBody List<Taxe38DetailDto> dtos) {
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
@DeleteMapping("/locale38detail/id/{id}")
public ResponseEntity<Long> deleteByLocale38DetailId(@PathVariable Long id){
service.deleteByLocale38DetailId(id);
return ResponseEntity.ok(id);
}
@GetMapping("/locale38detail/id/{id}")
public ResponseEntity<List<Taxe38DetailDto>> findByLocale38DetailId(@PathVariable Long id){
var result = service.findByLocale38DetailId(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@DeleteMapping("/tauxtaxe38/id/{id}")
public ResponseEntity<Long> deleteByTauxTaxe38Id(@PathVariable Long id){
service.deleteByTauxTaxe38Id(id);
return ResponseEntity.ok(id);
}
@GetMapping("/tauxtaxe38/id/{id}")
public ResponseEntity<List<Taxe38DetailDto>> findByTauxTaxe38Id(@PathVariable Long id){
var result = service.findByTauxTaxe38Id(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@DeleteMapping("/taxe38/id/{id}")
public ResponseEntity<Long> deleteByTaxe38Id(@PathVariable Long id){
service.deleteByTaxe38Id(id);
return ResponseEntity.ok(id);
}
@GetMapping("/taxe38/id/{id}")
public ResponseEntity<List<Taxe38DetailDto>> findByTaxe38Id(@PathVariable Long id){
var result = service.findByTaxe38Id(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
}