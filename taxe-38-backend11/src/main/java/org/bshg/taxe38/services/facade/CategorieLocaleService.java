package org.bshg.taxe38.services.facade;
import org.bshg.taxe38.entity.CategorieLocale;
import org.bshg.taxe38.zutils.pagination.Pagination;
import java.util.List;
public interface CategorieLocaleService {
CategorieLocale findById(Long id);
List<CategorieLocale> findAllOptimized();
List<CategorieLocale> findAll();
Pagination<CategorieLocale> findPaginated(int page, int size);
CategorieLocale create(CategorieLocale item);
List<CategorieLocale> create(List<CategorieLocale> item);
CategorieLocale update(CategorieLocale item);
List<CategorieLocale> update(List<CategorieLocale> item);
void deleteById(Long id);
void delete(CategorieLocale item);
void delete(List<CategorieLocale> items);
void deleteByIdIn(List<Long> ids);
}