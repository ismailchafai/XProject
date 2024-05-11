package org.bshg.taxe38.services.facade;
import org.bshg.taxe38.entity.TauxTaxe38;
import org.bshg.taxe38.entity.TypeLocale38Detail;
import org.bshg.taxe38.entity.CategorieLocale;
import org.bshg.taxe38.zutils.pagination.Pagination;
import java.util.List;
public interface TauxTaxe38Service {
TauxTaxe38 findById(Long id);
List<TauxTaxe38> findAllOptimized();
List<TauxTaxe38> findAll();
Pagination<TauxTaxe38> findPaginated(int page, int size);
TauxTaxe38 create(TauxTaxe38 item);
List<TauxTaxe38> create(List<TauxTaxe38> item);
TauxTaxe38 update(TauxTaxe38 item);
List<TauxTaxe38> update(List<TauxTaxe38> item);
void deleteById(Long id);
void delete(TauxTaxe38 item);
void delete(List<TauxTaxe38> items);
void deleteByIdIn(List<Long> ids);
int deleteByTypeLocale38DetailId(Long id);
List<TauxTaxe38> findByTypeLocale38DetailId(Long id);
int deleteByCategorieLocaleId(Long id);
List<TauxTaxe38> findByCategorieLocaleId(Long id);
}