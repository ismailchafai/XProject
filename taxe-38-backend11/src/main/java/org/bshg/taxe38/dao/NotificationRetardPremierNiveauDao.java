package org.bshg.taxe38.dao;
import org.bshg.taxe38.entity.NotificationRetardPremierNiveau;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface NotificationRetardPremierNiveauDao extends JpaRepository<NotificationRetardPremierNiveau, Long> {
int deleteByIdIn(List<Long> ids);
int deleteByLocaleId(Long id);
List<NotificationRetardPremierNiveau> findByLocaleId(Long id);
int deleteByRedevableId(Long id);
List<NotificationRetardPremierNiveau> findByRedevableId(Long id);
}