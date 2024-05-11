package org.bshg.taxe38.dao;
import org.bshg.taxe38.entity.TauxTaxe38;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface TauxTaxe38Dao extends JpaRepository<TauxTaxe38, Long> {
int deleteByIdIn(List<Long> ids);
int deleteByTypeLocale38DetailId(Long id);
List<TauxTaxe38> findByTypeLocale38DetailId(Long id);
int deleteByCategorieLocaleId(Long id);
List<TauxTaxe38> findByCategorieLocaleId(Long id);
}