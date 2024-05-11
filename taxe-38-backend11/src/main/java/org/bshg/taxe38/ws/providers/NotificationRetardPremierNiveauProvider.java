package org.bshg.taxe38.ws.providers;
import org.bshg.taxe38.entity.NotificationRetardPremierNiveau;
import org.bshg.taxe38.services.facade.NotificationRetardPremierNiveauService;
import org.bshg.taxe38.ws.converter.NotificationRetardPremierNiveauConverter;
import org.bshg.taxe38.ws.dto.NotificationRetardPremierNiveauDto;
import org.bshg.taxe38.zutils.pagination.Pagination;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import java.util.List;
@RestController
@RequestMapping("/api/notificationretardpremierniveau")
public class NotificationRetardPremierNiveauProvider {
@Autowired private NotificationRetardPremierNiveauService service;
@Autowired private NotificationRetardPremierNiveauConverter converter;
@GetMapping("/id/{id}")
public ResponseEntity<NotificationRetardPremierNiveauDto> findById(@PathVariable Long id) {
var result = service.findById(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping
public ResponseEntity<List<NotificationRetardPremierNiveauDto>> findAll() {
var result = service.findAll();
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping("/optimized")
public ResponseEntity<List<NotificationRetardPremierNiveauDto>> findAllOptimized() {
var result = service.findAllOptimized();
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping("/paginated")
public ResponseEntity<Pagination<NotificationRetardPremierNiveauDto>> findPaginated(
@RequestParam(name = "page", defaultValue = "0", required = false) int page,
@RequestParam(name = "size", defaultValue = "10", required = false) int size
) {
var result = service.findPaginated(page, size);
var pagination = result.convert(converter::toDto);
return ResponseEntity.ok(pagination);
}
@PostMapping
public ResponseEntity<NotificationRetardPremierNiveauDto> save(@RequestBody NotificationRetardPremierNiveauDto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
var result = service.create(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PostMapping("/all")
public ResponseEntity<List<NotificationRetardPremierNiveauDto>> save(@RequestBody List<NotificationRetardPremierNiveauDto> dtos) {
if (dtos == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dtos);
var result = service.create(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PutMapping()
public ResponseEntity<NotificationRetardPremierNiveauDto> update(@RequestBody NotificationRetardPremierNiveauDto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
var result = service.update(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PutMapping("/all")
public ResponseEntity<List<NotificationRetardPremierNiveauDto>> update(@RequestBody List<NotificationRetardPremierNiveauDto> dtos) {
if (dtos == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dtos);
var result = service.update(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@DeleteMapping
public ResponseEntity<NotificationRetardPremierNiveauDto> delete(@RequestBody NotificationRetardPremierNiveauDto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
service.delete(item);
return ResponseEntity.ok(dto);
}
@DeleteMapping("/all")
public ResponseEntity<List<NotificationRetardPremierNiveauDto>> delete(@RequestBody List<NotificationRetardPremierNiveauDto> dtos) {
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
@DeleteMapping("/locale/id/{id}")
public ResponseEntity<Long> deleteByLocaleId(@PathVariable Long id){
service.deleteByLocaleId(id);
return ResponseEntity.ok(id);
}
@GetMapping("/locale/id/{id}")
public ResponseEntity<List<NotificationRetardPremierNiveauDto>> findByLocaleId(@PathVariable Long id){
var result = service.findByLocaleId(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@DeleteMapping("/redevable/id/{id}")
public ResponseEntity<Long> deleteByRedevableId(@PathVariable Long id){
service.deleteByRedevableId(id);
return ResponseEntity.ok(id);
}
@GetMapping("/redevable/id/{id}")
public ResponseEntity<List<NotificationRetardPremierNiveauDto>> findByRedevableId(@PathVariable Long id){
var result = service.findByRedevableId(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
}