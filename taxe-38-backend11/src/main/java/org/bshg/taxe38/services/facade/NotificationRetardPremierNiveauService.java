package org.bshg.taxe38.services.facade;
import org.bshg.taxe38.entity.NotificationRetardPremierNiveau;
import org.bshg.taxe38.entity.Locale;
import org.bshg.taxe38.entity.Redevable;
import org.bshg.taxe38.zutils.pagination.Pagination;
import java.util.List;
public interface NotificationRetardPremierNiveauService {
NotificationRetardPremierNiveau findById(Long id);
List<NotificationRetardPremierNiveau> findAllOptimized();
List<NotificationRetardPremierNiveau> findAll();
Pagination<NotificationRetardPremierNiveau> findPaginated(int page, int size);
NotificationRetardPremierNiveau create(NotificationRetardPremierNiveau item);
List<NotificationRetardPremierNiveau> create(List<NotificationRetardPremierNiveau> item);
NotificationRetardPremierNiveau update(NotificationRetardPremierNiveau item);
List<NotificationRetardPremierNiveau> update(List<NotificationRetardPremierNiveau> item);
void deleteById(Long id);
void delete(NotificationRetardPremierNiveau item);
void delete(List<NotificationRetardPremierNiveau> items);
void deleteByIdIn(List<Long> ids);
int deleteByLocaleId(Long id);
List<NotificationRetardPremierNiveau> findByLocaleId(Long id);
int deleteByRedevableId(Long id);
List<NotificationRetardPremierNiveau> findByRedevableId(Long id);
}