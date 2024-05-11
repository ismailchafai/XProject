package org.bshg.taxe38.dao;
import org.bshg.taxe38.entity.Taxe38Detail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface Taxe38DetailDao extends JpaRepository<Taxe38Detail, Long> {
int deleteByIdIn(List<Long> ids);
int deleteByLocale38DetailId(Long id);
List<Taxe38Detail> findByLocale38DetailId(Long id);
int deleteByTauxTaxe38Id(Long id);
List<Taxe38Detail> findByTauxTaxe38Id(Long id);
int deleteByTaxe38Id(Long id);
List<Taxe38Detail> findByTaxe38Id(Long id);
}