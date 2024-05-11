package org.bshg.taxe38.services.facade;
import org.bshg.taxe38.entity.TypeLocale38Detail;
import org.bshg.taxe38.zutils.pagination.Pagination;
import java.util.List;
public interface TypeLocale38DetailService {
TypeLocale38Detail findById(Long id);
List<TypeLocale38Detail> findAllOptimized();
List<TypeLocale38Detail> findAll();
Pagination<TypeLocale38Detail> findPaginated(int page, int size);
TypeLocale38Detail create(TypeLocale38Detail item);
List<TypeLocale38Detail> create(List<TypeLocale38Detail> item);
TypeLocale38Detail update(TypeLocale38Detail item);
List<TypeLocale38Detail> update(List<TypeLocale38Detail> item);
void deleteById(Long id);
void delete(TypeLocale38Detail item);
void delete(List<TypeLocale38Detail> items);
void deleteByIdIn(List<Long> ids);
}