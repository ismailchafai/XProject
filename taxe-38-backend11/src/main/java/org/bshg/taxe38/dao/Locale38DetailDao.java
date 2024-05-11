package org.bshg.taxe38.dao;
import org.bshg.taxe38.entity.Locale38Detail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface Locale38DetailDao extends JpaRepository<Locale38Detail, Long> {
int deleteByIdIn(List<Long> ids);
int deleteByTypeLocale38DetailId(Long id);
List<Locale38Detail> findByTypeLocale38DetailId(Long id);
}