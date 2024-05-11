package org.bshg.taxe38.services.facade;
import org.bshg.taxe38.entity.NotificationRetardDeuxiemeNiveau;
import org.bshg.taxe38.entity.Locale;
import org.bshg.taxe38.entity.Redevable;
import org.bshg.taxe38.zutils.pagination.Pagination;
import java.util.List;
public interface NotificationRetardDeuxiemeNiveauService {
NotificationRetardDeuxiemeNiveau findById(Long id);
List<NotificationRetardDeuxiemeNiveau> findAllOptimized();
List<NotificationRetardDeuxiemeNiveau> findAll();
Pagination<NotificationRetardDeuxiemeNiveau> findPaginated(int page, int size);
NotificationRetardDeuxiemeNiveau create(NotificationRetardDeuxiemeNiveau item);
List<NotificationRetardDeuxiemeNiveau> create(List<NotificationRetardDeuxiemeNiveau> item);
NotificationRetardDeuxiemeNiveau update(NotificationRetardDeuxiemeNiveau item);
List<NotificationRetardDeuxiemeNiveau> update(List<NotificationRetardDeuxiemeNiveau> item);
void deleteById(Long id);
void delete(NotificationRetardDeuxiemeNiveau item);
void delete(List<NotificationRetardDeuxiemeNiveau> items);
void deleteByIdIn(List<Long> ids);
int deleteByLocaleId(Long id);
List<NotificationRetardDeuxiemeNiveau> findByLocaleId(Long id);
int deleteByRedevableId(Long id);
List<NotificationRetardDeuxiemeNiveau> findByRedevableId(Long id);
}