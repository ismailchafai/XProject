package org.bshg.taxe38.dao;
import org.bshg.taxe38.entity.NotificationRetardDeuxiemeNiveauDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface NotificationRetardDeuxiemeNiveauDetailDao extends JpaRepository<NotificationRetardDeuxiemeNiveauDetail, Long> {
int deleteByIdIn(List<Long> ids);
int deleteByTrimId(Long id);
List<NotificationRetardDeuxiemeNiveauDetail> findByTrimId(Long id);
}