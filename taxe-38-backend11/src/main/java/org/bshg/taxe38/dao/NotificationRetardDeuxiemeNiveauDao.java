package org.bshg.taxe38.dao;
import org.bshg.taxe38.entity.NotificationRetardDeuxiemeNiveau;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface NotificationRetardDeuxiemeNiveauDao extends JpaRepository<NotificationRetardDeuxiemeNiveau, Long> {
int deleteByIdIn(List<Long> ids);
int deleteByLocaleId(Long id);
List<NotificationRetardDeuxiemeNiveau> findByLocaleId(Long id);
int deleteByRedevableId(Long id);
List<NotificationRetardDeuxiemeNiveau> findByRedevableId(Long id);
}