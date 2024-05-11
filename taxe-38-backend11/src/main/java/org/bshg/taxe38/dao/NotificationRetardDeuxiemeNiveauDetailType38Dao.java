package org.bshg.taxe38.dao;
import org.bshg.taxe38.entity.NotificationRetardDeuxiemeNiveauDetailType38;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface NotificationRetardDeuxiemeNiveauDetailType38Dao extends JpaRepository<NotificationRetardDeuxiemeNiveauDetailType38, Long> {
int deleteByIdIn(List<Long> ids);
int deleteByTypeLocale38Id(Long id);
List<NotificationRetardDeuxiemeNiveauDetailType38> findByTypeLocale38Id(Long id);
}