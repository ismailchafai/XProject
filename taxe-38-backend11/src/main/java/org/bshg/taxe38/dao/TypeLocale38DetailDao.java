package org.bshg.taxe38.dao;
import org.bshg.taxe38.entity.TypeLocale38Detail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface TypeLocale38DetailDao extends JpaRepository<TypeLocale38Detail, Long> {
int deleteByIdIn(List<Long> ids);
@Query("SELECT NEW TypeLocale38Detail(item.id,item.libelle) FROM TypeLocale38Detail item")
List<TypeLocale38Detail> findAllOptimized();
}