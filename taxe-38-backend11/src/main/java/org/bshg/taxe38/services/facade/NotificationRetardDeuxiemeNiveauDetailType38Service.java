package org.bshg.taxe38.services.facade;
import org.bshg.taxe38.entity.NotificationRetardDeuxiemeNiveauDetailType38;
import org.bshg.taxe38.entity.TypeLocale38Detail;
import org.bshg.taxe38.zutils.pagination.Pagination;
import java.util.List;
public interface NotificationRetardDeuxiemeNiveauDetailType38Service {
NotificationRetardDeuxiemeNiveauDetailType38 findById(Long id);
List<NotificationRetardDeuxiemeNiveauDetailType38> findAllOptimized();
List<NotificationRetardDeuxiemeNiveauDetailType38> findAll();
Pagination<NotificationRetardDeuxiemeNiveauDetailType38> findPaginated(int page, int size);
NotificationRetardDeuxiemeNiveauDetailType38 create(NotificationRetardDeuxiemeNiveauDetailType38 item);
List<NotificationRetardDeuxiemeNiveauDetailType38> create(List<NotificationRetardDeuxiemeNiveauDetailType38> item);
NotificationRetardDeuxiemeNiveauDetailType38 update(NotificationRetardDeuxiemeNiveauDetailType38 item);
List<NotificationRetardDeuxiemeNiveauDetailType38> update(List<NotificationRetardDeuxiemeNiveauDetailType38> item);
void deleteById(Long id);
void delete(NotificationRetardDeuxiemeNiveauDetailType38 item);
void delete(List<NotificationRetardDeuxiemeNiveauDetailType38> items);
void deleteByIdIn(List<Long> ids);
int deleteByTypeLocale38Id(Long id);
List<NotificationRetardDeuxiemeNiveauDetailType38> findByTypeLocale38Id(Long id);
}