package org.bshg.taxe38.services.facade;
import org.bshg.taxe38.entity.Taxe38;
import org.bshg.taxe38.entity.Locale;
import org.bshg.taxe38.entity.Trim;
import org.bshg.taxe38.entity.Taxe38Detail;
import org.bshg.taxe38.entity.Redevable;
import org.bshg.taxe38.zutils.pagination.Pagination;
import java.util.List;
public interface Taxe38Service {
Taxe38 findById(Long id);
List<Taxe38> findAllOptimized();
List<Taxe38> findAll();
Pagination<Taxe38> findPaginated(int page, int size);
Taxe38 create(Taxe38 item);
List<Taxe38> create(List<Taxe38> item);
Taxe38 update(Taxe38 item);
List<Taxe38> update(List<Taxe38> item);
void deleteById(Long id);
void delete(Taxe38 item);
void delete(List<Taxe38> items);
void deleteByIdIn(List<Long> ids);
int deleteByRedevableId(Long id);
List<Taxe38> findByRedevableId(Long id);
int deleteByLocaleId(Long id);
List<Taxe38> findByLocaleId(Long id);
int deleteByTrimId(Long id);
List<Taxe38> findByTrimId(Long id);
}