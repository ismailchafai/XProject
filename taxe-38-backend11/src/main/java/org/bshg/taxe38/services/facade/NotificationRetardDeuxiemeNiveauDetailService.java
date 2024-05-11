package org.bshg.taxe38.services.facade;
import org.bshg.taxe38.entity.NotificationRetardDeuxiemeNiveauDetail;
import org.bshg.taxe38.entity.Trim;
import org.bshg.taxe38.zutils.pagination.Pagination;
import java.util.List;
public interface NotificationRetardDeuxiemeNiveauDetailService {
NotificationRetardDeuxiemeNiveauDetail findById(Long id);
List<NotificationRetardDeuxiemeNiveauDetail> findAllOptimized();
List<NotificationRetardDeuxiemeNiveauDetail> findAll();
Pagination<NotificationRetardDeuxiemeNiveauDetail> findPaginated(int page, int size);
NotificationRetardDeuxiemeNiveauDetail create(NotificationRetardDeuxiemeNiveauDetail item);
List<NotificationRetardDeuxiemeNiveauDetail> create(List<NotificationRetardDeuxiemeNiveauDetail> item);
NotificationRetardDeuxiemeNiveauDetail update(NotificationRetardDeuxiemeNiveauDetail item);
List<NotificationRetardDeuxiemeNiveauDetail> update(List<NotificationRetardDeuxiemeNiveauDetail> item);
void deleteById(Long id);
void delete(NotificationRetardDeuxiemeNiveauDetail item);
void delete(List<NotificationRetardDeuxiemeNiveauDetail> items);
void deleteByIdIn(List<Long> ids);
int deleteByTrimId(Long id);
List<NotificationRetardDeuxiemeNiveauDetail> findByTrimId(Long id);
}