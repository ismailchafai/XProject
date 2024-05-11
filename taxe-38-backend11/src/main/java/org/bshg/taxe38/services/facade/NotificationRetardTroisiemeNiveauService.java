package org.bshg.taxe38.services.facade;
import org.bshg.taxe38.entity.NotificationRetardTroisiemeNiveau;
import org.bshg.taxe38.entity.Locale;
import org.bshg.taxe38.entity.Trim;
import org.bshg.taxe38.entity.Redevable;
import org.bshg.taxe38.zutils.pagination.Pagination;
import java.util.List;
public interface NotificationRetardTroisiemeNiveauService {
NotificationRetardTroisiemeNiveau findById(Long id);
List<NotificationRetardTroisiemeNiveau> findAllOptimized();
List<NotificationRetardTroisiemeNiveau> findAll();
Pagination<NotificationRetardTroisiemeNiveau> findPaginated(int page, int size);
NotificationRetardTroisiemeNiveau create(NotificationRetardTroisiemeNiveau item);
List<NotificationRetardTroisiemeNiveau> create(List<NotificationRetardTroisiemeNiveau> item);
NotificationRetardTroisiemeNiveau update(NotificationRetardTroisiemeNiveau item);
List<NotificationRetardTroisiemeNiveau> update(List<NotificationRetardTroisiemeNiveau> item);
void deleteById(Long id);
void delete(NotificationRetardTroisiemeNiveau item);
void delete(List<NotificationRetardTroisiemeNiveau> items);
void deleteByIdIn(List<Long> ids);
int deleteByLocaleId(Long id);
List<NotificationRetardTroisiemeNiveau> findByLocaleId(Long id);
int deleteByRedevableId(Long id);
List<NotificationRetardTroisiemeNiveau> findByRedevableId(Long id);
int deleteByTrimId(Long id);
List<NotificationRetardTroisiemeNiveau> findByTrimId(Long id);
}