package org.bshg.taxe38.ws.providers;
import org.bshg.taxe38.entity.NotificationRetardDeuxiemeNiveauDetailType38;
import org.bshg.taxe38.services.facade.NotificationRetardDeuxiemeNiveauDetailType38Service;
import org.bshg.taxe38.ws.converter.NotificationRetardDeuxiemeNiveauDetailType38Converter;
import org.bshg.taxe38.ws.dto.NotificationRetardDeuxiemeNiveauDetailType38Dto;
import org.bshg.taxe38.zutils.pagination.Pagination;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import java.util.List;
@RestController
@RequestMapping("/api/notificationretarddeuxiemeniveaudetailtype38")
public class NotificationRetardDeuxiemeNiveauDetailType38Provider {
@Autowired private NotificationRetardDeuxiemeNiveauDetailType38Service service;
@Autowired private NotificationRetardDeuxiemeNiveauDetailType38Converter converter;
@GetMapping("/id/{id}")
public ResponseEntity<NotificationRetardDeuxiemeNiveauDetailType38Dto> findById(@PathVariable Long id) {
var result = service.findById(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping
public ResponseEntity<List<NotificationRetardDeuxiemeNiveauDetailType38Dto>> findAll() {
var result = service.findAll();
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping("/optimized")
public ResponseEntity<List<NotificationRetardDeuxiemeNiveauDetailType38Dto>> findAllOptimized() {
var result = service.findAllOptimized();
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@GetMapping("/paginated")
public ResponseEntity<Pagination<NotificationRetardDeuxiemeNiveauDetailType38Dto>> findPaginated(
@RequestParam(name = "page", defaultValue = "0", required = false) int page,
@RequestParam(name = "size", defaultValue = "10", required = false) int size
) {
var result = service.findPaginated(page, size);
var pagination = result.convert(converter::toDto);
return ResponseEntity.ok(pagination);
}
@PostMapping
public ResponseEntity<NotificationRetardDeuxiemeNiveauDetailType38Dto> save(@RequestBody NotificationRetardDeuxiemeNiveauDetailType38Dto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
var result = service.create(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PostMapping("/all")
public ResponseEntity<List<NotificationRetardDeuxiemeNiveauDetailType38Dto>> save(@RequestBody List<NotificationRetardDeuxiemeNiveauDetailType38Dto> dtos) {
if (dtos == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dtos);
var result = service.create(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PutMapping()
public ResponseEntity<NotificationRetardDeuxiemeNiveauDetailType38Dto> update(@RequestBody NotificationRetardDeuxiemeNiveauDetailType38Dto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
var result = service.update(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@PutMapping("/all")
public ResponseEntity<List<NotificationRetardDeuxiemeNiveauDetailType38Dto>> update(@RequestBody List<NotificationRetardDeuxiemeNiveauDetailType38Dto> dtos) {
if (dtos == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dtos);
var result = service.update(item);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
@DeleteMapping
public ResponseEntity<NotificationRetardDeuxiemeNiveauDetailType38Dto> delete(@RequestBody NotificationRetardDeuxiemeNiveauDetailType38Dto dto) {
if (dto == null) return ResponseEntity.status(HttpStatus.CONFLICT).build();
var item = converter.toItem(dto);
service.delete(item);
return ResponseEntity.ok(dto);
}
@DeleteMapping("/all")
public ResponseEntity<List<NotificationRetardDeuxiemeNiveauDetailType38Dto>> delete(@RequestBody List<NotificationRetardDeuxiemeNiveauDetailType38Dto> dtos) {
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
@DeleteMapping("/typelocale38/id/{id}")
public ResponseEntity<Long> deleteByTypeLocale38Id(@PathVariable Long id){
service.deleteByTypeLocale38Id(id);
return ResponseEntity.ok(id);
}
@GetMapping("/typelocale38/id/{id}")
public ResponseEntity<List<NotificationRetardDeuxiemeNiveauDetailType38Dto>> findByTypeLocale38Id(@PathVariable Long id){
var result = service.findByTypeLocale38Id(id);
var resultDto = converter.toDto(result);
return ResponseEntity.ok(resultDto);
}
}