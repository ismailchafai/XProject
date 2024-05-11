package org.bshg.taxe38.dao;
import org.bshg.taxe38.entity.CategorieLocale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface CategorieLocaleDao extends JpaRepository<CategorieLocale, Long> {
int deleteByIdIn(List<Long> ids);
@Query("SELECT NEW CategorieLocale(item.id,item.libelle) FROM CategorieLocale item")
List<CategorieLocale> findAllOptimized();
}