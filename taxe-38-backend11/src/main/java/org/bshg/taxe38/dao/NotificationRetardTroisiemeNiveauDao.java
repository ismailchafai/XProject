package org.bshg.taxe38.dao;
import org.bshg.taxe38.entity.NotificationRetardTroisiemeNiveau;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface NotificationRetardTroisiemeNiveauDao extends JpaRepository<NotificationRetardTroisiemeNiveau, Long> {
int deleteByIdIn(List<Long> ids);
int deleteByLocaleId(Long id);
List<NotificationRetardTroisiemeNiveau> findByLocaleId(Long id);
int deleteByRedevableId(Long id);
List<NotificationRetardTroisiemeNiveau> findByRedevableId(Long id);
int deleteByTrimId(Long id);
List<NotificationRetardTroisiemeNiveau> findByTrimId(Long id);
}