package org.bshg.taxe38.services.facade;
import org.bshg.taxe38.entity.Locale38Detail;
import org.bshg.taxe38.entity.TypeLocale38Detail;
import org.bshg.taxe38.zutils.pagination.Pagination;
import java.util.List;
public interface Locale38DetailService {
Locale38Detail findById(Long id);
List<Locale38Detail> findAllOptimized();
List<Locale38Detail> findAll();
Pagination<Locale38Detail> findPaginated(int page, int size);
Locale38Detail create(Locale38Detail item);
List<Locale38Detail> create(List<Locale38Detail> item);
Locale38Detail update(Locale38Detail item);
List<Locale38Detail> update(List<Locale38Detail> item);
void deleteById(Long id);
void delete(Locale38Detail item);
void delete(List<Locale38Detail> items);
void deleteByIdIn(List<Long> ids);
int deleteByTypeLocale38DetailId(Long id);
List<Locale38Detail> findByTypeLocale38DetailId(Long id);
}